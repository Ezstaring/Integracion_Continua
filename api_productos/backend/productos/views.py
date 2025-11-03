from rest_framework import viewsets
from .models import Producto
from .serializers import ProductoSerializer
from django.http import HttpResponse

class ProductoViewSet(viewsets.ModelViewSet):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

def home(request):
    return HttpResponse("¡Bienvenido al backend de Productos!")