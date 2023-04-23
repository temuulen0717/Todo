from .views import TodoViewSet
from rest_framework.routers import DefaultRouter
from backend_api import views

router = DefaultRouter()
router.register(r'todo', views.TodoViewSet, basename='todo')
urlpatterns = router.urls
