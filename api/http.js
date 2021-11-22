const request = options => {
  return new Promise((resolve, reject) => {
    const {
      data,
      method
    } = options
    if (data && method !== 'GET') {
      options.data = JSON.stringify(data)
    }
    // 添加Token
    let token = wx.getStorageSync('token') ? wx.getStorageSync('token') : ''
    wx.request({
      header: {
        'Content-Type': 'application/json',
        "Box-WX-Token": token,
      },
      ...options,
      success: (res) => {
        resolve(res.data)
      },
      fail: (err) => {
        reject(err)
      }
    })
  })
}

export default request