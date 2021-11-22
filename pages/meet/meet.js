const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navHeight: App.globalData.navHeight + 30 + 7, // 状态栏和导航栏高度
    avatarUrl: "https://thirdwx.qlogo.cn/mmopen/vi_32/0icg5wTP8ljPOJcI8S9qDBiaD7wvNmWhBnQ8AYIibHlHMJNezEk8qExZf5XMAsfXzibiceGqBtZekA4n04DRdmJ5rEQ/132",
    latitude: 30.65984, // 经度
    longitude: 104.10194, // 维度
    disabled: true,  //  按钮禁用
    scroll: false,   // 允许滑动
    num: 4,
    wordShow: false,  // 上面文字
    time: 3500,  // 倒计时
    timeData: {},
    vibraNum: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (this.data.num > 4) {
      this.setData({
        scroll: true
      })
    }
  },
  // 获取倒计时
  onChange(e) {
    this.setData({
      timeData: e.detail,
    });
  },

  onFinish(){
    let a =0
    let interval = setInterval(() => {
      a += 1;
      if (a === 5) {
        clearInterval(interval)
      }
      wx.vibrateLong({
        success: (res) => {
        },
      })
    }, 800);
    wx.showToast({
      title: '哦豁',
      icon: "none",
      image: "/static/img/toast.png",
      mask: true,
      duration: 6000,
    })
  },


  // 提示用户确定碰头
  match(e) {
    wx.showModal({
      title: '提示',
      content: '请确定到达指定碰头地点',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
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