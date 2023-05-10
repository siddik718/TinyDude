# Generated by Django 4.2 on 2023-05-10 05:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_alter_url_shortcode_alter_url_shorturl'),
    ]

    operations = [
        migrations.AlterField(
            model_name='url',
            name='shortcode',
            field=models.IntegerField(default=0, unique=True),
        ),
        migrations.AlterField(
            model_name='url',
            name='shorturl',
            field=models.URLField(default='localhost:8000'),
        ),
    ]
