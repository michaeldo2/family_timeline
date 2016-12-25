from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Event(models.Model):
	name = models.CharField(max_length=100)
	pub_date = models.DateTimeField()
	date = models.DateField()
	description = models.TextField()
	image = models.ImageField()
	publisher = models.ForeignKey(User, related_name="events_published")


class Story(models.Model):
	event = models.ForeignKey(Event, related_name="stories")
	publisher = models.ForeignKey(User, related_name="stories")
	description = models.TextField()
	pub_date = models.DateTimeField()


class Comment(models.Model):
	user = models.ForeignKey(User, related_name="comments")
	event = models.ForeignKey(Event, related_name="comments")
	pub_date = models.DateTimeField()
	comment = models.TextField()
