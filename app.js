// app.js
App({
  onLaunch() {
    this.globalData.navHeight = wx.getSystemInfoSync().statusBarHeight
    // 用户登录
    wx.login({
      timeout: 10000,
      success: (res) => {
        // console.log(res.code);
        // wx.request({
        //   url: '',
        //   method: 'POST',
        //   data: {
        //     code: res.code,
        //   }
        // }).then(res=>{
        //   // 根据返回信息判断用户是否首次登录
        //   console.log(res);
        // })
      },
    });
  },
  globalData: {
    navHeight: 0,
    userInfo: null
  }
})
