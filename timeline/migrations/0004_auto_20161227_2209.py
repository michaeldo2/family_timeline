# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2016-12-27 22:09
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('timeline', '0003_timelineentry_entry_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='historicalevent',
            name='link',
            field=models.URLField(blank=True, null=True),
        ),
    ]
