from django.http import JsonResponse

# from django.shortcuts import render

# Create your views here.
from backend import models


# 返回首页数据


def getHomeData(request):
  if request.method == 'GET':
    # 对数据库查询的数据进行处理成前端需要的格式后,以json格式发给前端
    queryset = models.Dvideo.objects.all().order_by('vid')[0:30]
    resList = []
    for i in queryset:
      resList += [{
        "vid": i.vid,
        "title": i.title,
        "postimage": i.postimage,
        "prscimage": i.prscimage,
        "year": i.year,
        "showdate": i.showdate,
        "transname": i.transname,
        "vname": i.vname,
        "region": i.region,
        "category": i.category,
        "language": i.language,
        "captions": i.captions,
        "actors": i.actors,
        'labels': i.labels,
        "brief": i.brief,
        "prize": i.prize,
        "downlink": i.downlink,
        "imdb": i.imdb,
        "douban": i.douban,
        "director": i.director,
        "scenario": i.scenario
      }
      ]
    return JsonResponse({"homedata":resList}, safe=False)


# 根据vid返回 单条数据
def getOneMovieData(request):
    if request.method == 'GET':
        vid = request.GET.get('vid', default=-1)
        # 对数据库查询的数据进行处理成前端需要的格式后,以json格式发给前端
        queryset = models.Dvideo.objects.filter(vid=vid)
        resList = []
        for i in queryset:
            resList += [{
                "vid":  i.vid,
                "title": i.title,
                "postimage": i.postimage,
                "prscimage": i.prscimage,
                "year": i.year,
                "showdate":i.showdate,
                "transname": i.transname,
                "vname": i.vname,
                "region": i.region,
                "category": i.category,
                "language": i.language,
                "captions": i.captions,
                "actors": i.actors,
                'labels': i.labels,
                "brief": i.brief,
                "prize": i.prize,
                "downlink": i.downlink,
                "imdb": i.imdb,
                "douban": i.douban,
                "director": i.director,
                "scenario": i.scenario
              }
            ]
        return JsonResponse({"detaildata":resList}, safe=False)

# 接口模块1
# 手动编写api的方法，返回的response为json格式
# def getAllUser(request):
#   if request.method == 'GET':
#     queryset = models.Users.objects.all()
#     resList = []
#     for i in queryset:
#         resList += [{
#             "userType": i.userType,
#             "userId": i.userId,
#         }]
#     return JsonResponse(resList, safe=False)

# 接口模板2
# def getAllUser(request):
#   if request.method == 'GET':
#     # 手动编写api的方法，返回的response为json格式
#     queryset = models.Users.objects.all()
#     resList = []
#     for i in queryset:
#         resList += [{
#             "userType": i.userType,
#             "userId": i.userId,
#         }]
#     response = json.dumps(resList)
#     return HttpResponse(response, content_type="application/json")
