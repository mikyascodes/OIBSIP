from django.db import models
from django.utils import timezone


class Task(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField(blank=True)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    completed = models.BooleanField(default=False)
    completion_date = models.DateTimeField(null=True, blank=True)

    def save(self, *args, **kwargs):
        if self.completed and not self.completion_date:
            self.completion_date = timezone.now()
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title
