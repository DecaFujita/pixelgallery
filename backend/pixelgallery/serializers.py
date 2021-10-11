from rest_framework import serializers
from .models import Art, User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username')

class ArtSerializer(serializers.ModelSerializer):
    class Meta:
        model = Art
        fields = ('id', 'title','artist', 'likes', 'pixelart')
