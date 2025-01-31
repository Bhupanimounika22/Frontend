from django.db import models

# Create your models here.
class Student(models.Model):
    Fname = models.CharField(max_length=20)
    Lname = models.CharField(max_length=20)
    Email = models.EmailField(max_length=20)
    Address = models.CharField(max_length=50)

    def __str__(self) -> str:
        return self.Fname
