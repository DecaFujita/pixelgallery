from django.contrib import admin
from .models import Art, User

class ArtAdmin(admin.ModelAdmin):
    list_display = ('id', 'title','artist', 'likes')

admin.site.register(Art, ArtAdmin)
admin.site.register(User)
