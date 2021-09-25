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

## `[[Construct]]`

`JavaScript`函数有两个不同的内部方法：`[[Call]]`和`[[Construct]]`。当通过`new`关键字调用函数时，执行的是`[[Construct]]`函数，它负责创建一个通常被称作实例的新对象，然后执行函数体，将`this`绑定到实例上；如果不通过`new`关键字调用函数，则执行`[Call]]`函数，从而直接执行代码中的函数体。具有`[[Construct]]`方法的函数被统称为构造函数。

切记，不是所有的函数都有`[[Construct]]`方法，因此不是所有函数都可以通过`new`来调用，如箭头函数就没有`[[Construct]]`方法。

## 判断函数被调用的方法

### 在`ECMAScript 5`中

在`ECMAScript 5`中，如果想确定一个函数是否通过`new`关键字被调用（或者说，判断该函数是否作为构造函数被调用），最流行的方式是使用`instanceof`，举个例子：

```js
function Person (name) {
    if (this instanceof Person) {
        this.name = name // 如果通过 new 关键字调用
    } else {
        throw new Error('必须通过 new 关键字来调用 Person。')
    }
}

const person = new Person('Nicholas')
const notAPerson = Person('Nicholas') // 抛出错误
```

在这段代码中，首先检查`this`的值，看它是否为构造函数的实例，如果是，则继续正常执行；如果不是，则抛出错误。由于`[[Construct]]`方法会创建一个`Person`的新实例，并将`this`绑定到新实例上，通常来讲这样做是正确的，但这个方法也不完全可靠，因为有一种不依赖`new`关键字的方法也可以将`this`绑定到`Person`实例上，如下所示：

```js
const person = new Person('Nicholas')
const notAPerson = Person.call(person, 'Michael') // 有效
```

调用`Person.call()`时将变量`person`传入作为第一个参数，相当于在`Person`函数里将`this`设为了`person`实例。对于函数本身，无法区分是通过`Person.call()`（或者是`Person.apply()`）还是`new`关键字调用得到的`Person`实例。

### 在`ECMAScript 6`中

为了解决判断函数是否通过`new`关键字调用的问题，`ECMAScript 6`中引入了`new.target`这个元属性。元属性是指非对象的属性，其可以提供非对象目标的补充信息（例如`new`）。当调用函数的`[[Construct]]`方法时，`new.target`被赋值为`new`操作符的目标，通常是新创建对象实例，也就是函数体内`this`的构造函数；如果调用了`[[Call]]`方法，则`new.target`的值为`undefined`。

有了这个元属性，可以通过检查`new.target`是否被定义过来安全地检测一个函数是否是通过`new`关键字调用的，就像这样：

```js
function Person (name) {
    if (typeof new.target !== 'undefined') {
        this.name = name // 如果通过 new 关键字调用
    } else {
        throw new Error('必须通过 new 关键字来调用 Person。')
    }
}

const person = new Person('Nicholas')
const notAPerson = Person('Nicholas') // 抛出错误
```

在放弃使用`this instanceof Person`的方法且改为检测`new.target`后，我们可以在`Person`构造函数中正确地进行判断，当未通过`new`关键字调用时抛出错误。

也可以检查`new.target`是否被某个特定构造函数所调用，举个例子：

```js
function Person (name) {
    if (new.target === Person) {
        this.name = name // 如果通过 new 关键字调用
    } else {
        throw new Error('必须通过 new 关键字来调用 Person。')
    }
}

function AnotherPerson (name) {
    Person.call(this, name)
}

const person = new Person('Nicholas')
const anotherPerson = new AnotherPerson('Nicholas') // 抛出错误
```

在这段代码中，如果要让程序正确运行，`new.target`一定是`Person`。当调用`new AnotherPerson('Nicholas')`时，真正的调用`Person.call(this, name)`没有使用`new`关键字，因此`new.target`的值为`undefined`会抛出错误。

