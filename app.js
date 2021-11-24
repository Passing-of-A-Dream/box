import {
  Login,
  GetUserSig
} from './api/api'
import TIM from './static/tim-wx'
import TIMUploadPlugin from './static/tim-upload-plugin'
import logger from './utils/logger'
import {
  SDKAPPID
} from './utils/GenerateTestUserSig'
App({
  onLaunch() {
    this.globalData.navHeight = wx.getSystemInfoSync().statusBarHeight
    // 用户登录
    wx.login({
      timeout: 10000,
      success: (res) => {
        Login(res.code).then(res => {
          console.log(res.data);
          wx.setStorageSync('token', res.data.token)
          wx.setStorageSync('userId', res.data.userId)
          // GetUserSig().then(res => {
          //   console.log(res, '请求userSIg');
          //   this.globalData.userInfo = {
          //     // userID: res.data.userId,
          //     userSig: res.data,
          //   }
          // })
        })
      }
    });
    // console.log(this.globalData);
    // 腾讯云IM初始化
    wx.setStorageSync('islogin', false)
    wx.$TUIKit = TIM.create({ SDKAppID: this.globalData.SDKAppID })
    // wx.$TUIKit.setLogLevel(0);  // 初始化日志 ,0:普通级别，日志量较多，接入时建议使用,1:release 级别，SDK 输出关键信息，生产环境时建议使用
    wx.$TUIKit.registerPlugin({ 'tim-upload-plugin': TIMUploadPlugin })
    wx.$TUIKitTIM = TIM
    wx.$TUIKitEvent = TIM.EVENT
    wx.$TUIKitVersion = TIM.VERSION
    wx.$TUIKitTypes = TIM.TYPES
    // 监听系统级事件
    wx.$TUIKit.on(wx.$TUIKitEvent.SDK_NOT_READY, this.onSdkNotReady)
    wx.$TUIKit.on(wx.$TUIKitEvent.KICKED_OUT, this.onKickedOut)
    wx.$TUIKit.on(wx.$TUIKitEvent.ERROR, this.onTIMError)
    wx.$TUIKit.on(wx.$TUIKitEvent.NET_STATE_CHANGE, this.onNetStateChange)
    wx.$TUIKit.on(wx.$TUIKitEvent.SDK_RELOAD, this.onSDKReload)
    wx.$TUIKit.on(wx.$TUIKitEvent.SDK_READY, this.onSDKReady)
  },
  globalData: {
    navHeight: 0,
    userInfo: null,
    SDKAppID: SDKAPPID,
  },
  // 腾讯云IM初始化函数
  onSDKReady() {

  },
  onSdkNotReady() {

  },

  onKickedOut() {
    wx.showToast({
      title: '您被踢下线',
      icon: 'error',
    })
    wx.navigateTo({
      url: './pages/TUI-Login/login',
    })
  },

  onTIMError() {
  },

  onNetStateChange() {

  },

  onSDKReload() {

  },
})