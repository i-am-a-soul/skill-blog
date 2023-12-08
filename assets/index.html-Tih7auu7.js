import{_ as o,r as i,o as c,c as t,a as e,b as a,d as l,e as n}from"./app-M6OZmubj.js";const d="/skill-blog/img/0061.png",r="/skill-blog/img/0060.png",p="/skill-blog/img/0099.jpg",u="/skill-blog/img/0129.png",h="/skill-blog/img/0123.jpg",k="/skill-blog/img/0132.png",g={},m=n('<h1 id="知识点" tabindex="-1"><a class="header-anchor" href="#知识点" aria-hidden="true">#</a> 知识点</h1><h2 id="服务端渲染" tabindex="-1"><a class="header-anchor" href="#服务端渲染" aria-hidden="true">#</a> 服务端渲染</h2><p>服务端渲染是指由服务端完成页面<code>HTML</code>的渲染，然后发送到客户端，再由客户端为其绑定状态与事件，使之成为完全可交互页面的一种技术。</p><p>服务端渲染通常可以带来更好的用户体验，并且对于那些<strong>首屏渲染时间与转化率直接相关</strong>的应用程序而言，服务端渲染至关重要。</p><h2 id="mpa与spa" tabindex="-1"><a class="header-anchor" href="#mpa与spa" aria-hidden="true">#</a> <code>MPA</code>与<code>SPA</code></h2><p>多页应用（<code>Multi Page Application</code>，<code>MPA</code>）是指有多个独立的页面的应用，每个页面维护单独的<code>HTML</code>文档和<code>CSS</code>、<code>JavaScript</code>等静态资源，且每一次页面跳转都是由服务端返回一个新的<code>HTML</code>文档。</p><p><img src="'+d+'" alt=""></p><h2 id="合理使用图片格式" tabindex="-1"><a class="header-anchor" href="#合理使用图片格式" aria-hidden="true">#</a> 合理使用图片格式</h2><p><img src="'+r+`" alt=""></p><h2 id="本地开发场景下的两种代理方式" tabindex="-1"><a class="header-anchor" href="#本地开发场景下的两种代理方式" aria-hidden="true">#</a> 本地开发场景下的两种代理方式</h2><p>本地开发场景下，默认访问页面的地址是<code>http://127.0.0.1:3000</code>，但是后端接口可能是其他域名、端口，此时就会产生跨域问题，导致无法调试。基于以上问题，有两种代理方式：</p><ul><li>访问前端调试地址代理后端接口：将<code>http://127.0.0.1:3000</code>页面的请求代理到前端调试服务，然后通过调试服务向后端发起实际的接口请求。</li><li>访问后端页面地址代理前端资源：访问后端服务提供的页面<code>url</code>地址，此时页面中通常加载的都不是本地调试的前端资源，因此无法联调，需要通过工具进行资源地址的代理。</li></ul><h2 id="弱网" tabindex="-1"><a class="header-anchor" href="#弱网" aria-hidden="true">#</a> 弱网</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">isSlowNetwork</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>connection<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> navigator<span class="token punctuation">.</span>connection<span class="token punctuation">.</span>saveData <span class="token operator">||</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(2|3)g</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>navigator<span class="token punctuation">.</span>connection<span class="token punctuation">.</span>effectiveType<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="埋点" tabindex="-1"><a class="header-anchor" href="#埋点" aria-hidden="true">#</a> 埋点</h2><ul><li>行为埋点：由分析师<code>/PM/</code>运营提出，走正常埋点需求流程的埋点</li><li>性能埋点：研发用于定位和调试技术问题的埋点</li></ul><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><p><img src="`+p+'" alt=""></p><h2 id="webassembly" tabindex="-1"><a class="header-anchor" href="#webassembly" aria-hidden="true">#</a> <code>WebAssembly</code></h2><p><img src="'+u+'" alt=""></p><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2>',21),_=n("<li>约定式路由也叫文件路由，就是不需要手写配置，文件系统即路由，通过目录和文件及其命名分析出路由配置。</li><li><code>HTML</code>文档使用协商缓存，静态资源使用强缓存。</li><li>静态资源：缓存<code>+CDN+</code>文件指纹。</li><li>移动端<code>H5</code>页面即运行在手机浏览器或<code>APP</code>的<code>WebView</code>容器内的页面。</li><li><code>Babel</code>的作用： <ul><li>语法转换</li><li>源码转换</li><li>通过<code>Polyfill</code>在目标环境中添加缺失的特性</li></ul></li>",5),b={href:"https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images",target:"_blank",rel:"noopener noreferrer"},v=n('<li><code>Jest</code>用于单元测试，<code>Cypress</code>用于<code>E2E</code>测试。</li><li>跨平台渲染和虚拟<code>DOM</code>无关</li><li><img src="'+h+'" alt=""></li><li><img src="'+k+'" alt=""></li><li><code>SSG(Static Site Generation)</code>是一种基于数据与模板，在构建时渲染完整静态网页的技术解决方案。</li>',5);function f(x,M){const s=i("ExternalLinkIcon");return c(),t("div",null,[m,e("ul",null,[_,e("li",null,[a("同一张图片（主要是位图）在不同设备中，如果显示尺寸大于原始尺寸，最终效果会有明显的颗粒感；而如果显示尺寸小于原始尺寸，又会造成带宽浪费，理想的解决方案是为不同设备提供不同分辨率、不同尺寸的图片——也就是"),e("a",b,[a("响应式图片"),l(s)]),a("。")]),v])])}const S=o(g,[["render",f],["__file","index.html.vue"]]);export{S as default};