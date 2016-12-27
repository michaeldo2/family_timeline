from django.shortcuts import render
from django.shortcuts import get_object_or_404

from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
from django.template import loader

from .models import FamilyEvent
from .models import HistoricalEvent
from .models import TimelineImage
from .models import TimelineStory
from .models import FamilyEventStory
from .models import TimelineEntry

# Create your views here.

@login_required
def index(request):
    return render(request, 'timeline/index.html')


def event(request, event_id):
	event = get_object_or_404(Event, pk=event_id)
	print event
	context = {
		'event': event,
	}
	return render(request, 'timeline/event.html', context)


def add_event(request):
	return render(request, 'timeline/add_event.html')
