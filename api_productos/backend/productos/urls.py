from rest_framework import serializers
from .views import ModelViewSet

router = routers.DefaultRouter()
router.register(r'productos', ProductoViewSet)

urlpatterns = router.urls
