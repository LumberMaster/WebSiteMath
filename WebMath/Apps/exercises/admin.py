from django.contrib import admin

# Register your models here.

from .models import Exercise,Comment

admin.site.register(Exercise)
admin.site.register(Comment)