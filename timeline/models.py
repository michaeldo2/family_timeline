from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Event(models.Model):
	name = models.CharField(max_length=50)
	pub_date = models.DateTimeField()
	date = models.DateTimeField()
	description = models.CharField(max_length=400)
	image = models.ImageField()
	publisher = models.ForeignKey(User, related_name="events_published")
