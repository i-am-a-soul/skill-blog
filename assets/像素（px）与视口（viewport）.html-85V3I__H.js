import{_ as e,o,c,e as d}from"./app-M6OZmubj.js";const p="/skill-blog/img/0034.png",t="/skill-blog/img/0035.png",n="/skill-blog/img/0036.png",a="/skill-blog/img/0037.png",s="/skill-blog/img/0038.png",i="/skill-blog/img/0039.png",l={},r=d('<h1 id="像素-px-与视口-viewport" tabindex="-1"><a class="header-anchor" href="#像素-px-与视口-viewport" aria-hidden="true">#</a> 像素（<code>px</code>）与视口（<code>viewport</code>）</h1><p>在移动端，我们提起像素时实际上会涉及到设备像素和<code>CSS</code>像素。在早些时候开发<code>PC</code>端<code>Web</code>页面的时候并不需要考虑设备物理像素，因为那时候的屏幕一个<code>CSS</code>像素就等于一个物理像素。但是随着屏幕分辨率提高，一个<code>CSS</code>像素很可能代表多个物理像素。例如从<code>iPhone 4</code>开始，苹果公司就推出了视网膜屏幕，物理像素相对于之前的设备提高了一倍，但是屏幕尺寸却没有变化，这时一个<code>CSS</code>像素会由两个物理像素来显示，一些<code>Android</code>设备的屏幕也是如此，有时候一个<code>CSS</code>像素由多个物理像素来显示。我们可以通过<code>window.devicePixelRatio</code>来获取物理像素和<code>CSS</code>像素的比值：</p><p><code>window.devicePixelRatio = 物理像素 / CSS像素</code>。</p><p>这个值我们称作设备像素比，简称<code>DPR</code>。如果要在非视网膜屏幕的浏览器中手动调整物理像素和<code>CSS</code>像素的比值。一种方式就是使用<code>Chrome</code>浏览器上的模拟器来模拟不同设备上的浏览器显示效果，可以选择默认的移动端设备，也可以自定义移动设备屏幕尺寸以及<code>DPR</code>。</p><p>再来看第二个概念：视口（<code>viewport</code>）。视口可以理解为显示整个页面的容器，它可能比浏览器的可视区域要大，也可能比浏览器可视区域小，是可以进行缩放的。默认情况下视口大小会和浏览器可视区域保持一致，也可以通过<code>document.documentElement.clientWidth</code>和<code>document.documentElement.clientHeight</code>分别获取宽和高。</p><p>我们以长沙人才网为例，这个网站是针对<code>PC</code>端进行开发的，并没有对移动端进行适配。在<code>1440px × 900px</code>分辨率的<code>PC</code>屏幕的浏览器上打开网站首页会是正常显示的效果。</p><p><img src="'+p+'" alt=""></p><p>我们用模拟器模拟以移动设备<code>iPhone 7</code>访问该页面时的效果。</p><p><img src="'+t+'" alt=""></p><p>再打开控制台查看一下相关参数。</p><p><img src="'+n+`" alt=""></p><p>明显视口宽度已经超出了可视区域宽度，但为何能完整地显示在屏幕上？那是因为进行了缩放。在移动端浏览器中打开（超出设备可视区域的）<code>PC</code>端网站，浏览器默认会将视口宽度设置为<code>980</code>。</p><p>如果我们把视口调整为与可视区域同宽，那么可以在<code>head</code>标签中加入一行代码：</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>元数据标签<code>meta</code>的<code>name</code>值为“<code>viewport</code>”的时候，可以对视口进行设置，这里我们用到了一个参数<code>initial-scale</code>用来指定视口与可视区域的缩放比例，我们将其指定为<code>1</code>，即视口恢复默认大小（与<code>HTML</code>文档最大宽度一致）。</p><p><img src="`+a+'" alt=""></p><p>我们可以看到页面已经超出屏幕可视区域，需要向右横向滚动才可以浏览完整的页面。如果我们要恢复页面刚刚打开时的效果，使视口宽度与屏幕可见区域宽度相等，可以来计算一下缩放比例。</p><p>现在已知：</p><p>屏幕可视区域宽度：<code>375px</code></p><p>视口宽度：<code>980px</code></p><p>显然视口宽度已经超过了屏幕可视区域宽度，所以要缩小视口：</p><p><code>375 / 980 ≈ 0.38</code></p><p>缩放比例设置成<code>0.38</code>，基本上和刚打开页面的缩放尺寸一致。</p><p><img src="'+s+'" alt=""></p><p><code>viewport</code>还有其他常用属性，介绍如下：</p><ul><li><code>width</code>：预设宽度，取值范围为<code>200~10000</code>。</li><li><code>minimum-scale</code>：最小缩放比例，取值范围为<code>0.1~10</code>。</li><li><code>maximum-scale</code>：最大缩放比例，取值范围为<code>0.1~10</code>。</li><li><code>user-scalable</code>：是否允许用户改变缩放比例，取值为<code>yes</code>或<code>no</code>。</li></ul><p>总结一下，在移动设备上，<code>CSS</code>像素和物理像素可能出现一定比例，这个比例是由屏幕硬件本身决定的，可在模拟器上进行调试，但是不能修改。视口用于控制<code>HTML</code>文档的显示大小，可通过标签设置其与可视区域的比例来对页面进行缩放。</p><p>现在我们来考虑一下移动端屏幕的适配问题。在<code>PC</code>端可以通过媒体查询或者居中设置一个最小宽度来适应不同尺寸的屏幕。而在移动端情况要复杂一些，因为<code>DPR</code>不同，所以如果按照默认尺寸进行开发，很可能出现视觉效果不一致的情况。即使在同一个设备上，在某些<code>DPR</code>较高的情况下也可能出现效果不一致的问题。比如<code>1</code>个<code>CSS</code>像素代表<code>1.5</code>个物理像素，那么<code>1</code>个<code>CSS</code>像素的宽度，有的地方可能跨两个物理像素，有的地方可能跨<code>3</code>个物理像素。</p><p><img src="'+i+'" alt=""></p><p>所以为了精确还原设计稿，一种解决方案就是缩放视口，让<code>1</code>个<code>CSS</code>像素恰好代表<code>1</code>个物理像素。</p>',30),m=[r];function u(_,g){return o(),c("div",null,m)}const h=e(l,[["render",u],["__file","像素（px）与视口（viewport）.html.vue"]]);export{h as default};
