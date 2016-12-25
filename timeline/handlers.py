import json

from django.http import HttpResponse
from django.core import serializers

from .models import Comment
from .models import Event
from .models import Story

# Create your api handlers here.

def events(request):
	events = serializers.serialize("json", Event.objects.all())
	return HttpResponse(events, content_type="application/json")

