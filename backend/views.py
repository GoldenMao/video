from django.http import JsonResponse

# from django.shortcuts import render

# Create your views here.
from backend import models


# 返回首页数据


def getHomeData(request):
    if request.method == 'GET':
        print("getHomeData 被调用")
        # queryset = models.Users.objects.all()
        # 模拟数据 queryset
        queryset = [
          {"userId": 1, "userName": "zhang", "age": 18, "email": "zhang@111.com"},
          {"userId": 2, "userName": "wang", "age": 13, "email": "wang@121.com"},
          {"userId": 3, "userName": "fang", "age": 19, "email": "fang@163.com"},
        ]
        resList = []
        # 对数据库查询的数据进行处理成前端需要的格式后,以json格式发给前端
        for i in queryset:
            resList += [{
              "id": i["userId"],
              "name": i["userName"],
              "email": i["email"],
            }]
        print(resList)
        return JsonResponse(resList, safe=False)


# 根据vid返回 单条数据
def getOneMovieData(request):
    if request.method == 'GET':
        vid = request.GET.get('vid', default=-1)
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
        return JsonResponse(resList, safe=False)

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
