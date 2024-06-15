from django.db import models
from django.contrib.auth.models import AbstractUser
from PIL import Image
from io import BytesIO
from django.core.files.uploadedfile import InMemoryUploadedFile


class SiteUser (AbstractUser):
    avatar = models.ImageField(
        upload_to="profile_pics/", default="default.png", null=True, blank=True)
    birth_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
    
    def save(self, *args, **kwargs):
        if self.avatar:
            img = Image.open(self.avatar)
            img.thumbnail((300, 300))
            output = BytesIO()
            img.save(output, format='png', quality=100)
            self.avatar = InMemoryUploadedFile(output, 'ImageField', "%s.png" % self.avatar.name.split('.')[0], 'avatar/png', output.tell(), None)

        super().save(*args, **kwargs)


# Create your models here.
