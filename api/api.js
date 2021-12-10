import request from './http'
const devurl = 'http://localhost:3000'
const testurl = ''  // http
const prdurl = ''   // https
const mapurl = 'https://apis.map.qq.com'  // 腾讯地图

// 封装post方法
function PostRequest(url, data) {
  return request({
    url,
    method: 'POST',
    data
  })
}
// 封装get方法
function GetRequest(url, data) {
  return request({
    url,
    method: 'GET',
    data
  })
}

// 聊天获取UserSig
export function GetUserSig() {
  return GetRequest(`${prdurl}/wx/im/getUserSig`)
}

// 绑定用户和命题
export function bindUser(data) {
  return PostRequest(`${prdurl}/wx/match/bind`, data)
}

// 获取用户当前所在区县
export function getDistrict(data) {
  return GetRequest(`${mapurl}/ws/geocoder/v1/`, data)
}

// 用户匹配
export function UserMatch(data) {
  return PostRequest(`${prdurl}/wx/match/match`, data)
}

// 获取用户基本信息
export function getUserInfo() {
  return GetRequest(`${prdurl}/wx/user/index`)
}


// 上传用户注册信息
export function userInfo(data) {
  return PostRequest(`${prdurl}/wx/user/update`, data)
}

// 用户登录
export function Login(data) {
  return GetRequest(`${prdurl}/wx/auth/login/${data}`)
}

