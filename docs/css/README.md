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

## 单行文本溢出隐藏

```css
.ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
```

## `footer`的位置

<p class="codepen" data-height="300" data-theme-id="light" data-default-tab="css,result" data-slug-hash="ExmMpvP" data-user="i-am-a-soul" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/i-am-a-soul/pen/ExmMpvP">
  自适应footer</a> by Splay (<a href="https://codepen.io/i-am-a-soul">@i-am-a-soul</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## 几种绝对长度单位

最常用、最基础的是像素（`px`）。不常用的绝对单位是`mm`（毫米）、`cm`（厘米）、`in`（英寸）、`pt`（点，印刷术语，`1 / 72`英寸）、`pc`（派卡，印刷术语，`12`点）。这些单位都可以通过公式互相换算：`1in = 25.4mm = 2.54cm = 6pc = 72pt = 96px`。因此，`16px`等于`12pt`（`16 / 96 × 72`）。

像素是一个具有误导性的名称，`CSS`像素并不严格等于显示器的像素，尤其在高清屏（视网膜屏）下。尽管`CSS`单位会根据浏览器、操作系统或者硬件适当缩放，在某些设备或者用户的分辨率设置下也会发生变化，但是`96px`通常等于一个物理英寸的大小。

## 定位

如果元素使用了静态定位，那么就说它未被定位。

绝对定位相对于最近祖先定位元素的`padding box`，如果祖先元素都没有定位，那么绝对定位的元素会基于初始包含块（`initial containing block`）来定位。初始包含块跟视口一样大，固定在网页的顶部。

通过`position: relative`创建定位包含块。

跟固定定位或者绝对定位不一样，不能用`top`、`right`、`bottom`和`left`改变相对定位元素的大小。这些值只能让元素在上、下、左、右方向移动。可以用`top`或者`bottom`，但它们不能一起用（`bottom`会被忽略）。同理，可以用`left`或者`right`，但它们也不能一起用（`right`会被忽略）。

## 层叠的规则

当声明冲突时，层叠会依据三种条件解决冲突：

1. 样式表的来源：样式是从哪里来的，包括
   - 作者样式表
   - 用户代理样式表（即浏览器默认样式）
   - 用户样式表（少见）
2. 选择器优先级：哪些选择器比另一些选择器更重要。
3. 源码顺序：样式在样式表里的声明顺序。

![](/skill-blog/img/0042.png)

## `!important`声明

**样式表的来源**规则有一个例外：标记为重要（`important`）的声明。如下所示，在声明的后面、分号的前面加上`!important`，该声明就会被标记为重要的声明。

`color: red !important;`

标记了`!important`的声明会被当作更高优先级的样式表来源，因此总体的优先级按照由高到低排列如下所示：

1. 作者样式表的`!important`
2. 作者样式表
3. 用户代理样式表

## 选择器优先级

- `1 0 0`：`id`

- `0 1 0`：类、伪类、属性

- `0 0 1`：标签、伪元素

通用选择器（`*`）和组合器（`>`、`+`、`~`）对优先级没有影响。

## 继承值与初始值

在不考虑`inherit`和`initial`关键字的情况下：

![](/skill-blog/img/0043.png)

## 全局修改盒模型为`border-box`

```css
:root {
    box-sizing: border-box; /* 根元素设置为 border-box */
}

*,
::before,
::after {
    box-sizing: inherit; /* 告诉其他所有元素和伪元素继承其盒模型 */
}
```

## 全局设置上下堆叠的元素的间距

将`body`放在猫头鹰选择器的前面，这样猫头鹰选择器就只能选中`body`内的元素。如果直接使用猫头鹰选择器，它还会选中`body`元素，因为它是`head`元素的相邻兄弟节点。

```css
body * + * {
    margin-top: 1.5em;
}
```

## 其他

- 陌生标签的`display`：`inline`。
- [box-sizing](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing)。
- 选择器是从右向左解析的，在选择器的右边尽量使用具有唯一性的选择器，而不要使用标签选择器这类容易匹配的选择器。
- 伪类：状态，伪元素：位置。
- 外边距折叠（`Margin collapsing`）只会发生在属于同一个`BFC`的`block box`之间。
- 只有上下外边距会产生折叠，左右外边距不会折叠。
- [可替换元素](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Replaced_element)。
- [继承属性与非继承属性](https://developer.mozilla.org/zh-CN/docs/Web/CSS/inheritance)。
- [`float`与`display`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/float)。

- `@`规则（`at-rules`）是指用“`@`”符号开头的语法。
- 优先级容易发展为一种“军备竞赛”。在大型项目中这一点尤为突出。通常最好让优先级尽可能低，这样当需要覆盖一些样式时，才能有选择空间。
- 在文档中，根节点是所有其他元素的祖先节点。根节点有一个伪类选择器（`:root`），可以用来选中它自己。这等价于类型选择器`html`，但是`:root`的优先级相当于一个类名，而不是一个标签。
- 一个无单位的`0`只能用于长度值和百分比，比如内边距、边框和宽度等，而不能用于角度值，比如度，或者时间相关的值，比如秒。
- 在编程中不推荐魔术数值，因为往往难以解释一个魔术数值生效的原因。如果不理解这个数值是怎么来的，就不会知道在不同的情况下会产生什么样的结果。
- `vertical-align`声明只会影响行内元素或者`table-cell`元素。

- `meta`标签告诉移动设备，你已经特意将网页适配了小屏设备。如果不加这个标签，移动浏览器会假定网页不是响应式的，并且会尝试模拟桌面浏览器，那之前的移动端设计就白做了。

- 给水平方向设置的内边距比垂直方向的要多一点，因为从美学上来讲这样更让人愉快。

- 状态类一般以`is-`或`has-`开头。

- [层叠上下文](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context)。

