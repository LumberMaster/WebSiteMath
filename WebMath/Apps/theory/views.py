from django.shortcuts import render

def TheoryMain(request):
    return render(request, 'theory/theory.html')

def Stereometry(request):
    return render(request, 'theory/stereometry.html')

def Trigonometry(request):
    return render(request, 'theory/trigonometry.html')

def Logarithms(request):
    return render(request, 'theory/logarithms.html')

def Derivative(request):
    return render(request, 'theory/derivative.html')
