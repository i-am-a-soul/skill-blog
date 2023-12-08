# `[[Prototype]]`链

```js
// 通过实例访问原型对象
foo.__proto__ // （不推荐）
Object.getPrototypeOf(foo)

// 通过构造函数访问原型对象
Foo.prototype
```

原型链的终点：`Object.prototype`。

![](/img/0016.png)

```js
Function.__proto__ === Function.prototype // true
```

