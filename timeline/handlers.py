import json

from django.http import HttpResponse
from django.core import serializers
from django.utils.encoding import force_text
from django.contrib.auth.models import User

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
