# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2016-12-27 03:22
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('timeline', '0002_auto_20161227_0250'),
    ]

    operations = [
        migrations.AddField(
            model_name='timelineentry',
            name='entry_type',
            field=models.CharField(default='FAMILY_EVENT', max_length=16),
            preserve_default=False,
        ),
    ]