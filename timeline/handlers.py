import json

from django.http import HttpResponse
from django.core import serializers
from django.utils.encoding import force_text
from django.contrib.auth import get_user
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt

from .api_utils import get_event_dict
from .api_utils import get_user_dict
from .models import Comment
from .models import Event
from .models import Story

# Constants
POST = 'POST'
GET = 'GET'

# Create your api handlers here.

def events(request):
    """
    Returns a list following event fields:
     - publisher
        - first_name
        - last_name
        - id
     - name
     - description
     - date
     - id
     - [stories]
        - id
        - publisher
        - description
     - num_stories
    """
    if request.method == GET:
        event_objs = Event.objects.order_by('date')
        events_by_year = {}
        for event_obj in event_objs:
            year = event_obj.year
            if year not in events_by_year:
                events_by_year[year] = []
            event = get_event_dict(event_obj)
            events_by_year[year].append(event)

        data = json.dumps(events_by_year)
        return HttpResponse(data, content_type="application/json")

    else:
        raise ValueError('Unsupported HTTP Request Method')


def event(request, event_id):
    """
    Returns the following event fields:
     - publisher
        - first_name
        - last_name
        - id
     - name
     - description
     - date
     - id
     - [stories]
        - id
        - publisher
        - description
     - num_stories
    """
    if request.method == GET:
        event_obj = Event.objects.get(pk=event_id)
        event = get_event_dict(event_obj)
        user_obj = event_obj.publisher
        user = get_user_dict(user_obj)
        event['publisher'] = user

        data = json.dumps(event)
        return HttpResponse(data, content_type="application/json")

    else:
        raise ValueError('Unsupported HTTP Request Method')


@csrf_exempt
def event(request):
    """
    Create an event and insert it into database
    Required Fields:
     - name
     - event_description
     - year

    Optional Fields:
     - date
     - image
     - story_description
    """
    if request.method == POST:
        # Shared Fields
        logged_in_user = User.objects.get(pk=2)

        # Event Fields
        name = request.POST.get('name')
        event_description = request.POST.get('event_description')
        year = request.POST.get('year')
        date = request.POST.get('date')
        image = request.POST.get('image')
        index = len(Event.objects.filter(year=year)) # add to end of list

        # Story Fields
        story_description = request.POST.get('story_description')

        new_event = Event(
                        name = name,
                        description = event_description,
                        year = year,
                        date = date,
                        image = image,
                        publisher = logged_in_user,
                        index = index
                    )

        new_event.save()

        if (story_description):
            new_story = Story(
                            event = new_event,
                            description = story_description,
                            publisher = logged_in_user
                        )

            new_story.save()
        
        return HttpResponse("Success")

    else:
        raise ValueError('Unsupported HTTP Request Method')
