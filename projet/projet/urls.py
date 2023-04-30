from django.urls import path, include
from rest_framework import routers
from application001.views import FormView
from django.contrib import admin
router = routers.DefaultRouter()
router.register('', FormView, basename='FormView')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('liste/', include(router.urls)),
]