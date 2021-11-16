// 获取应用实例
const App = getApp()

Page({
  data: {
    navHeight: App.globalData.navHeight, // 手机状态栏高度
    isShow: true, // 显示\隐藏
    latitude: 30.65984, // 经度
    longitude: 104.10194, // 维度
    avatarUrl: "", // 用户头像
    customCalloutMarkerIds: [],
    markers: [{
      iconPath: "https://thirdwx.qlogo.cn/mmopen/vi_32/0icg5wTP8ljPOJcI8S9qDBiaD7wvNmWhBnQ8AYIibHlHMJNezEk8qExZf5XMAsfXzibiceGqBtZekA4n04DRdmJ5rEQ/132",
      id: 0,
      latitude: 30.65887,
      longitude: 104.10195,
      width: 31,
      height: 31,
      zIndex: 999,
      customCallout: {
        anchorY: 0,
        anchorX: 0,
        display: 'BYCLICK',
      },
      label: {
        borderRadius: 31
      }
    }, {
      iconPath: "https://thirdwx.qlogo.cn/mmopen/vi_32/0icg5wTP8ljPOJcI8S9qDBiaD7wvNmWhBnQ8AYIibHlHMJNezEk8qExZf5XMAsfXzibiceGqBtZekA4n04DRdmJ5rEQ/132",
      id: 1,
      latitude: 30.65860,
      longitude: 104.10350,
      width: 31,
      height: 31,
      customCallout: {
        anchorY: 0,
        anchorX: 0,
        display: 'BYCLICK',
      },
    }, {
      iconPath: "https://thirdwx.qlogo.cn/mmopen/vi_32/0icg5wTP8ljPOJcI8S9qDBiaD7wvNmWhBnQ8AYIibHlHMJNezEk8qExZf5XMAsfXzibiceGqBtZekA4n04DRdmJ5rEQ/132",
      id: 2,
      latitude: 30.66060,
      longitude: 104.10090,
      width: 31,
      height: 31,
      customCallout: {
        anchorY: 0,
        anchorX: 0,
        display: 'BYCLICK',
      },
    }, ], //  地图选点
    show: true,  // 遮罩层的显示控制
  },
  onLoad: function (options) {
    // 获取用户经纬度
    this.setData({
      // latitude: wx.getStorageSync("latitude"),
      longitude: wx.getStorageSync("longitude"),
      avatarUrl: wx.getStorageSync("userInfo").avatarUrl
    })
    // 地图markers的上弹窗
    let customCalloutMarkerIds = []
    let ids = this.data.markers
    for (let i = 0; i < ids.length; i++) {
      customCalloutMarkerIds.push(ids[i].id)
    }
    this.setData({
      customCalloutMarkerIds
    })
    console.log(this.data.customCalloutMarkerIds);
  },
  // 点击弹出遮罩层
  callouttap(e) {
    this.setData({
      show: true
    })
  },
  // 点击遮罩层关闭
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