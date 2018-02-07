

Page({
  data: {
    msg:"用户页面",
    
  },
  //事件处理函数
  bindViewTap: function () {
    
  },
  onLoad: function () {
  debugger
    console.log(wx.getStorageSync('userId'))
    this.setData({
    }); 
  },
  getUserInfo: function (e) {
    
  }
})