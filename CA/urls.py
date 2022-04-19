from django.urls import path
from CA.views import *
app_name = 'CA'
urlpatterns = [
    path('home', index, name='index'),
    path('testlang', testlang, name='testlang'),
]
