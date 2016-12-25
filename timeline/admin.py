from django.contrib import admin

from .models import Comment
from .models import Event
from .models import Story
# Register your models here.


admin.site.register(Comment)
admin.site.register(Event)
admin.site.register(Story)