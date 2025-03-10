from django.contrib import admin

# Register your models here.
from .models import tweet

class TweetAdmin(admin.ModelAdmin):
    list_display = ['__str__', 'user']
    search_fields = ['content', 'user__username', 'user__email']
    class Meta:
        model = tweet

admin.site.register(tweet, TweetAdmin)

