from django.contrib import admin
from .models import URL

class URLAdmin(admin.ModelAdmin):
    # Define the fields to be displayed in the admin list view
    list_display = ('longurl', 'shorturl', 'visited')

# Register your models here.
admin.site.register(URL,URLAdmin)