// app.js
App({
  onLaunch() {
    this.globalData.navHeight = wx.getSystemInfoSync().statusBarHeight

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.request({
          url: '',
          data: {
            code: res.code
          },
          success: (result)=>{
            
          },
        });
      }
    })
  },
  globalData: {
    navHeight: 0,
    userInfo: null
  }
})
