// index.js
const app = getApp()
Page({
  data: {
    list:["渝中区","永川区","荣昌区"],
  },
  scan:function(e)
  {
    wx.showToast({
      title: 'title',
    })
    console.log(e)
  }
})