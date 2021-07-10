# `new`关键字

## `new`操作符调用构造函数时具体做了什么

```js
function Foo () {
    this.bar = 'Lucas'
}
const instance = new Foo()
console.log(instance.bar) // Lucas
```

简略版答案：

- 创建一个新的对象
- 将构造函数的`this`指向这个新的对象
- 为这个对象添加属性、方法等
- 最终返回新的对象

```js
var obj = {}
obj.__proto__ = Foo.prototype
Foo.call(obj)
```

需要指出的是，如果在构造函数里出现了显式`return`的情况，那么需要注意，其可以分为两种场景。

场景一：执行以下代码将输出`undefined`，此时`instance`返回的是空对象`o`。

```js
function Foo () {
    this.user = 'Lucas'
    const o = {}
    return o
}
const instance = new Foo()
console.log(instance.user) // undefined
```

场景二：执行以下代码将输出`Lucas`，也就是说，`instance`此时返回的是目标对象实例`this`。

```js
function Foo () {
    this.user = 'Lucas'
    return 1
}
const instance = new Foo()
console.log(instance.user) // Lucas
```

所以，如果构造函数中显式返回一个值，且返回的是一个对象（返回复杂类型），那么`this`指向这个返回的对象；如果返回的不是一个对象（返回基本类型），那么`this`仍然指向实例。

## `[[Construct]]`

`JavaScript`函数有两个不同的内部方法：`[[Call]]`和`[[Construct]]`。当通过`new`关键字调用函数时，执行的是`[[Construct]]`函数，它负责创建一个通常被称作实例的新对象，然后执行函数体，将`this`绑定到实例上；如果不通过`new`关键字调用函数，则执行`[Call]]`函数，从而直接执行代码中的函数体。具有`[[Construct]]`方法的函数被统称为构造函数。

切记，不是所有的函数都有`[[Construct]]`方法，因此不是所有函数都可以通过`new`来调用，如箭头函数就没有`[[Construct]]`方法。

