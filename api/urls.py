from django.urls import path
from . import views

urlpatterns = [
    path('shorten/', views.shorten_url, name='shorten_url'),
    path('get_statistics/', views.get_statistics, name='get_statistics'),
    path('<str:shortcode>/', views.redirect_url, name='redirect_url'),
]
