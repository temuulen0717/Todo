from django.db import models

# Create your models here.

class Todo(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=1000)
    date = models.DateField()
    status = models.BooleanField()

    def __str__(self):
        return self.name
    