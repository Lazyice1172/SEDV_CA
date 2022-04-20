from django.http import HttpResponse
from django.utils.translation import gettext_lazy as _
from django.shortcuts import render


def testlang(request):
    return HttpResponse(_('Welcome to language translation!'))


def index(request):
    return render(request, "index.html")
