from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Employee(models.Model):
    user=models.ForeignKey(User,null=True,on_delete=models.CASCADE,unique=True)
    name = models.CharField(max_length=100)
    mobile = models.CharField(max_length=16)
    address = models.CharField(max_length=1000)
    designation = models.CharField(max_length=500)
    fcm_token = models.CharField(max_length=100, null=True, blank=True)

    class Meta:
        verbose_name_plural = 'Employee'
        verbose_name = 'Employee'

    def __str__(self):
        return self.name
class Admin(models.Model):
    user=models.ForeignKey(User,null=True,on_delete=models.CASCADE, unique=True)
    name = models.CharField(max_length=100)
    mobile = models.CharField(max_length=16)
    address = models.CharField(max_length=1000)
    designation = models.CharField(max_length=500)
    fcm_token = models.CharField(max_length=100, null=True, blank=True)


    class Meta:
        verbose_name_plural = 'Admin'
        verbose_name = 'Admin'

    def __str__(self):
        return self.name

