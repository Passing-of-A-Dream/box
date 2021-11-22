import request from './http'
const devurl = 'http://localhost:3000'
const prdurl = 'http://47.103.133.241:8080/demo'
const testurl = ''

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
// 示例
// export function login() {
//   return GetRequest(`${prdurl}/wx/auth/login_by_weixin/`)
// }

export function userInfo(data) {
  return PostRequest(`${prdurl}/wx/user/update`,data)
}
