
#### 介绍
盒子危机小程序前端代码

陌生人社交类小程序，拥有聊天、匹配、线下交互等元素。通过各种命题绑定用户成组，实现社交类需求

#### 软件架构
小程序使用微信小程序原生开发，css使用的sass，在vscode环境下开发，修改配置让sass编译为wxss就可以使用。
小程序api使用的v2.21.0 版本，地图使用的map组件实现，定制样式基于腾讯地图api
UI库使用vant UI实现，头部封装有自定义导航栏，底部封装有tab-bar


#### 安装教程

1.  克隆本仓库
2.  在project.config.json里修改appid
3.  修改含有地图页面的文件里map组件的subkey，个性化自定义地图样式
4.  api设置在api文件夹内，可自定义修改
5.  聊天接入的腾讯云IM，在chat文件夹里修改样式即可，初始化在app.js里，登录在index.js里
6.  ##### 都有写注释，作者默认大家都看得懂
7.  腾讯云IM控制台复制SDKAPPID 在utils文件夹GenerateTestUserSig.js内粘贴你自己的APPID即可
8.  腾讯云IM就自己看文档吧 附上链接 https://cloud.tencent.com/document/product/269/37413
9.  微信API文档链接一起附上吧 https://developers.weixin.qq.com/miniprogram/dev/framework/
10. 以及vant UI库的小程序版链接 https://vant-contrib.gitee.io/vant-weapp/#/home
