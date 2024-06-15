from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views


urlpatterns = [
   path("login/", views.login_view, name="login"),
    path("logout/", views.logout_view, name="logout"),
    path("registration/", views.register, name="register"),
    path("", views.welcome, name="welcome"),
    path("profile/", views.profile, name="profile"),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
