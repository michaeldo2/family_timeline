from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader

from .models import Event
# Create your views here.

def index(request):
    event_list = Event.objects.order_by('-date')[:5]
    template = loader.get_template('timeline/index.html')
    context = {
        'event_list': event_list,
    }
    return HttpResponse(template.render(context, request))


def event(request, event_id):
	return HttpResponse("event" + event_id)