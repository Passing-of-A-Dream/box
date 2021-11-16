// 获取应用实例
const App = getApp()

Page({
  data: {
    navHeight: App.globalData.navHeight,  // 手机状态栏高度
    isShow: true,  // 显示\隐藏
    latitude: 30.65984,  // 经度
    longitude: 104.10194,  // 维度
    avatarUrl: "",  // 用户头像
  },
  onLoad: function (options) {
    this.setData({
      // latitude: wx.getStorageSync("latitude"),
      longitude: wx.getStorageSync("longitude"),
      avatarUrl: wx.getStorageSync("userInfo").avatarUrl
    })
  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&  this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },
})
