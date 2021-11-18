// 获取应用实例
const App = getApp()

Page({
  data: {
    navHeight: App.globalData.navHeight, // 手机状态栏高度
    isShow: true, // 显示\隐藏
    latitude: 30.65984, // 经度
    longitude: 104.10194, // 维度
    avatarUrl: "", // 用户头像
    Proposition: "到台上歌唱一曲", // 命题
    NpcName: "不二酒吧(紫荆店)", // Npc名字
    backgroundColor: "#8d9dea", // 弹出层背景颜色
    distance: 7, // 距离
    heat: 1003, // 热度
    show: false, // 遮罩层的显示控制
    customCalloutMarkerIds: [], // 地图markers选点Id
    markers: [{
        iconPath: wx.getStorageSync("userInfo").avatarUrl,
        id: 0,
        // latitude: wx.getStorageSync("latitude"),
        // longitude: wx.getStorageSync("longitude"),
        latitude: 30.65984, // 经度
        longitude: 104.10194, // 维度
        width: 32,
        height: 32,
        zIndex: 999999,
        borderRadius: 31,
        customCallout: {
          anchorY: -3,
          anchorX: 0,
          display: 'BYCLICK',
        },
        label:{
          borderRadius: 8,
          borderWidth: 4,
          borderColor: '#fff',
          width:38,
          height: 38,
          anchorX: -19,
          anchorY: -35
        }
      }, // 第一永远是用户自己
      {
        iconPath: "https://thirdwx.qlogo.cn/mmopen/vi_32/0icg5wTP8ljPOJcI8S9qDBiaD7wvNmWhBnQ8AYIibHlHMJNezEk8qExZf5XMAsfXzibiceGqBtZekA4n04DRdmJ5rEQ/132",
        id: 1,
        latitude: 30.658870,
        longitude: 104.101950,
        width: 32,
        height: 32,
        zIndex: 999999,
        customCallout: {
          anchorY: -3,
          anchorX: 0,
          display: 'BYCLICK',
        },
        label:{
          borderRadius: 8,
          borderWidth: 4,
          borderColor: '#fff',
          width:38,
          height: 38,
          anchorX: -19,
          anchorY: -35
        }
      }, {
        iconPath: "https://thirdwx.qlogo.cn/mmopen/vi_32/0icg5wTP8ljPOJcI8S9qDBiaD7wvNmWhBnQ8AYIibHlHMJNezEk8qExZf5XMAsfXzibiceGqBtZekA4n04DRdmJ5rEQ/132",
        id: 2,
        latitude: 30.658600,
        longitude: 104.103500,
        width: 32,
        height: 32,
        zIndex: 999999,
        customCallout: {
          anchorY: -3,
          anchorX: 0,
          display: 'BYCLICK',
        },
        label:{
          borderRadius: 8,
          borderWidth: 4,
          borderColor: '#fff',
          width:38,
          height: 38,
          anchorX: -19,
          anchorY: -35
        }
      }, {
        iconPath: "https://thirdwx.qlogo.cn/mmopen/vi_32/0icg5wTP8ljPOJcI8S9qDBiaD7wvNmWhBnQ8AYIibHlHMJNezEk8qExZf5XMAsfXzibiceGqBtZekA4n04DRdmJ5rEQ/132",
        id: 3,
        latitude: 30.660600,
        longitude: 104.100900,
        width: 32,
        height: 32,
        zIndex: 999999,
        customCallout: {
          anchorY: -3,
          anchorX: 0,
          display: 'BYCLICK',
        },
        label:{
          borderRadius: 8,
          borderWidth: 4,
          borderColor: '#fff',
          width:38,
          height: 38,
          anchorX: -19,
          anchorY: -35
        }
      },
    ], //  地图选点
  },
  onLoad: function (options) {
    // 获取用户经纬度以及用户头像
    this.setData({
      latitude: wx.getStorageSync("latitude"),
      longitude: wx.getStorageSync("longitude")
    })
    // 地图markers的上弹窗
    let customCalloutMarkerIds = []
    let ids = this.data.markers
    for (let i = 1; i < ids.length; i++) {
      customCalloutMarkerIds.push(ids[i].id)
    }
    this.setData({
      customCalloutMarkerIds
    })
    console.log(this.data.customCalloutMarkerIds);
    console.log(this.data.markers);
  },
  // 点击前往Npc主页
  callouttap(e) {

  },
  // 点击匹配弹出遮罩层
  match(e) {
    this.setData({
      show: true
    })
  },
  // 点击放弃遮罩层关闭
  onClose() {
    this.setData({
      show: false
    });
  },
  onShow: function () {
    // tabbar的导航
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },
})