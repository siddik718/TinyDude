# Generated by Django 4.2 on 2023-05-09 17:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_url_shorturl'),
    ]

    operations = [
        migrations.AlterField(
            model_name='url',
            name='shorturl',
            field=models.URLField(default='some_default_value', max_length=1000, unique=True),
        ),
    ]
