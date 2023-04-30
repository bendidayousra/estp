from rest_framework import serializers
from django.views import View
from django.http import JsonResponse
from .models import Form

class FormSerializer(serializers.ModelSerializer):
    class Meta:
        model = Form
        fields = ['nom', 'prenom', 'adresse', 'tel', 'image', 'description']

    
    


