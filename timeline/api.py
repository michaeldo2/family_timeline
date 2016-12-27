from django.conf.urls import url

from . import handlers

urlpatterns = [
	# GET - get all events in the timeline
    url(r'^events/$', handlers.events),

    # GET - get the event with id
    url(r'^event/(?P<event_id>[0-9]+)$', handlers.event),

    # POST - add a family event
    url(r'^family_event/$', handlers.family_event),

    # POST - add a historical event
    url(r'^historical_event/$', handlers.historical_event),
]