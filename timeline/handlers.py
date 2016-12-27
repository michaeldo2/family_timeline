import json

from django.http import HttpResponse
from django.http import QueryDict
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

from .models import TimelineEntryTypes



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
        logged_in_user = User.objects.get(pk=1)

        print request.body

        body = json.loads(request.body)

        print body

        # Event Fields
        name = body.get('name')
        event_description = body.get('event_description')
        year = body.get('year')
        date = body.get('date')
        image = body.get('image')
        index = len(TimelineEntry.objects.filter(year=year)) # add to end of list

        # Story Fields
        story_description = body.get('story_description')

        new_event = FamilyEvent(
                        entry_type = TimelineEntryTypes.FAMILY_EVENT,
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


@csrf_exempt
def historical_event(request):
    """
    Create an event and insert it into database
    Required Fields:
     - name
     - year

    Optional Fields:
     - event_description
     - date
     - link
    """
    if request.method == POST:
        logged_in_user = User.objects.get(pk=1)

        print request.body

        body = json.loads(request.body)

        print body

        # Historical Event Fields
        name = body.get('name')
        event_description = body.get('event_description')
        year = body.get('year')
        date = body.get('date')
        image = body.get('image')
        link = body.get('link')
        index = len(FamilyEvent.objects.filter(year=year)) # add to end of list
        

        new_event = HistoricalEvent(
                        entry_type = TimelineEntryTypes.HISTORICAL_EVENT,
                        name = name,
                        description = event_description,
                        year = year,
                        date = date,
                        image = image,
                        link = link,
                        publisher = logged_in_user,
                        index = index
                    )

        new_event.save()
        
        return HttpResponse("Success")

    else:
        raise ValueError('Unsupported HTTP Request Method')