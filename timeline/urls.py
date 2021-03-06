from django.conf.urls import url

from . import views

urlpatterns = [
	# ex: /timeline/
    url(r'^$', views.index, name='index'),

    # ex: /timeline/5/
    url(r'^event/(?P<event_id>[0-9]+)/$', views.event, name='event'),

    #ex: /timeline/add_event/
    url(r'^add_event/$', views.add_event, name='add_event')
]