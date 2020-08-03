from django.db import models


# Create your models here.
class Dvideo(models.Model):
  vid = models.IntegerField(primary_key=True)
  title = models.CharField(max_length=200, null=False)
  postimage = models.CharField(max_length=400, null=True)
  prscimage = models.CharField(max_length=400, null=True)
  year = models.CharField(max_length=20, null=True)
  showdate = models.CharField(max_length=200, null=True)
  transname = models.CharField(max_length=200, null=True)
  vname = models.CharField(max_length=200, null=True)
  region = models.CharField(max_length=50, null=True)
  category = models.CharField(max_length=100, null=True)
  language = models.CharField(max_length=50, null=True)
  captions = models.CharField(max_length=50, null=True)
  actors = models.CharField(max_length=3000, null=True)
  labels = models.CharField(max_length=300, null=True)
  brief = models.CharField(max_length=4000, null=True)
  prize = models.CharField(max_length=2000, null=True)
  downlink = models.CharField(max_length=2000, null=True)
  imdb = models.CharField(max_length=30, null=True)
  douban = models.CharField(max_length=30, null=True)
  director = models.CharField(max_length=2000, null=True)
  scenario = models.CharField(max_length=200, null=True)
