from django.shortcuts import render, redirect
from .models import URL
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import URLSerializer, LongURLSerializer
from rest_framework import status
import uuid

# Create your views here.
@api_view(['POST'])
def shorten_url(request):
    serializer = LongURLSerializer(data=request.data)
    if serializer.is_valid():
        longurl = serializer.validated_data['longurl']
        shortcode = str(uuid.uuid4())[:5]
        url = URL.objects.create(longurl=longurl,shortcode=shortcode)
        data = {'shorturl':shortcode}
        return Response(data,status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



@api_view(['GET'])
def redirect_url(request,shortcode):
    try:
        url = URL.objects.get(shortcode=shortcode)
        url.visited += 1
        url.save()
        return redirect(url.longurl)
    except URL.DoesNotExist:
        return Response({'error': 'Short URL not found.'}, status=404)



@api_view(['GET'])
def get_statistics(resuest):
    urls = URL.objects.order_by('-visited')
    serializer = URLSerializer(urls, many=True)
    return Response(serializer.data)
