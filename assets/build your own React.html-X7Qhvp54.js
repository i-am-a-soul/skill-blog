import{_ as p,r as t,o as e,c as o,a as n,b as s,d as c,e as i}from"./app-M6OZmubj.js";const l={},u=n("h1",{id:"build-your-own-react",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#build-your-own-react","aria-hidden":"true"},"#"),s(),n("code",null,"build your own React")],-1),r={href:"https://pomb.us/build-your-own-react/",target:"_blank",rel:"noopener noreferrer"},k=i(`<div class="language-jsx line-numbers-mode" data-ext="jsx"><pre class="language-jsx"><code><span class="token keyword">function</span> <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token parameter">type<span class="token punctuation">,</span> props<span class="token punctuation">,</span> <span class="token operator">...</span>children</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    type<span class="token punctuation">,</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token operator">...</span>props<span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> children<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">child</span> <span class="token operator">=&gt;</span>
        <span class="token keyword">typeof</span> child <span class="token operator">===</span> <span class="token string">&quot;object&quot;</span>
          <span class="token operator">?</span> child
          <span class="token operator">:</span> <span class="token function">createTextElement</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">createTextElement</span><span class="token punctuation">(</span><span class="token parameter">text</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;TEXT_ELEMENT&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">nodeValue</span><span class="token operator">:</span> text<span class="token punctuation">,</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">createDom</span><span class="token punctuation">(</span><span class="token parameter">fiber</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> dom <span class="token operator">=</span>
    fiber<span class="token punctuation">.</span>type <span class="token operator">==</span> <span class="token string">&quot;TEXT_ELEMENT&quot;</span>
      <span class="token operator">?</span> document<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
      <span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>fiber<span class="token punctuation">.</span>type<span class="token punctuation">)</span>

  <span class="token function">updateDom</span><span class="token punctuation">(</span>dom<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> fiber<span class="token punctuation">.</span>props<span class="token punctuation">)</span>

  <span class="token keyword">return</span> dom
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">isEvent</span> <span class="token operator">=</span> <span class="token parameter">key</span> <span class="token operator">=&gt;</span> key<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;on&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">isProperty</span> <span class="token operator">=</span> <span class="token parameter">key</span> <span class="token operator">=&gt;</span>
  key <span class="token operator">!==</span> <span class="token string">&quot;children&quot;</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">isEvent</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">isNew</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">prev<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token parameter">key</span> <span class="token operator">=&gt;</span>
  prev<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">!==</span> next<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
<span class="token keyword">const</span> <span class="token function-variable function">isGone</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">prev<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token operator">!</span><span class="token punctuation">(</span>key <span class="token keyword">in</span> next<span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">updateDom</span><span class="token punctuation">(</span><span class="token parameter">dom<span class="token punctuation">,</span> prevProps<span class="token punctuation">,</span> nextProps</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//Remove old or changed event listeners</span>
  Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>prevProps<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>isEvent<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>
      <span class="token parameter">key</span> <span class="token operator">=&gt;</span>
        <span class="token operator">!</span><span class="token punctuation">(</span>key <span class="token keyword">in</span> nextProps<span class="token punctuation">)</span> <span class="token operator">||</span>
        <span class="token function">isNew</span><span class="token punctuation">(</span>prevProps<span class="token punctuation">,</span> nextProps<span class="token punctuation">)</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
    <span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">name</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> eventType <span class="token operator">=</span> name
        <span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
      dom<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span>
        eventType<span class="token punctuation">,</span>
        prevProps<span class="token punctuation">[</span>name<span class="token punctuation">]</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// Remove old properties</span>
  Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>prevProps<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>isProperty<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token function">isGone</span><span class="token punctuation">(</span>prevProps<span class="token punctuation">,</span> nextProps<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">name</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      dom<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// Set new or changed properties</span>
  Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>nextProps<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>isProperty<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token function">isNew</span><span class="token punctuation">(</span>prevProps<span class="token punctuation">,</span> nextProps<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">name</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      dom<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> nextProps<span class="token punctuation">[</span>name<span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// Add event listeners</span>
  Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>nextProps<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>isEvent<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token function">isNew</span><span class="token punctuation">(</span>prevProps<span class="token punctuation">,</span> nextProps<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">name</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> eventType <span class="token operator">=</span> name
        <span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
      dom<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>
        eventType<span class="token punctuation">,</span>
        nextProps<span class="token punctuation">[</span>name<span class="token punctuation">]</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">commitRoot</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  deletions<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>commitWork<span class="token punctuation">)</span>
  <span class="token function">commitWork</span><span class="token punctuation">(</span>wipRoot<span class="token punctuation">.</span>child<span class="token punctuation">)</span>
  currentRoot <span class="token operator">=</span> wipRoot
  wipRoot <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">commitWork</span><span class="token punctuation">(</span><span class="token parameter">fiber</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>fiber<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">let</span> domParentFiber <span class="token operator">=</span> fiber<span class="token punctuation">.</span>parent
  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>domParentFiber<span class="token punctuation">.</span>dom<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    domParentFiber <span class="token operator">=</span> domParentFiber<span class="token punctuation">.</span>parent
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> domParent <span class="token operator">=</span> domParentFiber<span class="token punctuation">.</span>dom

  <span class="token keyword">if</span> <span class="token punctuation">(</span>
    fiber<span class="token punctuation">.</span>effectTag <span class="token operator">===</span> <span class="token string">&quot;PLACEMENT&quot;</span> <span class="token operator">&amp;&amp;</span>
    fiber<span class="token punctuation">.</span>dom <span class="token operator">!=</span> <span class="token keyword">null</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    domParent<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>fiber<span class="token punctuation">.</span>dom<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>
    fiber<span class="token punctuation">.</span>effectTag <span class="token operator">===</span> <span class="token string">&quot;UPDATE&quot;</span> <span class="token operator">&amp;&amp;</span>
    fiber<span class="token punctuation">.</span>dom <span class="token operator">!=</span> <span class="token keyword">null</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">updateDom</span><span class="token punctuation">(</span>
      fiber<span class="token punctuation">.</span>dom<span class="token punctuation">,</span>
      fiber<span class="token punctuation">.</span>alternate<span class="token punctuation">.</span>props<span class="token punctuation">,</span>
      fiber<span class="token punctuation">.</span>props
    <span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>fiber<span class="token punctuation">.</span>effectTag <span class="token operator">===</span> <span class="token string">&quot;DELETION&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">commitDeletion</span><span class="token punctuation">(</span>fiber<span class="token punctuation">,</span> domParent<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">commitWork</span><span class="token punctuation">(</span>fiber<span class="token punctuation">.</span>child<span class="token punctuation">)</span>
  <span class="token function">commitWork</span><span class="token punctuation">(</span>fiber<span class="token punctuation">.</span>sibling<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">commitDeletion</span><span class="token punctuation">(</span><span class="token parameter">fiber<span class="token punctuation">,</span> domParent</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>fiber<span class="token punctuation">.</span>dom<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    domParent<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>fiber<span class="token punctuation">.</span>dom<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">commitDeletion</span><span class="token punctuation">(</span>fiber<span class="token punctuation">.</span>child<span class="token punctuation">,</span> domParent<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token parameter">element<span class="token punctuation">,</span> container</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  wipRoot <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">dom</span><span class="token operator">:</span> container<span class="token punctuation">,</span>
    <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>element<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">alternate</span><span class="token operator">:</span> currentRoot<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
  deletions <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  nextUnitOfWork <span class="token operator">=</span> wipRoot
<span class="token punctuation">}</span>

<span class="token keyword">let</span> nextUnitOfWork <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token keyword">let</span> currentRoot <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token keyword">let</span> wipRoot <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token keyword">let</span> deletions <span class="token operator">=</span> <span class="token keyword">null</span>

<span class="token keyword">function</span> <span class="token function">workLoop</span><span class="token punctuation">(</span><span class="token parameter">deadline</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> shouldYield <span class="token operator">=</span> <span class="token boolean">false</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>nextUnitOfWork <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>shouldYield<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    nextUnitOfWork <span class="token operator">=</span> <span class="token function">performUnitOfWork</span><span class="token punctuation">(</span>
      nextUnitOfWork
    <span class="token punctuation">)</span>
    shouldYield <span class="token operator">=</span> deadline<span class="token punctuation">.</span><span class="token function">timeRemaining</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>nextUnitOfWork <span class="token operator">&amp;&amp;</span> wipRoot<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">commitRoot</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">requestIdleCallback</span><span class="token punctuation">(</span>workLoop<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">requestIdleCallback</span><span class="token punctuation">(</span>workLoop<span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">performUnitOfWork</span><span class="token punctuation">(</span><span class="token parameter">fiber</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> isFunctionComponent <span class="token operator">=</span>
    fiber<span class="token punctuation">.</span>type <span class="token keyword">instanceof</span> <span class="token class-name">Function</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>isFunctionComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">updateFunctionComponent</span><span class="token punctuation">(</span>fiber<span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function">updateHostComponent</span><span class="token punctuation">(</span>fiber<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>fiber<span class="token punctuation">.</span>child<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> fiber<span class="token punctuation">.</span>child
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> nextFiber <span class="token operator">=</span> fiber
  <span class="token keyword">while</span> <span class="token punctuation">(</span>nextFiber<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>nextFiber<span class="token punctuation">.</span>sibling<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> nextFiber<span class="token punctuation">.</span>sibling
    <span class="token punctuation">}</span>
    nextFiber <span class="token operator">=</span> nextFiber<span class="token punctuation">.</span>parent
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> wipFiber <span class="token operator">=</span> <span class="token keyword">null</span>
<span class="token keyword">let</span> hookIndex <span class="token operator">=</span> <span class="token keyword">null</span>

<span class="token keyword">function</span> <span class="token function">updateFunctionComponent</span><span class="token punctuation">(</span><span class="token parameter">fiber</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  wipFiber <span class="token operator">=</span> fiber
  hookIndex <span class="token operator">=</span> <span class="token number">0</span>
  wipFiber<span class="token punctuation">.</span>hooks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> children <span class="token operator">=</span> <span class="token punctuation">[</span>fiber<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span>fiber<span class="token punctuation">.</span>props<span class="token punctuation">)</span><span class="token punctuation">]</span>
  <span class="token function">reconcileChildren</span><span class="token punctuation">(</span>fiber<span class="token punctuation">,</span> children<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token parameter">initial</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> oldHook <span class="token operator">=</span>
    wipFiber<span class="token punctuation">.</span>alternate <span class="token operator">&amp;&amp;</span>
    wipFiber<span class="token punctuation">.</span>alternate<span class="token punctuation">.</span>hooks <span class="token operator">&amp;&amp;</span>
    wipFiber<span class="token punctuation">.</span>alternate<span class="token punctuation">.</span>hooks<span class="token punctuation">[</span>hookIndex<span class="token punctuation">]</span>
  <span class="token keyword">const</span> hook <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">state</span><span class="token operator">:</span> oldHook <span class="token operator">?</span> oldHook<span class="token punctuation">.</span>state <span class="token operator">:</span> initial<span class="token punctuation">,</span>
    <span class="token literal-property property">queue</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> actions <span class="token operator">=</span> oldHook <span class="token operator">?</span> oldHook<span class="token punctuation">.</span>queue <span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  actions<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">action</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    hook<span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token function">action</span><span class="token punctuation">(</span>hook<span class="token punctuation">.</span>state<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> <span class="token function-variable function">setState</span> <span class="token operator">=</span> <span class="token parameter">action</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    hook<span class="token punctuation">.</span>queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>action<span class="token punctuation">)</span>
    wipRoot <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">dom</span><span class="token operator">:</span> currentRoot<span class="token punctuation">.</span>dom<span class="token punctuation">,</span>
      <span class="token literal-property property">props</span><span class="token operator">:</span> currentRoot<span class="token punctuation">.</span>props<span class="token punctuation">,</span>
      <span class="token literal-property property">alternate</span><span class="token operator">:</span> currentRoot<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    nextUnitOfWork <span class="token operator">=</span> wipRoot
    deletions <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>

  wipFiber<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>hook<span class="token punctuation">)</span>
  hookIndex<span class="token operator">++</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>hook<span class="token punctuation">.</span>state<span class="token punctuation">,</span> setState<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">updateHostComponent</span><span class="token punctuation">(</span><span class="token parameter">fiber</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>fiber<span class="token punctuation">.</span>dom<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fiber<span class="token punctuation">.</span>dom <span class="token operator">=</span> <span class="token function">createDom</span><span class="token punctuation">(</span>fiber<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token function">reconcileChildren</span><span class="token punctuation">(</span>fiber<span class="token punctuation">,</span> fiber<span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">reconcileChildren</span><span class="token punctuation">(</span><span class="token parameter">wipFiber<span class="token punctuation">,</span> elements</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">let</span> oldFiber <span class="token operator">=</span>
    wipFiber<span class="token punctuation">.</span>alternate <span class="token operator">&amp;&amp;</span> wipFiber<span class="token punctuation">.</span>alternate<span class="token punctuation">.</span>child
  <span class="token keyword">let</span> prevSibling <span class="token operator">=</span> <span class="token keyword">null</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>
    index <span class="token operator">&lt;</span> elements<span class="token punctuation">.</span>length <span class="token operator">||</span>
    oldFiber <span class="token operator">!=</span> <span class="token keyword">null</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> element <span class="token operator">=</span> elements<span class="token punctuation">[</span>index<span class="token punctuation">]</span>
    <span class="token keyword">let</span> newFiber <span class="token operator">=</span> <span class="token keyword">null</span>

    <span class="token keyword">const</span> sameType <span class="token operator">=</span>
      oldFiber <span class="token operator">&amp;&amp;</span>
      element <span class="token operator">&amp;&amp;</span>
      element<span class="token punctuation">.</span>type <span class="token operator">==</span> oldFiber<span class="token punctuation">.</span>type

    <span class="token keyword">if</span> <span class="token punctuation">(</span>sameType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      newFiber <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> oldFiber<span class="token punctuation">.</span>type<span class="token punctuation">,</span>
        <span class="token literal-property property">props</span><span class="token operator">:</span> element<span class="token punctuation">.</span>props<span class="token punctuation">,</span>
        <span class="token literal-property property">dom</span><span class="token operator">:</span> oldFiber<span class="token punctuation">.</span>dom<span class="token punctuation">,</span>
        <span class="token literal-property property">parent</span><span class="token operator">:</span> wipFiber<span class="token punctuation">,</span>
        <span class="token literal-property property">alternate</span><span class="token operator">:</span> oldFiber<span class="token punctuation">,</span>
        <span class="token literal-property property">effectTag</span><span class="token operator">:</span> <span class="token string">&quot;UPDATE&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>element <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>sameType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      newFiber <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> element<span class="token punctuation">.</span>type<span class="token punctuation">,</span>
        <span class="token literal-property property">props</span><span class="token operator">:</span> element<span class="token punctuation">.</span>props<span class="token punctuation">,</span>
        <span class="token literal-property property">dom</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token literal-property property">parent</span><span class="token operator">:</span> wipFiber<span class="token punctuation">,</span>
        <span class="token literal-property property">alternate</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
        <span class="token literal-property property">effectTag</span><span class="token operator">:</span> <span class="token string">&quot;PLACEMENT&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>oldFiber <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>sameType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      oldFiber<span class="token punctuation">.</span>effectTag <span class="token operator">=</span> <span class="token string">&quot;DELETION&quot;</span>
      deletions<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>oldFiber<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>oldFiber<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      oldFiber <span class="token operator">=</span> oldFiber<span class="token punctuation">.</span>sibling
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      wipFiber<span class="token punctuation">.</span>child <span class="token operator">=</span> newFiber
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>element<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      prevSibling<span class="token punctuation">.</span>sibling <span class="token operator">=</span> newFiber
    <span class="token punctuation">}</span>

    prevSibling <span class="token operator">=</span> newFiber
    index<span class="token operator">++</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> Didact <span class="token operator">=</span> <span class="token punctuation">{</span>
  createElement<span class="token punctuation">,</span>
  render<span class="token punctuation">,</span>
  useState<span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">/** @jsx Didact.createElement */</span>
<span class="token keyword">function</span> <span class="token function">Counter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> setState<span class="token punctuation">]</span> <span class="token operator">=</span> Didact<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setState</span><span class="token punctuation">(</span><span class="token parameter">c</span> <span class="token operator">=&gt;</span> c <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
      Count: </span><span class="token punctuation">{</span>state<span class="token punctuation">}</span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> element <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Counter</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token keyword">const</span> container <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span>
Didact<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> container<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function d(v,m){const a=t("ExternalLinkIcon");return e(),o("div",null,[u,n("p",null,[n("a",r,[s("链接"),c(a)])]),k])}const f=p(l,[["render",d],["__file","build your own React.html.vue"]]);export{f as default};
