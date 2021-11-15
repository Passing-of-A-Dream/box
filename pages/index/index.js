// 获取应用实例
const App = getApp()

Page({
  data: {
    navHeight: App.globalData.navHeight,  // 手机状态栏高度
    isShow: true,  // 显示\隐藏
    latitude: 0,  // 经度
    longitude: 0,  // 维度
  },
  onLoad() {
    this.setData({
      latitude: wx.getStorageInfoSync("latitude"),
      longitude: wx.getStorageInfoSync("longitude")
    })
    
  },
})
