import json

from django.http import HttpResponse
from django.core import serializers
from django.utils.encoding import force_text

from .models import Comment
from .models import Event
from .models import Story

# Constants
POST = 'POST'
GET = 'GET'

# Create your api handlers here.

def events(request):
    if request.method == GET:
        event_objs = Event.objects.all()
        events = []
        for event_obj in event_objs:
            event = {}

            # Event Fields to be Returned
            event['id'] = event_obj.id
            event['name'] = event_obj.name
            event['description'] = event_obj.description
            event['date'] = event_obj.date.isoformat()
            event['num_stories'] = len(event_obj.stories.all())

            events.append(event)

        data = json.dumps(events)
        return HttpResponse(data, content_type="application/json")

    else:
        raise ValueError('Unsupported HTTP Request Method')


def event(request, event_id):
    if request.method == GET:
        event = Event.objects.filter(pk=event_id)
        data = serializers.serialize("json", event)
        return HttpResponse(data, content_type="application/json")

    else:
        raise ValueError('Unsupported HTTP Request Method')
