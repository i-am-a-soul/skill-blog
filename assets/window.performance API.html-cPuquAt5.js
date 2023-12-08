import{_ as n,o as s,c as a,e as t}from"./app-M6OZmubj.js";const p="/skill-blog/img/0105.jpg",e={},o=t(`<h1 id="window-performance-api" tabindex="-1"><a class="header-anchor" href="#window-performance-api" aria-hidden="true">#</a> <code>window.performance API</code></h1><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">getTime</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> t <span class="token operator">=</span> window<span class="token punctuation">.</span>performance<span class="token punctuation">.</span>timing

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
        <span class="token comment">// 重定向时间</span>
        <span class="token literal-property property">redirectTime</span><span class="token operator">:</span> t<span class="token punctuation">.</span>redirectEnd <span class="token operator">-</span> t<span class="token punctuation">.</span>redirectStart<span class="token punctuation">,</span>
        <span class="token comment">// DNS 查询耗时</span>
        <span class="token literal-property property">dnsTime</span><span class="token operator">:</span> t<span class="token punctuation">.</span>domainLookupEnd <span class="token operator">-</span> t<span class="token punctuation">.</span>domainLookupStart<span class="token punctuation">,</span>
        <span class="token comment">// 读取页面第一个字节的时间</span>
        <span class="token literal-property property">ttfbTime</span><span class="token operator">:</span> t<span class="token punctuation">.</span>responseStart <span class="token operator">-</span> t<span class="token punctuation">.</span>navigationStart<span class="token punctuation">,</span>
        <span class="token comment">// DNS 缓存时间</span>
        <span class="token literal-property property">appCacheTime</span><span class="token operator">:</span> t<span class="token punctuation">.</span>domainLookupStart <span class="token operator">-</span> t<span class="token punctuation">.</span>fetchStart<span class="token punctuation">,</span>
        <span class="token comment">// 卸载页面的时间</span>
        <span class="token literal-property property">unloadTime</span><span class="token operator">:</span> t<span class="token punctuation">.</span>unloadEventEnd <span class="token operator">-</span> t<span class="token punctuation">.</span>unloadEventStart<span class="token punctuation">,</span>
        <span class="token comment">// TCP 连接耗时</span>
        <span class="token literal-property property">tcpTime</span><span class="token operator">:</span> t<span class="token punctuation">.</span>connectEnd <span class="token operator">-</span> t<span class="token punctuation">.</span>connectStart<span class="token punctuation">,</span>
        <span class="token comment">// 请求耗时</span>
        <span class="token literal-property property">reqTime</span><span class="token operator">:</span> t<span class="token punctuation">.</span>responseEnd <span class="token operator">-</span> t<span class="token punctuation">.</span>responseStart<span class="token punctuation">,</span>
        <span class="token comment">// 解析 DOM 树耗时</span>
        <span class="token literal-property property">analysisTime</span><span class="token operator">:</span> t<span class="token punctuation">.</span>domComplete <span class="token operator">-</span> t<span class="token punctuation">.</span>domInteractive<span class="token punctuation">,</span>
        <span class="token comment">// 白屏时间</span>
        <span class="token literal-property property">blankTime</span><span class="token operator">:</span> t<span class="token punctuation">.</span>domLoading <span class="token operator">-</span> t<span class="token punctuation">.</span>fetchStart<span class="token punctuation">,</span>
        <span class="token comment">// 用户可交互时间</span>
        <span class="token literal-property property">domReadyTime</span><span class="token operator">:</span> t<span class="token punctuation">.</span>domContentLoadedEventEnd <span class="token operator">-</span> t<span class="token punctuation">.</span>fetchStart<span class="token punctuation">,</span>
        <span class="token comment">// 用户等待页面完全可用的时间</span>
        <span class="token literal-property property">loadPageTime</span><span class="token operator">:</span> t<span class="token punctuation">.</span>loadEventEnd <span class="token operator">-</span> t<span class="token punctuation">.</span>navigationStart<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+p+'" alt=""></p>',3),c=[o];function i(l,r){return s(),a("div",null,c)}const d=n(e,[["render",i],["__file","window.performance API.html.vue"]]);export{d as default};
