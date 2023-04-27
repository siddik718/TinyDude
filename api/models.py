from django.db import models

# Create your models here.

class URL(models.Model):
    longurl = models.URLField()
    shortcode = models.CharField(max_length=10,unique=True)
    visited = models.BigIntegerField(default=0)

    def __str__(self):
        return self.longurl[0:20]
