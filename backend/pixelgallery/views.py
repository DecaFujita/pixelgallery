from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ArtSerializer, UserSerializer
from .models import Art, User


class ArtView(viewsets.ModelViewSet):
    serializer_class = ArtSerializer
    queryset = Art.objects.all()

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()