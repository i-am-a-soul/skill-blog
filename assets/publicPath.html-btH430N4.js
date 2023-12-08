import{_ as s,o as a,c as n,e}from"./app-M6OZmubj.js";const p={},t=e(`<h1 id="publicpath" tabindex="-1"><a class="header-anchor" href="#publicpath" aria-hidden="true">#</a> <code>publicPath</code></h1><h2 id="output-publicpath" tabindex="-1"><a class="header-anchor" href="#output-publicpath" aria-hidden="true">#</a> <code>output.publicPath</code></h2><h3 id="html相关" tabindex="-1"><a class="header-anchor" href="#html相关" aria-hidden="true">#</a> <code>HTML</code>相关</h3><p>我们可以将<code>publicPath</code>指定为<code>HTML</code>的相对路径，在请求这些资源的时候会以当前页面<code>HTML</code>所在路径加上相对路径，构成实际请求的<code>URL</code>。如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 假设当前 HTML 地址为 https://example.com/app/index.html</span>
<span class="token comment">// 异步加载的资源名为 0.chunk.js</span>
<span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>           <span class="token comment">// 实际路径 https://example.com/app/0.chunk.js</span>
<span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&quot;./js&quot;</span>       <span class="token comment">// 实际路径 https://example.com/app/js/0.chunk.js</span>
<span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&quot;../assets/&quot;</span> <span class="token comment">// 实际路径 https://example.com/assets/0.chunk.js</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="host相关" tabindex="-1"><a class="header-anchor" href="#host相关" aria-hidden="true">#</a> <code>Host</code>相关</h3><p>若<code>publicPath</code>的值以“<code>/</code>”开始，则代表此时<code>publicPath</code>是以当前页面的<code>host name</code>为基础路径的。如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 假设当前 HTML 地址为 https://example.com/app/index.html</span>
<span class="token comment">// 异步加载的资源名为 0.chunk.js</span>
<span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span>      <span class="token comment">// 实际路径 https://example.com/0.chunk.js</span>
<span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&quot;/js/&quot;</span>   <span class="token comment">// 实际路径 https://example.com/js/0.chunk.js</span>
<span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&quot;/dist/&quot;</span> <span class="token comment">// 实际路径 https://example.com/dist/0.chunk.js</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cdn相关" tabindex="-1"><a class="header-anchor" href="#cdn相关" aria-hidden="true">#</a> <code>CDN</code>相关</h3><p>上面两种配置都是相对路径，我们也可以使用绝对路径的形式配置<code>publicPath</code>。这种情况一般发生于静态资源放在<code>CDN</code>上面时，由于其域名与当前页面域名不一致，需要以绝对路径的形式进行指定。当<code>publicPath</code>以协议头或相对协议的形式开始时，代表当前的路径是<code>CDN</code>相关。如：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 假设当前 HTML 地址为 https://example.com/app/index.html</span>
<span class="token comment">// 异步加载的资源名为 0.chunk.js</span>
<span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&quot;http://cdn.com/&quot;</span>   <span class="token comment">// 实际路径 http://cdn.com/0.chunk.js</span>
<span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&quot;https://cdn.com/&quot;</span>  <span class="token comment">// 实际路径 https://cdn.com/0.chunk.js</span>
<span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&quot;//cdn.com/assets/&quot;</span> <span class="token comment">// 实际路径 //cdn.com/0.chunk.js</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="devserver-publicpath" tabindex="-1"><a class="header-anchor" href="#devserver-publicpath" aria-hidden="true">#</a> <code>devServer.publicPath</code></h2><p>它的作用是指定<code>webpack-dev-server</code>的静态资源服务路径，例子：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/app.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;bundle.js&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">putlicPath</span><span class="token operator">:</span> <span class="token string">&#39;/abc/&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面的目录可以看到，<code>Webpack</code>配置中<code>output.path</code>为<code>dist</code>目录，因此<code>bundle.js</code>应该生成在<code>dist</code>目录。但是当我们启动<code>webpack-dev-server</code>的服务后，访问<code>localhost:3000/dist/bundle.js</code>时却会得到<code>404</code>。这是因为<code>devServer.publicPath</code>配置后将资源位置指向了<code>localhost:3000/abc/</code>，因此只有访问<code>localhost:3000/abc/bundle.js</code>才能得到我们想要的结果。</p>`,15),c=[t];function o(l,r){return a(),n("div",null,c)}const d=s(p,[["render",o],["__file","publicPath.html.vue"]]);export{d as default};