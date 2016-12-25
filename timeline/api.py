from django.conf.urls import url

from . import handlers

urlpatterns = [
	# ex: /events/
    url(r'^events/$', handlers.events),
]