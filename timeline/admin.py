from django.contrib import admin

from .models import FamilyEvent
from .models import HistoricalEvent
from .models import TimelineImage
from .models import TimelineStory
from .models import FamilyEventStory
from .models import TimelineEntry


admin.site.register(FamilyEvent)
admin.site.register(HistoricalEvent)
admin.site.register(TimelineImage)
admin.site.register(TimelineStory)
admin.site.register(FamilyEventStory)
admin.site.register(TimelineEntry)