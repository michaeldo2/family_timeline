from django.shortcuts import render
from django.shortcuts import get_object_or_404

from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate
from django.contrib.auth import login
from django.contrib.auth import logout
from django.http import HttpResponse
from django.http import HttpResponseRedirect
from django.template import loader
from django.views.decorators.csrf import csrf_exempt

from .models import FamilyEvent
from .models import HistoricalEvent
from .models import TimelineImage
from .models import TimelineStory
from .models import FamilyEventStory
from .models import TimelineEntry

# Create your views here.

@login_required(login_url='/login/')
def index(request):
    return render(request, 'timeline/index.html')


def event(request, event_id):
    event = get_object_or_404(Event, pk=event_id)
    context = {
        'event': event,
    }
    return render(request, 'timeline/event.html', context)


def add_event(request):
    return render(request, 'timeline/add_event.html')


def login_url(request):
    return render(request, 'timeline/login.html')

def logout_url(request):
    logout(request)
    return HttpResponseRedirect('/login/')

@csrf_exempt
def login_action(request):
    body = json.loads(request.body)
    username = body.get('username')
    password = body.get('password')
    user = authenticate(username=username, password=password)
    if user is not None:
        login(request, user)
        return HttpResponseRedirect('/') 
    else:
        raise ValueError('Login Error')


