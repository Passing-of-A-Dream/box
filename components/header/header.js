const App = getApp();

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:String
  },
  /**
   * 组件的初始数据
   */
  data: {
    navHeight: 0, // 手机状态栏的高度
  },

  attached: function () {
    this.setData({
      navHeight: App.globalData.navHeight
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})