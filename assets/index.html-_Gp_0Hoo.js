import{_ as e,o as i,c as d,e as c}from"./app-M6OZmubj.js";const l="/skill-blog/img/0075.png",n="/skill-blog/img/0087.jpg",o="/skill-blog/img/0074.png",s="/skill-blog/img/0076.png",a="/skill-blog/img/0103.jpg",r={},t=c(`<h1 id="知识点" tabindex="-1"><a class="header-anchor" href="#知识点" aria-hidden="true">#</a> 知识点</h1><h2 id="idl文件示例" tabindex="-1"><a class="header-anchor" href="#idl文件示例" aria-hidden="true">#</a> <code>IDL</code>文件示例</h2><div class="language-idl line-numbers-mode" data-ext="idl"><pre class="language-idl"><code>// struct 名称标识 {
//   数字标识: (required|optional)? 类型 名称标识 (= 值)?
// }
// 数字标识： 是用来同步服务端、客户端参数位置信息的
// required: 可以看成必填
// optional: 可以看成可选
struct GetActionsRequest {
  1: required string              Host
  2: required string              Path
  3: required string              Method
  4: required map&lt;string, string&gt; Headers
  5: optional string              Protocol // default protocol is http
}

service GatewayService {
  GetActionsResponse getActions(1: GetActionsRequest req)(api.get=&#39;/api/gateway/getActions&#39;)
}

  GetActionsResponse getActions(1: GetActionsRequest req)(api.get=&#39;/api/gateway/getActions&#39;)
  \\_______________/   \\_______/  \\_____________________/  \\______________________________/
          |               |                |                             |
        返回值           方法名           请求参数                      method 与 uri
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>通用字段的<code>ID</code>设置为<code>255</code>以避免和前面的自定义字段重复。</li><li><code>RPC</code>客户端和服务端的<code>IDL</code>要保持一致。</li><li>建议所有字段都显式声明为<code>required</code>或<code>optional</code>。</li></ul><h2 id="graphql与rest-api的区别" tabindex="-1"><a class="header-anchor" href="#graphql与rest-api的区别" aria-hidden="true">#</a> <code>GraphQL</code>与<code>REST API</code>的区别</h2><ul><li><code>GraphQL</code>是聚合的，而<code>REST API</code>是离散的。使用<code>GraphQL</code>时只需要通过一个请求地址来操作数据，而<code>REST API</code>需要通过不同的请求地址来操作数据。</li><li><code>GraphQL</code>是可变的，而<code>REST API</code>是相对固定的。<code>GraphQL</code>传入不同的<code>Schema</code>可以操作不同的数据；而对于<code>REST API</code>而言，一个请求地址只能指向一个（类）资源。</li></ul><h2 id="服务发现" tabindex="-1"><a class="header-anchor" href="#服务发现" aria-hidden="true">#</a> 服务发现</h2><p><img src="`+l+'" alt=""></p><h2 id="thrift协议栈结构" tabindex="-1"><a class="header-anchor" href="#thrift协议栈结构" aria-hidden="true">#</a> <code>Thrift</code>协议栈结构</h2><p><img src="'+n+'" alt=""></p><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><ul><li><p><code>gRPC</code>基于<code>HTTP 2</code>。</p></li><li><p>通过压力测试，我们可以在大体上了解一个应用可以承受的最大<code>QPS</code>。</p></li><li><p><code>GUID</code>是<code>UUID</code>的一种实现。</p></li><li><p><img src="'+o+'" alt=""></p></li><li><p>一个请求经过的所有服务和中间件，构成了一条调用链，包括<code>LB</code>，<code>HTTP</code>服务，<code>RPC</code>服务，消息队列等。</p></li><li><p><img src="'+s+'" alt=""></p></li><li><p><code>thrift</code>既是<code>IDL</code>格式，又是序列化协议和传输协议。</p></li><li><p>提倡通过通信共享内存，而不是通过共享内存实现通信</p><p><img src="'+a+'" alt=""></p></li><li><p>镜像（<code>Image</code>）和容器（<code>Container</code>）的关系，就像是面向对象程序设计中的类和实例一样，镜像是静态的定义，容器是镜像运行时的实体。容器可以被创建、启动、停止、删除、暂停等。</p></li><li><p>追加写、随机写</p></li><li><p>线上巡检</p></li><li><p>数据一致性校验</p></li><li><p>边缘节点相比于中心机房离用户更近，有着更快的响应速度。</p></li></ul>',12),_=[t];function p(h,u){return i(),d("div",null,_)}const m=e(r,[["render",p],["__file","index.html.vue"]]);export{m as default};
