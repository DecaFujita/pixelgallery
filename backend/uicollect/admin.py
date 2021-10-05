from django.contrib import admin
from .models import Card, CardType, User
# Register your models here.

class CardTypeAdmin(admin.ModelAdmin):
    like_display = ('title')

class CardAdmin(admin.ModelAdmin):
    like_display = ('id', 'title', 'cardtype')

admin.site.register(Card, CardAdmin)
admin.site.register(CardType, CardTypeAdmin)
admin.site.register(User)