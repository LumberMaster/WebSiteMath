from django.urls import path
from . import views

urlpatterns = [
    path('',views.TheoryMain, name='TheoryMain'),
    path('stereometry/',views.Stereometry, name='Stereometry'),
    path('trigonometry/',views.Trigonometry, name='Trigonometry'),
    path('logarithms/',views.Logarithms, name='Logarithms'),
    path('derivative/',views.Derivative, name='Derivative'),
]