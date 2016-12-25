from django.shortcuts import render
from django.shortcuts import get_object_or_404

from django.http import HttpResponse
from django.template import loader

from .models import Comment
from .models import Event
from .models import Story
# Create your views here.

def index(request):
    event_list = Event.objects.all()
    context = {
        'event_list': event_list,
    }
    return render(request, 'timeline/index.html', context)


def event(request, event_id):
	event = get_object_or_404(Event, pk=event_id)
	print event
	context = {
		'event': event,
	}
	return render(request, 'timeline/event.html', context)


def add_event(request):
	return render(request, 'timeline/add_event.html')
