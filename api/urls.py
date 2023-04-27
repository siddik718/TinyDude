#Import necessary module 
from django.urls import path
from . import views

urlpatterns = [
    # Defines the URL pattern for the shorten_url view function
    path('shorten/', views.shorten_url, name='shorten_url'),
    # Defines the URL pattern for the get_statistics view function
    path('get_statistics/', views.get_statistics, name='get_statistics'),
    # Defines the URL pattern for the redirect_url view function
    path('<str:shortcode>/', views.redirect_url, name='redirect_url'),
]
