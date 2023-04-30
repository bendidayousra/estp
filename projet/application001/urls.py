from django.urls import path 
from application001 import views 
urlpatterns = [
      path('Form/', views.FormList.as_view()),
]
