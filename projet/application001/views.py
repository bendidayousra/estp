from .serializers import FormSerializer
from .models import Form
from django.shortcuts import render, HttpResponseRedirect
from rest_framework import viewsets
# Create your views here.
class FormView(viewsets.ModelViewSet):
    queryset = Form.objects.all()
    serializer_class= FormSerializer
def index(request):
    if request.method == "POST":
        form = Form(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect('/')
    else:
        form = Form()
    return render(request, "Formulaire.jsx", {'form': Form})