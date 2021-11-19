const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navHeight: App.globalData.navHeight + 30 + 7, // 状态栏和导航栏高度
    editorValue: "",  // 用户输入内容
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  editor_input(e){
    let value = e.detail.text.replace(/[\n\r\ ]/g, '')
    this.setData({
      editorValue: value
    })
  },

  feedback() {
    console.log(this.data.editorValue);
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