const App = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navHeight: App.globalData.navHeight + 30 + 7, // 状态栏和导航栏高度
    avatarUrl: "https://thirdwx.qlogo.cn/mmopen/vi_32/0icg5wTP8ljPOJcI8S9qDBiaD7wvNmWhBnQ8AYIibHlHMJNezEk8qExZf5XMAsfXzibiceGqBtZekA4n04DRdmJ5rEQ/132",
    isShow: true,  // 验码显示
    nickName: "昵称",   // 用户昵称
    version: "V1.0.123",   // 版本号
    show: false,  // 遮罩层显示
    xy_title: "用户协议",   // 协议标题
    rich_text: `这是用户协议这是用户协议这是用户协议这是用户协议这是用户协议
    这是用户协议这是用户协议这是用户协议这是用户协议这是用户协议这是用户协议
    这是用户协议这是用户协议这是用户协议这是用户协议这是用户协议这是用户协议
    这是用户协议这是用户协议这是用户协议这是用户协议这是用户协议这是用户协议
    这是用户协议这是用户协议这是用户协议这是用户协议这是用户协议这是用户协议
    这是用户协议这是用户协议这是用户协议这是用户协议这是用户协议这是用户协议
    这是用户协议这是用户协议这是用户协议这是用户协议这是用户协议这是用户协议
    这是用户协议这是用户协议这是用户协议这是用户协议这是用户协议这是用户协议
    这是用户协议这是用户协议这是用户协议这是用户协议这是用户协议这是用户协议
    这是用户协议这是用户协议这是用户协议这是用户协议这是用户协议这是用户协议
    这是用户协议这是用户协议这是用户协议这是用户协议这是用户协议这是用户协议
    这是用户协议这是用户协议这是用户协议这是用户协议这是用户协议这是用户协议
    这是用户协议这是用户协议这是用户协议这是用户协议这是用户协议这是用户协议
    这是用户协议这是用户协议这是用户协议这是用户协议这是用户协议这是用户协议
    这是用户协议`,
    scrollNum: 0, // 滚动区域顶部位置
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onPopup(){
    this.setData({
      show:true,
      xy_title: "用户协议",
    })
  },
  onPopup2(){
    this.setData({
      show:true,
      xy_title: "安全风险提示"
    })
  },
  onClose() {
    this.setData({
      show: false,
      scrollNum: 0,
    });
  },
  // 意见反馈
  feedback(){
    wx.navigateTo({
      url: '../feedback/feedback',
    });
  },
  saoma() {
    wx.navigateTo({
      url: '../verification/verification',
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
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 3
      })
    }
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