from django.conf.urls import url

from . import handlers

urlpatterns = [
	# GET - get all events in the timeline
    url(r'^events/$', handlers.events),

    # GET - get the event with id
    url(r'^event/(?P<event_id>[0-9]+)$', handlers.event),

    # POST - add an event
    url(r'^event/$', handlers.event),
]