"""videoProject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView



# 第一种方法，使用path
# include((urlconf_module, 'test'),namespace='test')
# include()参数说明，包含2个参数，第一个是二元元组包括urls 和appname，第二个是namespace
urlpatterns = [
    # 管理界面路由
    path('admin/', admin.site.urls),
    # 首页路由
    path('', TemplateView.as_view(template_name="index.html")),
    # api 路由总接口
    path('api/', include(('backend.urls', 'api'), namespace='api')),
    # 防止前端刷新界面返回404,让所有前端刷新自动返回首页
    re_path(r'.*', TemplateView.as_view(template_name='index.html'))

]

# # 第二种方法，使用url
# urlpatterns = [
#     url(r'^admin/', admin.site.urls),
#     url(r'^api/', include(backend.urls)),
#     url(r'^$', TemplateView.as_view(template_name="index.html")),
# ]
