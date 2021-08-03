# 知识点

## 背景

<p class="codepen" data-height="300" data-theme-id="light" data-default-tab="css,result" data-slug-hash="NWpEWdO" data-user="i-am-a-soul" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/i-am-a-soul/pen/NWpEWdO">
  </a> by Splay (<a href="https://codepen.io/i-am-a-soul">@i-am-a-soul</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## `inline`元素

`width`与`height`在`img`上有效。

<p class="codepen" data-height="300" data-theme-id="light" data-default-tab="css,result" data-slug-hash="GRmWeBM" data-user="i-am-a-soul" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/i-am-a-soul/pen/GRmWeBM">
  inline</a> by Splay (<a href="https://codepen.io/i-am-a-soul">@i-am-a-soul</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

![](/skill-blog/img/0014.png)

参考资料：[细究内联元素（你一定不知道的东西）](https://zhuanlan.zhihu.com/p/31645001)

## 如何解决页面动画效果卡顿问题

- 一般来说，`CSS3`动画会比基于`JavaScript`实现的动画效率更高，因此会优先使用`CSS3`来实现动画。
- 在使用`CSS3`实现动画时，要考虑开启`GPU`加速（这一点并不总是产生正面效果）。
- 优先使用资源消耗最低的`transform`和`opacity`属性。
- 使用`will-change`属性。
- 独立合成层，减少绘制区域。
- 对于只能使用`JavaScript`实现动画效果的情况，可以考虑使用`requestAnimationFrame`和`requestIdleCallback API`。
- 批量进行样式变换，减少布局抖动。

## 横排块级元素

```css
.clearfix::after { // 父容器
    content: '';
    display: block;
    clear: both;
}
float: left; // 子元素
```

## `box`

- `block box`，指`display`属性为`block`、`list-item`、`table`的元素。
- `inline box`，指`display`属性为`inline`、`inline-block`、`inline-table`的元素。

## 其他

- 陌生标签的`display`：`inline`。
- [box-sizing](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing)。
- 选择器是从右向左解析的。
- 伪类：状态，伪元素：位置。

