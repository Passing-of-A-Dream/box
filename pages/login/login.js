// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goTo: 1, // 判断是否首次登录
    userInfo: {}, // 用户资料
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  GoIndex() {
    // 获取用户信息
    wx.getUserProfile({
      desc: '展示用户信息',
      success: (res) => {
        // console.log(res);
        this.setData({
          userInfo: res.userInfo
        })
        wx.setStorageSync('userInfo', res.userInfo)
        // 判断用户是否首次注册并跳转
        if (this.data.goTo === 0) {
          wx.navigateTo({
            url: '../loginIn/loginIn',
          });
        } else if (this.data.goTo === 1){
          wx.switchTab({
            url: '../index/index'
          })
        }
      }
    })

    let that = this;
    // 获取用户位置信息
    wx.getLocation({
      success(res) {
        // console.log(res);
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
        wx.setStorageSync('latitude', res.latitude)
        wx.setStorageSync('longitude', res.longitude)
      }
    })
  },
  getPhoneNumber(e) {
    // console.log(e.detail.errMsg)
    // console.log(e.detail.iv)
    // console.log(e.detail.encryptedData)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})