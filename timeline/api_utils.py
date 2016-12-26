"""
Helper functions for API to extract fields into dictionaries and lists
"""

def get_event_dict(event_obj):
    event = {}

    # Event Fields to be Returned
    event['id'] = event_obj.id
    event['name'] = event_obj.name
    event['description'] = event_obj.description
    event['date'] = event_obj.date.isoformat()
    event['num_stories'] = len(event_obj.stories.all())

    return event

def get_user_dict(user_obj):
    user = {}

    # User Fields to be Returned
    user['id'] = user_obj.id
    user['first_name'] = user_obj.first_name
    user['last_name'] = user_obj.last_name

    return user

