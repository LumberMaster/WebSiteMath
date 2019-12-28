from django.shortcuts import render
from .models import Exercise, Comment

def index(request):
    exercise = Exercise.objects.order_by(id)[:5]
    return render(request,'exercises/exercise.html',{'exersice':exercise})