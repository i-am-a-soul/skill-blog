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

## `inline-block`元素

内联块级元素，其相对于内联元素的优点就是可以设置宽高。当然它也有一个缺陷，即使用`inline-block`的元素之间会出现间距。不过这个问题可以通过将父元素的字体大小`font-size`设置为`0`，然后再单独设置各个元素字体大小的方式解决。

<p class="codepen" data-height="300" data-theme-id="light" data-default-tab="css,result" data-slug-hash="QWvVGvW" data-user="i-am-a-soul" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/i-am-a-soul/pen/QWvVGvW">
  inline-block</a> by Splay (<a href="https://codepen.io/i-am-a-soul">@i-am-a-soul</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

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
- 选择器是从右向左解析的，在选择器的右边尽量使用具有唯一性的选择器，而不要使用标签选择器这类容易匹配的选择器。
- 伪类：状态，伪元素：位置。

- 外边距折叠（`Margin collapsing`）只会发生在属于同一个`BFC`的`block box`之间。

- [可替换元素](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Replaced_element)。

- [继承属性与非继承属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/inheritance)。

- [`float`与`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/float)。

