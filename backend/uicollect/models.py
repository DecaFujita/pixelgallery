from django.contrib.auth.models import AbstractUser
from django.db import models
from django.urls import reverse

class User(AbstractUser):
    pass

# class Cards(models.Model):
#     card_type = models.ForeignKey(User, on_delete=models.CASCADE, related_name='card_type')

# class Collection(models.Model):
#     author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='created_by')
#     title = models.CharField(max_length=120)
#     cards = models.ForeignKey(Cards, on_delete=models.CASCADE, related_name='card')

#     def _str_(self):
#         return self.title

class CardType(models.Model):
    title = models.CharField(max_length=64)
    class Meta:
        verbose_name_plural = "Card types"

    def __str__(self):
        return f"{self.title}"

class Card(models.Model):
    cardtype = models.ForeignKey(CardType, on_delete=models.CASCADE)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    content = 
    
class Collection(models.Model):
    title = models.CharField(max_length=64)
    card = models.ForeignKey(CardType, on_delete=models.CASCADE)
    author = models.ForeignKey(User, on_delete=models.CASCADE)