from datetime import datetime

from django.db import models
from django.contrib.auth.models import User

from django.utils.encoding import python_2_unicode_compatible

# Create your models here.

@python_2_unicode_compatible
class Event(models.Model):
	name = models.CharField(max_length=100)
	pub_date = models.DateTimeField(default=datetime.now, blank=True)
	year = models.IntegerField()
	date = models.DateField(null=True, blank=True)
	index = models.IntegerField()
	description = models.TextField(null=True, blank=True)
	image = models.ImageField(null=True, blank=True)
	publisher = models.ForeignKey(User, related_name="events_published")


	def __str__(self):
		return self.name


@python_2_unicode_compatible
class Story(models.Model):
	event = models.ForeignKey(Event, related_name="stories")
	publisher = models.ForeignKey(User, related_name="stories")
	description = models.TextField()
	pub_date = models.DateTimeField(default=datetime.now, blank=True)

	def __str__(self):
		return self.event.name + " by " + self.publisher.username


@python_2_unicode_compatible
class Comment(models.Model):
	user = models.ForeignKey(User, related_name="comments")
	event = models.ForeignKey(Event, related_name="comments")
	pub_date = models.DateTimeField()
	comment = models.TextField()

	def __str__(self):
		return self.event.name + " by " + publisher.username
