Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 图片url
    src: {
      type: String,
      value: 'https://s1.ax1x.com/2022/05/08/OlbiFI.gif'
    },
    // "加载中"图片url
    lazyImageUrl: {
      type: String,
      value: 'https://s1.ax1x.com/2022/05/08/OlbiFI.gif'
    },
    // mode
    mode: {
      type: String,
      value: 'widthFix'
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    imageId: '',
  },

  lifetimes: {
    // 在组件在视图层布局完成后执行
    ready() {
      // 生成唯一 imageId
      const imageId = 'image' + Date.now()

      this.setData({
        imageId
      })

      // 开启懒加载
      this.lazy('.' + imageId)
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 懒加载
    lazy(className) {
      const root = this

      const IntersectionObserver = this.createIntersectionObserver()

      IntersectionObserver.relativeToViewport()

      IntersectionObserver.observe(className, (res) => {
        if (res.intersectionRatio) {
          root.setData({
            lazyImageUrl: root.data.src
          })
          // 关闭监听
          IntersectionObserver.disconnect()
        }
      })
    },
  }
})
