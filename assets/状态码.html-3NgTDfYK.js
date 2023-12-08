import{_ as a,o as n,c as e,e as s}from"./app-M6OZmubj.js";const t="/skill-blog/img/0054.jpg",o={},d=s('<h1 id="状态码" tabindex="-1"><a class="header-anchor" href="#状态码" aria-hidden="true">#</a> 状态码</h1><table><thead><tr><th></th><th>类别</th><th>代码含义</th></tr></thead><tbody><tr><td>1xx</td><td>信息类状态码</td><td>请求已接收，正在处理</td></tr><tr><td>2xx</td><td>成功类状态码</td><td>请求已被成功接收、处理和响应</td></tr><tr><td>3xx</td><td>重定向类状态码</td><td>需要其他操作才能完成请求</td></tr><tr><td>4xx</td><td>客户端错误类状态码</td><td>请求出现错误或不符合服务器端预期，导致服务器端无法处理请求</td></tr><tr><td>5xx</td><td>服务器端错误类状态码</td><td>服务器端处理请求时出错</td></tr></tbody></table><p><img src="'+t+`" alt=""></p><h2 id="_200-ok" tabindex="-1"><a class="header-anchor" href="#_200-ok" aria-hidden="true">#</a> <code>200 OK</code></h2><p>表示客户端发来的请求被服务器端成功地处理并响应了。</p><h2 id="_204-no-content" tabindex="-1"><a class="header-anchor" href="#_204-no-content" aria-hidden="true">#</a> <code>204 No Content</code></h2><p>服务器端成功处理了客户端请求，但在响应报文的主体中不返回内容，浏览器显示的文档内容也不会发生更新。一般在只需要客户端往服务器端发送信息而不需要服务器端返回信息的时候使用。例如删除某个资源或者登出操作。</p><h2 id="_206-partial-content" tabindex="-1"><a class="header-anchor" href="#_206-partial-content" aria-hidden="true">#</a> <code>206 Partial Content</code></h2><p>客户端只需要指定资源的某个部分内容，服务器端成功地处理并返回了该部分内容。一般来说，客户端会在请求头部指定需要返回内容的范围，服务器端则会在响应头部中告知这一部分内容在整个资源中的位置。例如：</p><p>请求报文</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">/xxx</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">Range</span><span class="token punctuation">:</span> <span class="token header-value">bytes=0-1023</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>响应报文</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token response-status"><span class="token http-version property">HTTP/1.1</span> <span class="token status-code number">206</span> <span class="token reason-phrase string">Partial Content</span></span>
<span class="token header"><span class="token header-name keyword">Content-Range</span><span class="token punctuation">:</span> <span class="token header-value">bytes 0-1023/12345</span></span>
<span class="token header"><span class="token header-name keyword">Content-Length</span><span class="token punctuation">:</span> <span class="token header-value">1024</span></span>
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这段报文表示访问的资源大小有<code>12345</code>字节，返回的是资源的<code>0 ~ 1023</code>字节内容。</p><h2 id="_301-moved-permanently" tabindex="-1"><a class="header-anchor" href="#_301-moved-permanently" aria-hidden="true">#</a> <code>301 Moved Permanently</code></h2><p>永久性地移动，也称为重定向。表示该资源已经被分配了新的<code>URL</code>地址，并且返回新的<code>URL</code>地址，浏览器会自动定向到新的<code>URL</code>。</p><h2 id="_302-found" tabindex="-1"><a class="header-anchor" href="#_302-found" aria-hidden="true">#</a> <code>302 Found</code></h2><p>临时移动。表示该资源已经被分配了新的<code>URL</code>地址，但建议客户端继续保留当前的<code>URL</code>访问。<code>302</code>和<code>301</code>一样都会使浏览器重定向到新的<code>URL</code>地址，区别在于，临时性的移动意味着新的<code>URL</code>将来还有可能会被修改。例如我们访问网址<code>http://taobao.com</code>的时候就会返回下面的响应报文，然后浏览器跳转到<code>http://www.taobao.com</code>。</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token response-status"><span class="token http-version property">HTTP/1.1</span> <span class="token status-code number">302</span> <span class="token reason-phrase string">Found</span></span>
<span class="token header"><span class="token header-name keyword">Server</span><span class="token punctuation">:</span> <span class="token header-value">Tengine</span></span>
<span class="token header"><span class="token header-name keyword">Date</span><span class="token punctuation">:</span> <span class="token header-value">Fri, 27 Apr 2018 06:38:58 GMT</span></span>
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">text/html</span></span>
<span class="token header"><span class="token header-name keyword">Content-Length</span><span class="token punctuation">:</span> <span class="token header-value">258</span></span>
<span class="token header"><span class="token header-name keyword">Connection</span><span class="token punctuation">:</span> <span class="token header-value">keep-alive</span></span>
<span class="token header"><span class="token header-name keyword">Location</span><span class="token punctuation">:</span> <span class="token header-value">http://www.taobao.com/</span></span>
<span class="token text-html"><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">HTML</span> <span class="token name">PUBLIC</span> <span class="token string">&quot;-//IETF//DTD HTML 2.0//EN&quot;</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>302 Found<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span> <span class="token attr-name">bgcolor</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>white<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>302 Found<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>The requested resource resides temporarily under a different URI.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">/&gt;</span></span>Powered by Tengine<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的例子返回了一段<code>HTML</code>代码，同时响应头部包含了<code>Location</code>字段，告诉浏览器新的跳转地址。</p><h2 id="_304-not-modified" tabindex="-1"><a class="header-anchor" href="#_304-not-modified" aria-hidden="true">#</a> <code>304 Not Modified</code></h2><p>该状态码表示请求访问的资源未被修改，返回此状态码时，不会返回任何资源。在进行请求时，客户端会提供给服务器一个<code>If-Modified-Since</code>请求头，其值为服务器上次返回的<code>Last-Modified</code>响应头中的日期值，还会提供一个<code>If-None-Match</code>请求头，值为服务器上次返回的<code>ETag</code>响应头的值，比如下面这个请求图片资源的例子：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token request-line"><span class="token method property">GET</span> <span class="token request-target url">http://www.tiduyun.com/image/logo-text.jpg</span> <span class="token http-version property">HTTP/1.1</span></span>
<span class="token header"><span class="token header-name keyword">If-Modified-Since</span><span class="token punctuation">:</span> <span class="token header-value">Wed, 17 Jan 2018 08:17:38 GMT</span></span>
<span class="token header"><span class="token header-name keyword">If-None-Match</span><span class="token punctuation">:</span> <span class="token header-value">W/&quot;5a5f06a2-ca7&quot;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器会读取到这两个请求头中的值，判断出客户端缓存的资源是否是最新的，如果是的话，服务器就会返回<code>304</code>响应，但没有响应体：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token response-status"><span class="token http-version property">HTTP/1.1</span> <span class="token status-code number">304</span> <span class="token reason-phrase string">Not Modified</span></span>
<span class="token header"><span class="token header-name keyword">ETag</span><span class="token punctuation">:</span> <span class="token header-value">&quot;5a5f06a2-ca7&quot;</span></span>
<span class="token header"><span class="token header-name keyword">Last-Modified</span><span class="token punctuation">:</span> <span class="token header-value">Wed, 17 Jan 2018 08:17:38 GMT</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>客户端收到<code>304</code>响应后，就会从缓存中读取对应的资源。</p><p>如果客户端资源已经过期，那么服务器端就会返回<code>200</code>响应，响应体就是该资源当前最新的内容。客户端收到<code>200</code>响应后，就会用新的响应体覆盖掉旧的缓存资源。</p><p>而客户端请求头部中的<code>If-Modified-Since</code>值来源于上次成功响应头部的<code>Last-Modified</code>值，<code>If-None-Match</code>值来源于上次成功响应头部的<code>ETag</code>值。换言之，只有在客户端缓存了对应资源和上次响应头部中的<code>Last-Modified</code>或<code>ETag</code>值的情况下，才可能得到服务器端的<code>304</code>响应。</p><h2 id="_307-temporary-redirect" tabindex="-1"><a class="header-anchor" href="#_307-temporary-redirect" aria-hidden="true">#</a> <code>307 Temporary Redirect</code></h2><p>状态码<code>307</code>和<code>302</code>功能基本相同，都会引起浏览器跳转，它们之间的区别就在于，<code>307</code>状态码可以确保请求方法和消息主体不会发生改变，而<code>302</code>状态码在某些情况下会错误地将请求转为<code>GET</code>方法。例如当我们访问“<code>http://www.taobao.com</code>”网址时收到下面的响应报文，同时浏览器跳转到新的网址。</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token response-status"><span class="token http-version property">HTTP/1.1</span> <span class="token status-code number">307</span> <span class="token reason-phrase string">Internal Redirect</span></span>
<span class="token header"><span class="token header-name keyword">Location</span><span class="token punctuation">:</span> <span class="token header-value">http://www.taogao.com/</span></span>
<span class="token header"><span class="token header-name keyword">Non-Authoritative-Reason</span><span class="token punctuation">:</span> <span class="token header-value">HSTS</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的状态描述文本修改成了“<code>Internal Redirect</code>”。</p><h2 id="_400-bad-request" tabindex="-1"><a class="header-anchor" href="#_400-bad-request" aria-hidden="true">#</a> <code>400 Bad Request</code></h2><p>该状态信息表示请求报文中存在语法错误，导致服务器端无法理解和处理。此时客户端应该检查请求报文，不应该继续重复请求。</p><h2 id="_401-unauthorized" tabindex="-1"><a class="header-anchor" href="#_401-unauthorized" aria-hidden="true">#</a> <code>401 Unauthorized</code></h2><p>客户端请求未通过认证或之前的认证失败了，服务器端不予响应资源。同时响应头部会包含一个<code>WWW-Authenticate</code>字段值，用于浏览器弹出认证用的对话框供用户填写信息。响应报文如下面的例子所示：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code><span class="token response-status"><span class="token http-version property">HTTP/1.1</span> <span class="token status-code number">401</span> <span class="token reason-phrase string">Unauthorized</span></span>
...
<span class="token header"><span class="token header-name keyword">WWW-Authenticate</span><span class="token punctuation">:</span> <span class="token header-value">Basic realm=&quot;nginx auth for rp.tiduyun&quot;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_403-forbidden" tabindex="-1"><a class="header-anchor" href="#_403-forbidden" aria-hidden="true">#</a> <code>403 Forbidden</code></h2><p>服务器端理解了客户端的请求，但是拒绝响应对应的资源。服务器端可以不给出详细理由，也可以在响应主体部分对原因进行说明。一般出现这种情况有可能是客户端没有对应的访问权限，比如普通用户试图修改管理员创建的某个资源。</p><h2 id="_404-not-found" tabindex="-1"><a class="header-anchor" href="#_404-not-found" aria-hidden="true">#</a> <code>404 Not Found</code></h2><p>服务器端找不到对应的资源，有可能是请求<code>URL</code>地址错误或者资源已被删除等，当然也有可能是服务器端拒绝返回该资源而不说明原因。</p><h2 id="_500-internal-server-error" tabindex="-1"><a class="header-anchor" href="#_500-internal-server-error" aria-hidden="true">#</a> <code>500 Internal Server Error</code></h2><p>服务器端本身发生了内部错误，一般是由于服务器端自身的<code>bug</code>或临时故障引起的。</p><h2 id="_502-bad-gateway" tabindex="-1"><a class="header-anchor" href="#_502-bad-gateway" aria-hidden="true">#</a> <code>502 Bad Gateway</code></h2><p>当网关或者代理服务器向上游服务器发起请求得到了无效的响应时，返回此状态。</p><h2 id="_503-service-unavailable" tabindex="-1"><a class="header-anchor" href="#_503-service-unavailable" aria-hidden="true">#</a> <code>503 Service Unavailable</code></h2><p>服务器端暂时处于超负载或正在进行停机维护，现在无法处理请求。一般这种状态只是暂时的，将会在一段时间后恢复。如果恢复时间能够预计的话，响应头部应该包含一个<code>Retry-After</code>字段的值用来表明服务器端将会延迟的时间。</p><h2 id="_504-gateway-timeout" tabindex="-1"><a class="header-anchor" href="#_504-gateway-timeout" aria-hidden="true">#</a> <code>504 Gateway Timeout</code></h2><p>网关或者代理服务器尝试执行请求时，未能及时从上游服务器或者辅助服务器（例如<code>DNS</code>）收到响应。</p>`,49),p=[d];function c(r,i){return n(),e("div",null,p)}const u=a(o,[["render",c],["__file","状态码.html.vue"]]);export{u as default};
