# -*- coding: utf-8 -*-
# Generated by Django 1.10.4 on 2016-12-26 02:59
from __future__ import unicode_literals

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('timeline', '0005_auto_20161225_0505'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='index',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='event',
            name='year',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='event',
            name='date',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='event',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='event',
            name='pub_date',
            field=models.DateTimeField(blank=True, default=datetime.datetime.now),
        ),
    ]