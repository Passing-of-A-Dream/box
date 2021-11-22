import { userInfo } from '../../api/api'
import util from '../../utils/util.js'
const App = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    navHeight: 0,   // 手机状态栏高度
    userInfo: wx.getStorageSync('userInfo'),   // 用户信息
    avatar: wx.getStorageSync('userInfo').avatarUrl,
    sexItem: [
      { value: '1', name: '男', img: '/static/img/sex-boy.svg' },
      { value: '2', name: '女', img: '/static/img/sex-gril.svg' }
    ],
    sex: '',  // 性别
    age: [12,13,14,15,16,17,18,19,20],
    date: '选择',  // 年龄
    inputValue: "",  // 昵称
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取手机状态栏高度
    this.setData({
      navHeight: App.globalData.navHeight + 30 + 7
    })
    let age = this.data.age
    for (let i = 21; i <= 80; i++) {
      age.push(i)
    }
    this.setData({
      age: age,
      inputValue: this.data.userInfo.nickName
    })
  },
  // 上传头像
  upLoad() {
    wx.chooseImage({
      count: 1,
    })
  },
  // 性别选择
  radioChange(e) {
    // console.log(e.detail.value)
    const sexItem = this.data.sexItem
    for (let i = 0, len = sexItem.length; i < len; ++i) {
      sexItem[i].checked = sexItem[i].value === e.detail.value
    }
    this.setData({
      sexItem,
      sex: e.detail.value
    })
  },
  // 年龄选择
  bindDateChange(e) {
    this.setData({
      date: this.data.age[e.detail.value]
    })
  },
  // 昵称输入
  bindblur(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  // 确定 并提交信息
  btnReady() {
    let date = this.data.date
    let inputValue = this.data.inputValue
    let sex = this.data.sex
    let avatar = this.data.avatar
    if (date != "选择" && sex != '') {
      userInfo({
        age: date,
        avatar: avatar,
        gender: sex,
        nickname: inputValue
      }).then(res=>{
        console.log(res);
      })
    }
    // wx.navigateTo({
    //   url: '../index/index',
    // })
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