from django.contrib.auth.models import User

from .models import TimelineEntryTypes

"""
Helper functions for API to extract fields into dictionaries and lists
"""

def get_entry_dict(entry_obj):
    entry_type = entry_obj.entry_type

    if entry_type == TimelineEntryTypes.FAMILY_EVENT:
        return get_family_event_dict(entry_obj)
    elif entry_type == TimelineEntryTypes.HISTORICAL_EVENT:
        return get_historical_event_dict(entry_obj)
    elif entry_type == TimelineEntryTypes.TIMELINE_STORY:
        return get_timeline_story_dict(entry_obj)
    elif entry_type == TimelineEntryTypes.TIMELINE_IMAGE:
        return get_timeline_image_dict(entry_obj)


def get_family_event_dict(family_event_obj):
    family_event = {}

    # Event Fields to be Returned
    family_event['entry_type'] = family_event_obj.entry_type
    family_event['id'] = family_event_obj.id
    family_event['year'] = family_event_obj.year
    family_event['index'] = family_event_obj.index
    family_event['name'] = family_event_obj.name
    family_event['description'] = family_event_obj.description
    family_event['date'] = family_event_obj.date.isoformat() if family_event_obj.date else None
    family_event['publisher'] = get_user_dict(family_event_obj.publisher)
    family_event['stories'] = [get_family_event_story_dict(family_eventstory) for family_event_story in family_event_obj.family_event_stories.all()]
    family_event['num_stories'] = len(family_event_obj.family_event_stories.all())

    return family_event


def get_historical_event_dict(historical_event_obj):
    historical_event = {}

    # Event Fields to be Returned
    historical_event['id'] = historical_event_obj.id
    historical_event['entry_type'] = historical_event_obj.entry_type
    historical_event['year'] = historical_event_obj.year
    historical_event['index'] = historical_event_obj.index
    historical_event['name'] = historical_event_obj.name
    historical_event['description'] = historical_event_obj.description
    historical_event['date'] = historical_event_obj.date.isoformat() if historical_event_obj.date else None
    historical_event['publisher'] = get_user_dict(historical_event_obj.publisher)
    historical_event['link'] = historical_event_obj.link

    return historical_event


def get_user_dict(user_obj):
    user = {}

    # User Fields to be Returned
    user['id'] = user_obj.id
    user['first_name'] = user_obj.first_name
    user['last_name'] = user_obj.last_name

    return user


def get_timeline_story_dict(timeline_story_obj):
    timeline_story = {}

    # Story Fields to be Returned
    timeline_story['id'] = timeline_story_obj.id
    timeline_story['entry_type'] = timeline_story_obj.entry_type
    timeline_story['year'] = timeline_story_obj.year
    timeline_story['index'] = timeline_story_obj.index
    timeline_story['name'] = timeline_story_obj.name
    timeline_story['description'] = timeline_story_obj.description
    timeline_story['publisher'] = get_user_dict(timeline_story_obj.publisher)

    return timeline_story


def get_family_event_story_dict(family_event_story_obj):
    family_event_story = {}

    # Story Fields to be Returned
    family_event_story['id'] = family_event_story_obj.id
    family_event_story['name'] = family_event_story_obj.name
    family_event_story['description'] = family_event_story_obj.description
    family_event_story['publisher'] = get_user_dict(family_event_story_obj.publisher)

    return family_event_story