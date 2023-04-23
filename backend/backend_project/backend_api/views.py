from django.shortcuts import render
from .models import Todo
from .serializers import TodoSerializer
from rest_framework import viewsets

# Create your views here.


class TodoViewSet(viewsets.ModelViewSet):
    serializer_class =  TodoSerializer
    queryset = Todo.objects.all()