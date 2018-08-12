###vue-imgpreview
---

>Picture preview plugin for Vue.js2.0

#### 简介  
---
vue-imgpreview 是一个基于 Vue.js 2.0 开发的移动端图片预览插件，可达到常见 app 图片预览效果，支持单指拖动、双指缩放等多个场景下的手势操作  

#### 安装
---

      npm install vue-imgpreview

#### 使用
---
main.js

      import ImgPreview from 'vue-imgpreview'
      Vue.use(ImgPreview)

demo.vue

```
<template>
  <div id="app">
    <vue-imgpreview :imgList = "imgList"></vue-imgpreview>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgList: [
        'url',
        'url',
        'url',
      ]
    }
  }
}
</script>
```

#### 效果
---
![预览效果](https://github.com/sufengyong/vue-imgpreview/blob/master/demo.gif)
