const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navHeight: App.globalData.navHeight + 30 + 7, // 状态栏和导航栏高度
    avatarUrl: "https://thirdwx.qlogo.cn/mmopen/vi_32/0icg5wTP8ljPOJcI8S9qDBiaD7wvNmWhBnQ8AYIibHlHMJNezEk8qExZf5XMAsfXzibiceGqBtZekA4n04DRdmJ5rEQ/132",
    buttonShow: 1,  // 按钮显示
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  goToMeet(){
    wx.navigateTo({
      url: '../meet/meet',
    })
  },
  goTochat() {
    wx.navigateTo({
      url: '../chat/chatdetail/chatdetail',
    })
  },
  goToBack() {
    wx.navigateBack({
      delta: 1
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