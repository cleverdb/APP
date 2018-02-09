
Page({

  /**
   * 页面的初始数据
   */
  data: {
    readyUploadFiles:[],
    imgAreaHeight:195,
    flag:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var files = options.tempFilePaths.split(",");
    this.setData({
      readyUploadFiles: files,
      flag: files.length==9
    })
    
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
  
  formSubmit:function(res){
    console.log(res)
  },

  formReset:function(){

  },
  addImage:function(){
    var that = this;
    wx.chooseImage({
      count: 9, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        console.log(res)
        
        var temp = that.data.readyUploadFiles;
        res.tempFilePaths.map(arr => {
          temp.push(arr);
        })
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          readyUploadFiles: temp,
          flag: temp.length == 9,
        })
      }
    })
  },
  previewImage:function(){
    var that = this;
    wx.previewImage({
    current: '',
    urls: that.data.readyUploadFiles,
    success: function(res) {
      console.log(res);
    },
    fail: function(res) {},
    complete: function(res) {},
  })
  }
})