import request from './api/http'
App({
  onLaunch() {
    this.globalData.navHeight = wx.getSystemInfoSync().statusBarHeight
    // 用户登录
    wx.login({
      timeout: 10000,
      success: (res) => {
        request({
          url:`http://47.103.133.241:8080/demo/wx/auth/login_by_weixin/${res.code}`
        }).then(res=>{
          console.log(res.data);
          wx.setStorageSync('token', res.data.token)
          wx.setStorageSync('userId', res.data.userId)
        })
      }
    });
  },
  globalData: {
    navHeight: 0,
    userInfo: null
  }
})
