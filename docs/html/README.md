# 知识点

## 删除`DOM`节点

```js
let e = document.getElementById('to-be-removed')

e.parentNode.removeChild(e)
e = null // 释放内存
```

## `DOMContentLoaded`与`Load`事件

`DOMContentLoaded`指的是文档中`DOM`内容加载完毕的时间，也就是说`HTML`结构已经是完整的了。但是我们知道，很多页面都包含图片、特殊字体、视频、音频等其他资源，由于这些资源由网络请求获取，因此当`DOM`内容加载完毕时，这些资源还没有请求或渲染完成，当页面上所有资源加载完成后，`Load`事件才会被触发。

## 其他

- 在`img`标签上写`alt`属性。
- `img`添加`width`和`height`，以免页面抖动。
- [doctype](https://developer.mozilla.org/zh-CN/docs/Glossary/Doctype)。
- `input`与`trim`

