// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      title: '我的最爱',
      loading: false,
      loadtxt: '正在加载',
      bg: '',
      trumpArr: [
        { 'url': '/pages/images/bg.png', 'desc': 'test1', 'name':'test1'}, 
        { 'url': '/pages/images/bg.png', 'desc': 'test1', 'name': 'test2' },  
        { 'url': '/pages/images/bg.png', 'desc': 'test1', 'name': 'test3' }
      ],
      actionSheetItems:[
        '添加','删除','修改'
      ],
      actionSheetHidden:true

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  testSheet:function(){
    debugger
    this.setData({
      actionSheetHidden: false
    })
  }
})