from django.contrib.auth.models import AbstractUser, User
from django.db import models;

class User(AbstractUser):
    pass

class Art(models.Model):
    title = models.CharField(max_length=120)
    artist = models.ForeignKey('User', on_delete=models.CASCADE, related_name='created_by')
    pixelart = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    likes = models.IntegerField(default=0)


    def _str_(self):
        return self.title

