import json

from django.http import HttpResponse
from django.core import serializers
from django.utils.encoding import force_text
from django.contrib.auth import get_user
from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt

from .api_utils import get_entry_dict

from .models import FamilyEvent
from .models import HistoricalEvent
from .models import TimelineImage
from .models import TimelineStory
from .models import FamilyEventStory
from .models import TimelineEntry



# Constants
POST = 'POST'
GET = 'GET'

# Create your api handlers here.

def events(request):
    if request.method == GET:
        entry_objs = TimelineEntry.objects.order_by('year', 'index').select_subclasses()
        entries_by_year = {}
        for entry_obj in entry_objs:
            year = entry_obj.year
            if year not in entries_by_year:
                entries_by_year[year] = []
            entry = get_entry_dict(entry_obj)
            entries_by_year[year].append(entry)

        data = json.dumps(entries_by_year)
        return HttpResponse(data, content_type="application/json")

    else:
        raise ValueError('Unsupported HTTP Request Method')


def event(request, event_id):
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
def family_event(request):
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
        logged_in_user = get_user(request.user)

        # Event Fields
        name = request.POST.get('name')
        event_description = request.POST.get('event_description')
        year = request.POST.get('year')
        date = request.POST.get('date')
        image = request.POST.get('image')
        index = len(FamilyEvent.objects.filter(year=year)) # add to end of list

        # Story Fields
        story_description = request.POST.get('story_description')

        new_event = FamilyEvent(
                        entry_type = 'FAMILY_EVENT',
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
            new_story = FamilyEventStory(
                            family_event = new_event,
                            description = story_description,
                            publisher = logged_in_user
                        )

            new_story.save()
        
        return HttpResponse("Success")

    else:
        raise ValueError('Unsupported HTTP Request Method')
