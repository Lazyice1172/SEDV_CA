from django.http import HttpResponse
from django.utils.translation import gettext_lazy as _
from django.shortcuts import render


def testlang(request):
    return HttpResponse(_('Welcome to language translation!'))


def index(request):
    return render(request, "index.html")


def about(request):
    return render(request, "about.html")


def order(request):
    return render(request, "order.html")


def cupcake(request):
    return render(request, "cupcake.html")
