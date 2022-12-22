from django.shortcuts import render

# Create your views here.
def fun1(request):
    return render (request, "signup.html")

def fun2(request):
    return render (request, "login.html")    

def fun3(request):
    return render (request, "home.html")     