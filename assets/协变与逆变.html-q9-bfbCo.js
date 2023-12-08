import{_ as c,r as d,o as n,c as a,a as e,b as l,d as i,e as t}from"./app-M6OZmubj.js";const r={},s=t('<h1 id="协变与逆变" tabindex="-1"><a class="header-anchor" href="#协变与逆变" aria-hidden="true">#</a> 协变与逆变</h1><p>型变：</p><ul><li>不变：只能是<code>T</code></li><li>协变（<code>Covariant</code>）：可以是<code>&lt;:T</code></li><li>逆变（<code>Contravariant</code>）：可以是<code>&gt;:T</code></li><li>双变：可以是<code>&lt;:T</code>或<code>&gt;:T</code></li></ul><p>参考资料：</p>',4),h={href:"https://jkchao.github.io/typescript-book-chinese/tips/covarianceAndContravariance.html#%E5%8D%8F%E5%8F%98%E4%B8%8E%E9%80%86%E5%8F%98",target:"_blank",rel:"noopener noreferrer"},p=t("<hr><p>假设我们有两个类型<code>TypeFather</code>和<code>TypeChild</code>，这两个类型是父子类型，即满足<code>TypeChild extends TypeFather</code>为真。</p><ul><li>协变是指这两个类型被做了相同的类型操作后，仍然满足原来的继承关系，即<code>Action&lt;TypeChild&gt; extends Action&lt;TypeFather&gt;</code>为真；</li><li>逆变则相反，即<code>Action&lt;TypeFather&gt; extends Action&lt;TypeChild&gt;</code>为真。</li></ul>",3);function _(T,u){const o=d("ExternalLinkIcon");return n(),a("div",null,[s,e("ul",null,[e("li",null,[e("a",h,[l("协变与逆变——《深入理解 TypeScript》"),i(o)])])]),p])}const x=c(r,[["render",_],["__file","协变与逆变.html.vue"]]);export{x as default};
