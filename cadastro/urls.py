from django.urls import path
from . import views

urlpatterns = [
    path('', views.CadProduto_Impl, name='CadProduto_Impl')
]
