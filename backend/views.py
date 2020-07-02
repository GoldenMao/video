from django.http import JsonResponse

# from django.shortcuts import render

# Create your views here.
from backend import models


def getHomeData(request):
    print("getHomeData 被调用")
    # queryset = models.Users.objects.all()
    # 模拟数据 queryset
    queryset = [
        {"userId": 1, "userName": "zhang", "age": 18, "emial": "zhang@111.com"},
        {"userId": 2, "userName": "wang", "age": 13, "emial": "wang@121.com"},
        {"userId": 3, "userName": "fang", "age": 19, "emial": "fang@163.com"},
    ]
    resList = []
    # 对数据库查询的数据进行处理成前端需要的格式后,以json格式发给前端
    for i in queryset:
        resList += [{
            "id": i["userId"],
            "name": i["userName"],
            "email": i["emial"],
        }]
    print(resList)
    return JsonResponse(resList, safe=False)


# 接口模块1
# 手动编写api的方法，返回的response为json格式
# def getAllUser(request):
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
