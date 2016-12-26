from django.conf.urls import url

from . import handlers

urlpatterns = [
	# ex: /events/
    url(r'^events/$', handlers.events),
    url(r'^event/(?P<event_id>[0-9]+)$', handlers.event),
]