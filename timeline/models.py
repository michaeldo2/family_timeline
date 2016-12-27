from datetime import datetime

from django.db import models
from django.contrib.auth.models import User
from django.utils.encoding import python_2_unicode_compatible

from model_utils.managers import InheritanceManager


class TimelineEntryTypes:
    FAMILY_EVENT = 'FAMILY_EVENT'
    HISTORICAL_EVENT = 'HISTORICAL_EVENT'
    TIMELINE_STORY = 'TIMELINE_STORY'
    TIMELINE_IMAGE = 'TIMELINE_IMAGE'


class TimelineEntry(models.Model):
    year = models.IntegerField()
    index = models.IntegerField()
    entry_type = models.CharField(max_length=16)

    objects = InheritanceManager()


@python_2_unicode_compatible
class FamilyEvent(TimelineEntry):
    # Required Fields
    name = models.CharField(max_length=100)
    publisher = models.ForeignKey(User, related_name="family_events")
    pub_date = models.DateTimeField(default=datetime.now, blank=True)

    # Optional Fields
    date = models.DateField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    
    def __str__(self):
        return "Family Event " + self.name


@python_2_unicode_compatible
class HistoricalEvent(TimelineEntry):
    # Required Fields
    name = models.CharField(max_length=100)
    publisher = models.ForeignKey(User, related_name="historical_events")
    pub_date = models.DateTimeField(default=datetime.now, blank=True)

    # Optional Fields
    date = models.DateField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    image = models.ImageField(null=True, blank=True)
    link = models.URLField(max_length=200, null=True, blank=True)
    
    def __str__(self):
        return "Historical Event " + self.name


@python_2_unicode_compatible
class TimelineImage(TimelineEntry):
    # Required Fields
    caption = models.CharField(max_length=200)
    image = models.ImageField()

    def __str__(self):
        return "Image: " + caption


class AbstractStory(models.Model):
    # Required Fields
    name = models.CharField(max_length=100)
    description = models.TextField()
    pub_date = models.DateTimeField(default=datetime.now, blank=True)

    class Meta:
        abstract = True


@python_2_unicode_compatible
class TimelineStory(TimelineEntry, AbstractStory):
    publisher = models.ForeignKey(User, related_name="timeline_stories")
    def __str__(self):
        return "Timeline Story: " + self.name + " by " + self.publisher.username


@python_2_unicode_compatible
class FamilyEventStory(AbstractStory):
    family_event = models.ForeignKey(FamilyEvent, related_name="family_event_stories")
    publisher = models.ForeignKey(User, related_name="family_event_stories")

    def __str__(self):
        return "Family Event Story: " + self.family_event.name + " by " + self.publisher.username

