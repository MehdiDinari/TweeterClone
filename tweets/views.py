from django.shortcuts import render
from django.http import HttpResponse, Http404, JsonResponse
from .models import tweet
# Create your views here.
def home_view(request ,*args, **kwargs):
    return render(request,"pages/home.html", context={} ,status=200)

def tweet_detail_view(request,tweet_id ,*args, **kwargs):
    data = {
    "id": tweet_id,
       
    } 
      
    try:
     obj =tweet.objects.get(id=tweet_id)
     data['content']=obj.content
    except:
     data['message']="Not found"
     status =404

  
    return JsonResponse(data,status=status)
