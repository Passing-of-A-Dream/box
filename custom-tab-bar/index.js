Component({
  data: {
    selected: null,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "/pages/index/index",
      iconPath: "/static/img/index.png",
      selectedIconPath: "/static/img/index_select.png",
      text: "首页"
    }, {
      pagePath: "/pages/task/task",
      iconPath: "/static/img/task.png",
      selectedIconPath: "/static/img/task_select.png",
      text: "任务"
    }, {
      pagePath: "/pages/chat/chat",
      iconPath: "/static/img/chat.png",
      selectedIconPath: "/static/img/chat_select.png",
      text: "聊天"
    }, {
      pagePath: "/pages/me/me",
      iconPath: "/static/img/me.png",
      selectedIconPath: "/static/img/me_select.png",
      text: "我的"
    }]
  },
  attached() {},
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({
        url
      })
      // this.setData({
      //   selected: data.index
      // })
    }
  }
})