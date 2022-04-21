from django.urls import path
from CA.views import *
app_name = 'CA'
urlpatterns = [
    path('home', index, name='index'),
    path('about', about, name='about'),
    path('order', order, name='order'),
    path('cupcake', cupcake, name='cupcake'),
    path('testlang', testlang, name='testlang'),
]
