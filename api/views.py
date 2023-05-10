#Importing necessary modules and classes
from django.shortcuts import render, redirect
from .models import URL
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import URLSerializer, LongURLSerializer
from rest_framework import status
import uuid

# Create your views here.

#Define a view function that will handle the POST request to shorten the long URL
@api_view(['POST'])
def shorten_url(request):
    # Creating an instance of LongURLSerializer and passing the request data to it for validation
    serializer = LongURLSerializer(data=request.data)
    # Checking if the serializer is valid
    if serializer.is_valid():
        # Extracting the long URL from the validated data
        longurl = serializer.validated_data['longurl']
        # Generating a unique shortcode of length 5
        shortcode = str(uuid.uuid4())[:5]
        # Generate a short URL by combining the domain name of the current request and a randomly generated shortcode.
        shorturl = f"http://{request.META['HTTP_HOST']}/{shortcode}"
        # Creating a new URL object with the long URL and shortcode and saving it to the database
        url = URL.objects.create(longurl=longurl,shortcode=shortcode,shorturl=shorturl)
        # Creating a dictionary containing the shortcode and returning it as a HTTP response with status code 201 Created
        data = {'shorturl':shorturl}
        return Response(data,status=status.HTTP_201_CREATED)
        # If the serializer is not valid, returning the errors as a HTTP response with status code 400 Bad Request
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


#Define a view function that will handle the GET request to redirect to the long URL corresponding to the given shortcode
@api_view(['GET'])
def redirect_url(request,shortcode):
    try:
        # Retrieving the URL object from the database based on the given shortcode
        url = URL.objects.get(shortcode=shortcode)
        # Incrementing the visited count of the URL object
        url.visited += 1
        url.save()
        # Redirecting to the long URL using Django's redirect function
        return redirect(url.longurl)
    # If the URL object does not exist, returning an error message as a HTTP response with status code 404 Not Found
    except URL.DoesNotExist:
        return Response({'error': 'Short URL not found.'}, status=404)


#Define a view function that will handle the GET request to retrieve the statistics of all the URLs
@api_view(['GET'])
def get_statistics(resuest):
    # Retrieving all the URL objects from the database in descending order of visited count
    urls = URL.objects.order_by('-visited')
    # Serializing the URL objects using URLSerializer
    serializer = URLSerializer(urls, many=True)
    # Returning the serialized data as a HTTP response
    return Response(serializer.data)
