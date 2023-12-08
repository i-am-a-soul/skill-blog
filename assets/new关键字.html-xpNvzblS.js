import{_ as n,o as s,c as a,e}from"./app-M6OZmubj.js";const o={},c=e(`<h1 id="new关键字" tabindex="-1"><a class="header-anchor" href="#new关键字" aria-hidden="true">#</a> <code>new</code>关键字</h1><h2 id="new操作符调用构造函数时具体做了什么" tabindex="-1"><a class="header-anchor" href="#new操作符调用构造函数时具体做了什么" aria-hidden="true">#</a> <code>new</code>操作符调用构造函数时具体做了什么</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Foo</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>bar <span class="token operator">=</span> <span class="token string">&#39;Lucas&#39;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>instance<span class="token punctuation">.</span>bar<span class="token punctuation">)</span> <span class="token comment">// Lucas</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简略版答案：</p><ul><li>创建一个新的对象</li><li>将构造函数的<code>this</code>指向这个新的对象</li><li>为这个对象添加属性、方法等</li><li>最终返回新的对象</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
obj<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> <span class="token class-name">Foo</span><span class="token punctuation">.</span>prototype
<span class="token function">Foo</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要指出的是，如果在构造函数里出现了显式<code>return</code>的情况，那么需要注意，其可以分为两种场景。</p><p>场景一：执行以下代码将输出<code>undefined</code>，此时<code>instance</code>返回的是空对象<code>o</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Foo</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>user <span class="token operator">=</span> <span class="token string">&#39;Lucas&#39;</span>
    <span class="token keyword">const</span> o <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">return</span> o
<span class="token punctuation">}</span>
<span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>instance<span class="token punctuation">.</span>user<span class="token punctuation">)</span> <span class="token comment">// undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>场景二：执行以下代码将输出<code>Lucas</code>，也就是说，<code>instance</code>此时返回的是目标对象实例<code>this</code>。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Foo</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>user <span class="token operator">=</span> <span class="token string">&#39;Lucas&#39;</span>
    <span class="token keyword">return</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>instance<span class="token punctuation">.</span>user<span class="token punctuation">)</span> <span class="token comment">// Lucas</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="construct" tabindex="-1"><a class="header-anchor" href="#construct" aria-hidden="true">#</a> <code>[[Construct]]</code></h2><p><code>JavaScript</code>函数有两个不同的内部方法：<code>[[Call]]</code>和<code>[[Construct]]</code>。当通过<code>new</code>关键字调用函数时，执行的是<code>[[Construct]]</code>函数，它负责创建一个通常被称作实例的新对象，然后执行函数体，将<code>this</code>绑定到实例上；如果不通过<code>new</code>关键字调用函数，则执行<code>[Call]]</code>函数，从而直接执行代码中的函数体。具有<code>[[Construct]]</code>方法的函数被统称为构造函数。</p><p>切记，不是所有的函数都有<code>[[Construct]]</code>方法，因此不是所有函数都可以通过<code>new</code>来调用，如箭头函数就没有<code>[[Construct]]</code>方法。</p><h2 id="判断函数被调用的方法" tabindex="-1"><a class="header-anchor" href="#判断函数被调用的方法" aria-hidden="true">#</a> 判断函数被调用的方法</h2><h3 id="在ecmascript-5中" tabindex="-1"><a class="header-anchor" href="#在ecmascript-5中" aria-hidden="true">#</a> 在<code>ECMAScript 5</code>中</h3><p>在<code>ECMAScript 5</code>中，如果想确定一个函数是否通过<code>new</code>关键字被调用（或者说，判断该函数是否作为构造函数被调用），最流行的方式是使用<code>instanceof</code>，举个例子：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token keyword">instanceof</span> <span class="token class-name">Person</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name <span class="token comment">// 如果通过 new 关键字调用</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;必须通过 new 关键字来调用 Person。&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;Nicholas&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> notAPerson <span class="token operator">=</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token string">&#39;Nicholas&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 抛出错误</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这段代码中，首先检查<code>this</code>的值，看它是否为构造函数的实例，如果是，则继续正常执行；如果不是，则抛出错误。由于<code>[[Construct]]</code>方法会创建一个<code>Person</code>的新实例，并将<code>this</code>绑定到新实例上，通常来讲这样做是正确的，但这个方法也不完全可靠，因为有一种不依赖<code>new</code>关键字的方法也可以将<code>this</code>绑定到<code>Person</code>实例上，如下所示：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;Nicholas&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> notAPerson <span class="token operator">=</span> <span class="token function">Person</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span> <span class="token string">&#39;Michael&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 有效</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>调用<code>Person.call()</code>时将变量<code>person</code>传入作为第一个参数，相当于在<code>Person</code>函数里将<code>this</code>设为了<code>person</code>实例。对于函数本身，无法区分是通过<code>Person.call()</code>（或者是<code>Person.apply()</code>）还是<code>new</code>关键字调用得到的<code>Person</code>实例。</p><h3 id="在ecmascript-6中" tabindex="-1"><a class="header-anchor" href="#在ecmascript-6中" aria-hidden="true">#</a> 在<code>ECMAScript 6</code>中</h3><p>为了解决判断函数是否通过<code>new</code>关键字调用的问题，<code>ECMAScript 6</code>中引入了<code>new.target</code>这个元属性。元属性是指非对象的属性，其可以提供非对象目标的补充信息（例如<code>new</code>）。当调用函数的<code>[[Construct]]</code>方法时，<code>new.target</code>被赋值为<code>new</code>操作符的目标，通常是新创建对象实例，也就是函数体内<code>this</code>的构造函数；如果调用了<code>[[Call]]</code>方法，则<code>new.target</code>的值为<code>undefined</code>。</p><p>有了这个元属性，可以通过检查<code>new.target</code>是否被定义过来安全地检测一个函数是否是通过<code>new</code>关键字调用的，就像这样：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> <span class="token keyword">new</span><span class="token punctuation">.</span>target <span class="token operator">!==</span> <span class="token string">&#39;undefined&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name <span class="token comment">// 如果通过 new 关键字调用</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;必须通过 new 关键字来调用 Person。&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;Nicholas&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> notAPerson <span class="token operator">=</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token string">&#39;Nicholas&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 抛出错误</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在放弃使用<code>this instanceof Person</code>的方法且改为检测<code>new.target</code>后，我们可以在<code>Person</code>构造函数中正确地进行判断，当未通过<code>new</code>关键字调用时抛出错误。</p><p>也可以检查<code>new.target</code>是否被某个特定构造函数所调用，举个例子：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">new</span><span class="token punctuation">.</span>target <span class="token operator">===</span> Person<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name <span class="token comment">// 如果通过 new 关键字调用</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;必须通过 new 关键字来调用 Person。&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">AnotherPerson</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">Person</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;Nicholas&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> anotherPerson <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AnotherPerson</span><span class="token punctuation">(</span><span class="token string">&#39;Nicholas&#39;</span><span class="token punctuation">)</span> <span class="token comment">// 抛出错误</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这段代码中，如果要让程序正确运行，<code>new.target</code>一定是<code>Person</code>。当调用<code>new AnotherPerson(&#39;Nicholas&#39;)</code>时，真正的调用<code>Person.call(this, name)</code>没有使用<code>new</code>关键字，因此<code>new.target</code>的值为<code>undefined</code>会抛出错误。</p>`,29),t=[c];function p(i,l){return s(),a("div",null,t)}const r=n(o,[["render",p],["__file","new关键字.html.vue"]]);export{r as default};
