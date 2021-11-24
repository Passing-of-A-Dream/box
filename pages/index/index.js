import { UserMatch, getDistrict, bindUser } from '../../api/api'
import logger from '../../utils/logger'
import { genTestUserSig } from "../../utils/GenerateTestUserSig";
// 获取应用实例
const App = getApp()
Page({
  data: {
    navHeight: App.globalData.navHeight, // 手机状态栏高度
    userInfo: wx.getStorageSync("userInfo"),   //  用户信息
    isShow: true, // 显示\隐藏
    latitude: 30.65984, // 经度
    longitude: 104.10194, // 维度
    district: wx.getStorageSync('district'),   // 用户所在区县
    avatarUrl: "", // 用户头像
    Proposition: "到台上歌唱一曲", // 命题
    NpcName: "不二酒吧(紫荆店)", // Npc名字
    backgroundColor: "#8d9dea", // 弹出层背景颜色
    distance: 7, // 距离
    heat: 1003, // 热度
    show: false, // 遮罩层的显示控制
    customCalloutMarkerIds: [], // 地图markers选点Id
    markers: [
      {
        iconPath: "https://thirdwx.qlogo.cn/mmopen/vi_32/0icg5wTP8ljPOJcI8S9qDBiaD7wvNmWhBnQ8AYIibHlHMJNezEk8qExZf5XMAsfXzibiceGqBtZekA4n04DRdmJ5rEQ/132",
        id: 1,
        latitude: 30.658870,
        longitude: 104.101950,
        width: 32,
        height: 32,
        zIndex: 999999,
        customCallout: {
          anchorY: -3,
          anchorX: 0,
          display: 'BYCLICK',
        },
      }, {
        iconPath: "https://thirdwx.qlogo.cn/mmopen/vi_32/0icg5wTP8ljPOJcI8S9qDBiaD7wvNmWhBnQ8AYIibHlHMJNezEk8qExZf5XMAsfXzibiceGqBtZekA4n04DRdmJ5rEQ/132",
        id: 2,
        latitude: 30.658600,
        longitude: 104.103500,
        width: 32,
        height: 32,
        zIndex: 999999,
        customCallout: {
          anchorY: -3,
          anchorX: 0,
          display: 'BYCLICK',
        },
      }, {
        iconPath: "https://thirdwx.qlogo.cn/mmopen/vi_32/0icg5wTP8ljPOJcI8S9qDBiaD7wvNmWhBnQ8AYIibHlHMJNezEk8qExZf5XMAsfXzibiceGqBtZekA4n04DRdmJ5rEQ/132",
        id: 3,
        latitude: 30.660600,
        longitude: 104.100900,
        width: 32,
        height: 32,
        zIndex: 999999,
        customCallout: {
          anchorY: -3,
          anchorX: 0,
          display: 'BYCLICK',
        },
      },
    ], //  地图选点
  },
  onLoad: function (options) {
    let that = this
    // 再次获取用户经纬度
    wx.getLocation({
      success(res) {
        // console.log(res);
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
        wx.setStorageSync('latitude', res.latitude)
        wx.setStorageSync('longitude', res.longitude)
        if (!that.data.district) {
          that.getCity()
        }
      }
    })
    // 地图markers的上弹窗
    let customCalloutMarkerIds = []
    let ids = this.data.markers
    for (let i = 0; i < ids.length; i++) {
      customCalloutMarkerIds.push(ids[i].id)
    }
    this.setData({
      customCalloutMarkerIds
    })
    // console.log(this.data.customCalloutMarkerIds);
    // console.log(this.data.markers);
    console.log(this.data.userInfo);
    this.IM_Login();
  },

  // 登录腾讯云IM
  IM_Login() {
    const userID = this.data.userInfo.nickName
    const userSig = genTestUserSig(userID).userSig
    logger.log(`TUI-login | login  | userSig:${userSig} userID:${userID}`)
    // App.globalData.userInfo = {
    //   userSig,
    //   userID,
    // }
    logger.log(`| TUI-Index | onshow | login |userSig:${userSig} userID:${userID}`)
    wx.$TUIKit.login({
      userID: userID,
      userSig: userSig,
    }).then(() => { })
      .catch(() => { })
  },

  // 获取城市区县函数
  getCity() {
    getDistrict({
      location: wx.getStorageSync('latitude') + ',' + wx.getStorageSync('longitude'),
      key: 'YSGBZ-US7C3-DMX3S-Y3RD6-OH4ZE-GPBZ7'
    }).then(res => {
      let district = res.result.address_component.city + res.result.address_component.district
      that.setData({
        district,
      })
      wx.setStorageSync('district', district)
    })
  },

  // 回到当前位置
  backLan() {
    let mpCtx = wx.createMapContext('map')
    mpCtx.moveToLocation()
    // this.getCity()
  },
  // 点击前往Npc主页
  callouttap(e) {
    wx.navigateTo({
      url: '../npcDetail/npcDetail',
    })
  },

  // 点击匹配弹出遮罩层
  match(e) {
    // 匹配命题
    UserMatch({
      distance: 5000,
      region: this.data.district
    }).then(res => {
      console.log(res);
    })
    this.setData({
      show: true
    })
  },
  // 点击放弃遮罩层关闭
  onClose() {
    this.setData({
      show: false
    });
  },
  // 点击前往命题详情
  goTopropositionDetail() {
    bindUser({
      npcId: 0,
      playerLimit: 0,
      propositionId: 0
    }).then(res => {

    })
    wx.navigateTo({
      url: '../propositionDetail/propositionDetail',
    })
  },

  onShow: function () {
    // tabbar的导航
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },
})