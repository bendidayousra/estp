from django.db import models

# Create your models here.
class Form(models.Model):
    nom = models.CharField(max_length=500 , null=True)
    prenom = models.CharField(max_length=500 , null=True)
    adresse = models.CharField(max_length=500 , null=True)
    tel = models.CharField(max_length=500 , null=True)
    image = models.ImageField(upload_to='upload/images' , null=False , blank=False)
    description = models.CharField(max_length=500 , null=True)

    def __str__(self):
        return self.nom
