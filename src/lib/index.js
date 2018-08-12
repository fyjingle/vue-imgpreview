import ImgPreview from './ImgPreview.vue'

const plugin = {
  install: function (Vue) {
    Vue.component(ImgPreview.name, ImgPreview)
  }
}

if (typeof window !== undefined && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin