from django.db import models

# Create your models here.

class URL(models.Model):
    #Defining a longurl field in the URL model as a URLField. max_length parameter limits the length of the URL to 200000 characters.
    longurl = models.URLField(max_length=200000)

    #Defining a shortcode field in the URL model as a CharField. max_length parameter sets the maximum length of the shortcode to 10 characters. unique=True ensures that each shortcode is unique.
    shortcode = models.CharField(max_length=10,unique=True)
    
    visited = models.BigIntegerField(default=0)
    #Defining a visited field in the URL model as a BigIntegerField. default=0 sets the initial value of the visited field to zero.

    def __str__(self):
        #Defining a string representation of the URL model that returns the first 10 characters of the longurl field.
        return self.longurl[0:10]
