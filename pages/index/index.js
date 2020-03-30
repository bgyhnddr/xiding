//index.js

let scrollingToTop = false;
let scrollingToBottom = false;
let scrollTop = 0
let leftScrollTop = 0;
let rightScrollTop = 0;

Page({
  data: {
    outScroll: true,
    innerLeft: false,
    innerRight: false,
    scrollTop: 0,
    leftScrollTop: 0,
    rightScrollTop: 0,
    types: []
  },
  onOutScroll: function(e) {
    scrollTop = e.detail.scrollTop

    if (scrollingToTop && e.detail.scrollTop != 100) {
      this.setData({
        outScroll: false
      })
    } else if (e.detail.scrollTop == 100) {
      scrollingToTop = false
      this.setData({
        outScroll: true
      })
    }
    // if (scrollingToTop && e.detail.scrollTop == 100) {
    //   console.warn("enable-inner")
    //   scrollingToTop = false;
    //   this.setData({
    //     innerLeft: true,
    //     innerRight: true,
    //   })
    //   return;
    // }

    // if (scrollingToBottom && e.detail.scrollTop == 0) {
    //   scrollingToBottom = false;
    // }

    // if (e.detail.scrollTop !== 100) {
    //   scrollingToBottom = true;
    //   this.setData({
    //     scrollTop: 0,
    //     innerLeft: false || this.data.rightScrollTop !== 0,
    //     innerRight: false || this.data.rightScrollTop !== 0,
    //   })
    // }


    // if (e.detail.deltaY < 0) {
    //   scrollingToTop = true;
    //   this.setData({
    //     scrollTop: 100
    //   })
    // }

    if (scrollingToTop) {
      this.setData({
        innerLeft: false,
        innerRight: false,
      })
      return
    }

    if (e.detail.scrollTop == 100) {
      this.setData({
        innerLeft: true,
        innerRight: true,
      })
    } else {
      this.setData({
        innerLeft: false || leftScrollTop !== 0,
        innerRight: false || rightScrollTop !== 0,
      })
    }
  },
  onLeftScroll: function(e) {
    leftScrollTop = e.detail.scrollTop
    if (e.detail.deltaY < -8) {
      if (!scrollingToTop && scrollTop === 0) {
        scrollingToTop = true
        this.setData({
          scrollTop: 100,
          innerLeft: false || scrollTop === 100
        })
      }
    }
  },
  onRightScroll: function(e) {
    rightScrollTop = e.detail.scrollTop
    if (e.detail.deltaY < -8) {
      if (!scrollingToTop && scrollTop === 0) {
        scrollingToTop = true
        this.setData({
          scrollTop: 100,
          innerRight: false || scrollTop === 100
        })
      }
    }
  },
  onLoad: function() {
    this.setData({
      types: Array(50).fill(0).map((o, index) => {
        return `${index}菜`
      }),
      items: Array(255).fill(0).map((o, index) => {
        return `${index}个商品在此`
      })
    })
  }
})