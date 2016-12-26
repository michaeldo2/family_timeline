import json

from django.http import HttpResponse
from django.core import serializers
from django.utils.encoding import force_text
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
    Returns the following event fields:
     - publisher
        - first_name
        - last_name
        - id
     - name
     - description
     - date
     - id
     - num_stories
    """
    if request.method == GET:
        event_objs = Event.objects.all()
        events = []
        for event_obj in event_objs:
            event = get_event_dict(event_obj)
            user_obj = event_obj.publisher
            user = get_user_dict(user_obj)
            event['publisher'] = user
            events.append(event)

        data = json.dumps(events)
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
    """
    if request.method == POST:
        print request.body
        print request.POST
        name = request.POST.get('name')
        description = request.POST.get('description')
        year = request.POST.get('year')
        date = request.POST.get('date')
        image = request.POST.get('image')
        publisher = User.objects.get(pk=1)

        num_events_in_year = len(Event.objects.filter(year=year))
        index = num_events_in_year

        new_event = Event(
                        name = name,
                        description = description,
                        year = year,
                        date = date,
                        image = image,
                        publisher = publisher,
                        index = index
                    )

        new_event.save()
        
        return HttpResponse("Success")

    else:
        print request.GET
        raise ValueError('Unsupported HTTP Request Method')
