from django.conf.urls import url

from . import handlers

urlpatterns = [
	# GET - get all entries in the timeline
    url(r'^events/$', handlers.get_timeline_entries),

    # POST - add a family event
    url(r'^family_event/$', handlers.add_family_event),

    # POST - add a historical event
    url(r'^historical_event/$', handlers.add_historical_event),

    # POST - add a timeline story
    url(r'^timeline_story/$', handlers.add_timeline_story),
]