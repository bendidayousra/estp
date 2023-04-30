from django.contrib import admin
from .models import Form

admin.site.register(Form)
class FormAdmin(admin.ModelAdmin):
    list_display = ['nom', 'prenom', 'adresse', 'tel', 'image', 'description']