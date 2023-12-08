import{_ as e,o as i,c as r,e as n}from"./app-M6OZmubj.js";const a={},c=n('<h1 id="设计模式原则" tabindex="-1"><a class="header-anchor" href="#设计模式原则" aria-hidden="true">#</a> 设计模式原则</h1><h2 id="开闭原则-open-close-principle" tabindex="-1"><a class="header-anchor" href="#开闭原则-open-close-principle" aria-hidden="true">#</a> 开闭原则（<code>Open Close Principle</code>）</h2><p>理解开闭原则，就要了解开和闭。这里的开是指对扩展开放，闭是指对修改关闭。想象一下，我们有一套实现，提供一个服务，这样的程序需要能够随时进行扩展、随时支持第三方的自定义配置，但是不能去修改已有的实现代码。</p><h2 id="里氏替换原则-liskov-subsitution-principle" tabindex="-1"><a class="header-anchor" href="#里氏替换原则-liskov-subsitution-principle" aria-hidden="true">#</a> 里氏替换原则（<code>Liskov Subsitution Principle</code>）</h2><p>里氏替换原则要求，在任何基类可以发挥作用的地方，子类一定可以发挥作用。想一想我们继承的实现，里氏替换原则就是继承复用的基础。只有当派生类可以随时替换掉其基类，且功能不被破坏，基类的方法仍然能被使用时，才算真正做到了继承，继承才能真正实现复用。当然，派生类也需要随时能够在基类的基础上增加新的行为。</p><h2 id="依赖反转原则-dependence-inversion-principle" tabindex="-1"><a class="header-anchor" href="#依赖反转原则-dependence-inversion-principle" aria-hidden="true">#</a> 依赖反转原则（<code>Dependence Inversion Principle</code>）</h2><p>该原则要求针对接口进行编程，使高层次的模块不依赖低层次的模块的实现细节，两者都应该依赖于抽象接口。</p><h2 id="接口隔离原则-interface-segregation-principle" tabindex="-1"><a class="header-anchor" href="#接口隔离原则-interface-segregation-principle" aria-hidden="true">#</a> 接口隔离原则（<code>Interface Segregation Principle</code>）</h2><p>接口隔离的意思或目的是减少耦合的出现。在大型软件架构中，使用多个相互隔离的接口，一定比使用单个大而全的接口要好。</p><h2 id="最少知道原则-demeter-principle" tabindex="-1"><a class="header-anchor" href="#最少知道原则-demeter-principle" aria-hidden="true">#</a> 最少知道原则（<code>Demeter Principle</code>）</h2><p>又称迪米特法则，指一个系统的功能模块应该最大限度地不知晓其他模块的出现，减少感知，模块之间应相互独立。</p><h2 id="合成复用原则-composite-reuse-principle" tabindex="-1"><a class="header-anchor" href="#合成复用原则-composite-reuse-principle" aria-hidden="true">#</a> 合成复用原则（<code>Composite Reuse Principle</code>）</h2><p>指尽量使用合成<code>/</code>聚合的方式，而不是使用继承。</p>',13),d=[c];function o(p,t){return i(),r("div",null,d)}const h=e(a,[["render",o],["__file","设计模式原则.html.vue"]]);export{h as default};
