# Generated by Django 4.2 on 2023-04-27 21:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_url_shortcode'),
    ]

    operations = [
        migrations.AlterField(
            model_name='url',
            name='longurl',
            field=models.URLField(max_length=200000),
        ),
    ]
