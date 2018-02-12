var pageFooter = require("../common/pageFooter.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    photos: [{ 'id': '1', 'url':'https://bpic.588ku.com/back_pic/05/28/56/185a0a68bb36de4.jpg!/fw/320/quality/90/unsharp/true/compress/true'},
      { 'id': '2', 'url': 'https://bpic.588ku.com/back_pic/05/28/56/185a0a68bb36de4.jpg!/fw/320/quality/90/unsharp/true/compress/true' },
      { 'id': '3', 'url': 'https://bpic.588ku.com/back_pic/05/28/56/185a0a68bb36de4.jpg!/fw/320/quality/90/unsharp/true/compress/true' },
      { 'id': '4', 'url': 'https://bpic.588ku.com/back_pic/05/28/56/185a0a68bb36de4.jpg!/fw/320/quality/90/unsharp/true/compress/true' },
      { 'id': '5', 'url': 'https://bpic.588ku.com/back_pic/05/28/56/185a0a68bb36de4.jpg!/fw/320/quality/90/unsharp/true/compress/true' }],
    imgAreaHeight: 195,
    flag: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let files = options.newPhoto;
    console.log(files);
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
    
  },
  uploadImage:function(){

    pageFooter.uploadImage()

  },
  testApi:function(){
    wx.request({
      url: 'http://172.22.34.34/classes', //仅为示例，并非真实的接口地址
      method:'get',
      data: {
        'st':'wx'
      },
      dataType:'json',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
      }
    })
  },
  photodetial: function(e){
    let photoId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/picdetial/picdetial?id=' + photoId,
    })
  }
})