# Importing serializers module from the rest_framework package
from rest_framework import serializers
from .models import URL

# Serializer for the URL model to convert it to JSON format
class URLSerializer(serializers.ModelSerializer):
    class Meta:
        model = URL
        fields = '__all__'

# Serializer for the Long URL data to be used in creating a new URL instance
class LongURLSerializer(serializers.ModelSerializer):
    class Meta:
        model = URL
        fields = ['longurl']