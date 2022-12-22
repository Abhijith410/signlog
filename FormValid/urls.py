from django.urls import path
from . import views

urlpatterns = [
    path('1/', views.fun1, name="1st"),
    path('2/', views.fun2, name="2nd"),
    path('3/', views.fun3, name="3rd"),
]