const App = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    navHeight: 0,   // 手机状态栏高度
    userInfo: {},   // 用户信息
    sexItem: [
      { value: 'boy', name: '男', img: '/static/img/sex-boy.svg' },
      { value: 'gril', name: '女', img: '/static/img/sex-gril.svg' }
    ],
    date: '选择',  // 年龄
    inputValue: "",  // 昵称
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      navHeight: App.globalData.navHeight + 30 + 7
    })
    wx.getUserInfo({
      withCredentials: 'false',
      lang: 'zh_CN',
      timeout: 10000,
      success: (res) => {
        console.log(res.userInfo);
        this.setData({
          userInfo: res.userInfo
        })
      },
    });
  },
  // 性别选择
  radioChange(e) {
    console.log(e.detail.value)
    const sexItem = this.data.sexItem
    for (let i = 0, len = sexItem.length; i < len; ++i) {
      sexItem[i].checked = sexItem[i].value === e.detail.value
    }
    this.setData({
      sexItem
    })
  },
  // 年龄选择
  bindDateChange(e) {
    console.log(e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  // 昵称输入
  bindblur(e) {
    this.setData({
      inputValue: e.detail.value
    })
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