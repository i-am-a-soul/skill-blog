# 知识点

## 在浏览器中导入框架或库

```
// 以 jQuery 为例，在地址栏中输入
data:text/html,<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
```

## 查看引用的当前值

```js{3}
// 错误示例
let a = [1, 2, 3]
console.log(a)
a.push(4)
console.log(a)
```

![](/skill-blog/img/0001.png)

```js{3}
// 正确示例
let a = [1, 2, 3]
console.log(JSON.parse(JSON.stringify(a)))
a.push(4)
console.log(a)
```

![](/skill-blog/img/0002.png)

对象同理。

## 在循环中创建函数

### `var + IIFE`

立即执行函数表达式（`Immediately-Invoked Function Expression`，`IIFE`）

```js
var funcs = []

for (var i = 0; i < 10; ++ i) {
    funcs.push((function (val) {
        return function () {
            console.log(val)
        }
    }(i)))
}

funcs.forEach(function (func) {
    func() // 0, 1, ..., 9
})
```

### `let`

>每次循环的时候`let`声明都会创建一个新变量`i`，并将其初始化为`i`的当前值，所以循环内部创建的每个函数都能得到属于它们自己的`i`的副本。
>
>——《深入理解ES6》

```js
var funcs = []

for (let i = 0; i < 10; ++ i) {
    funcs.push(function () {
        console.log(i)
    })
}

funcs.forEach(function (func) {
    func() // 0, 1, ..., 9
})
```

## 为非同名局部变量赋值

```js
let node = {
    type: "Identifier",
    name: "foo",
}

let { type: localType, name: localName } = node

console.log(localType) // "Identifier"
console.log(localName) // "foo"
```

## 交换变量

```js
let a = 1, b = 2;

[a, b] = [b, a]

console.log(a) // 2
console.log(b) // 1
```

## 代码预编译阶段

在通过语法分析，确认语法无误之后，便会在预编译阶段对代码中变量的内存空间进行分配，我们熟知的变量提升过程便是在此阶段完成的。

对于预编译过程中的一些细节，我们应该注意以下`3`点：

1. 在预编译阶段进行变量声明
2. 在预编译阶段对变量声明进行提升，但是值为`undefined`
3. 在预编译阶段对所有非表达式的函数声明进行提升

```js
// 第 3 点
var bar = function () {
    console.log('bar2')
}

function bar () {
    console.log('bar1')
}

bar() // bar2
```

## `cannot read property of undefined`问题解决方案

1. 通过`&&`短路运算符进行可访问性嗅探
2. 通过`||`设置默认保底值
3. 使用`try...catch`方法

```js
let res
try {
    res = obj.user.post[0].comment
} catch {
    res = null
}
```

4. 使用`loadsh get API`

## 数组去重

```js
function unique (arr) {
    return Array.from(new Set(arr))
}

function unique (arr) {
    return arr.sort().reduce((res, cur) => {
        if (res.length == 0 || cur !== res[res.length - 1]) {
            res.push(cur)
        }
        return res
    }, [])
}
```

## `for...in`与`for...of`

```js
const arr = ['a', 'b', 'c']

for (const key in arr) {
    console.log(key) // 0 1 2
}

for (const value of arr) {
    console.log(value) // a b c
}
```

## `&&`与`||`的返回值

```js
const a = {}, b = 0

console.log(/* true  */ true && a) // {}
console.log(/* false */ b && true) // 0

console.log(/* true  */ a || true) // {}
console.log(/* false */ false || b) // 0
```

## `LHS`查询与`RHS`查询

作用域是一套规则，用于确定在何处以及如何查找变量（标识符）。如果查找的目的是对变量进行赋值，那么就会使用`LHS`查询；如果目的是获取变量的值，就会使用`RHS`查询。

`LHS`查询和`RHS`查询都会在当前执行作用域中开始，如果有需要（也就是说它们没有找到所需的标识符），就会向上级作用域继续查找目标标识符，这样每次上升一级作用域，最后抵达全局作用域，无论找到或没找到都将停止。

不成功的`RHS`引用会导致抛出`ReferenceError`异常。不成功的`LHS`引用会导致自动隐式地创建一个全局变量（非严格模式下），该变量使用`LHS`引用的目标作为标识符，或者抛出`ReferenceError`异常（严格模式下）。

## 数组方法

变更方法：

- `push`
- `pop`
- `shift`
- `unshift`
- `reverse`
- `sort`
- `splice`
- `fill`

非变更方法：

- `slice`
- `map`
- `filter`

## `async`

```js
async function func () {
    return 123
}

console.log(func()) // Promise {<fulfilled>: 123}
```

## 跳出`forEach`循环

```js
const a = [1, 2, 3, 4, 5]

a.forEach(e => {
    console.log(e)
    if (e === 3) { throw new Error('break') }
})
```

## `AJAX`

`AJAX`（`Asynchronous JavaScript and XML`）

![](/skill-blog/img/0048.jpg)

## 模块

`ES 5`：

- `IIFE`
- 显式模块声明
- 异步模块定义（`Asynchronous Module Definition`，`AMD`）
- 共同模块定义（`Common Module Definition`，`CMD`）
- `CommonJS`
- 通用模块定义（`Universal Module Definition`，`UMD`）

`ES 6`：

- `ES6 Module`

## 相等

参考资料：

- [相等（==）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Equality#%E6%8F%8F%E8%BF%B0)

```js
undefined == null // true

[] == ![] // true
```

## 编译原理

### 分词`/`词法分析（`Tokenizing/Lexing`）

这个过程会将由字符组成的字符串分解成（对编程语言来说）有意义的代码块，这些代码块被称为词法单元（`token`）。

### 解析`/`语法分析（`Parsing`）

这个过程是将词法单元流（数组）转换成一个由元素逐级嵌套所组成的代表了程序语法结构的树。这个树被称为“抽象语法树”（`Abstract Syntax Tree`，`AST`）。

### 代码生成

将`AST`转换为可执行代码的过程被称为代码生成。这个过程与语言、目标平台等息息相关。

## `var`、`let`与`const`

```js
var a = 1
let b = 2
const c = 3

console.log(window.a) // 1
console.log(window.b) // undefined
console.log(window.c) // undefined
```

## 用`console.table`打印数组

![](/skill-blog/img/0063.png)

打印对象也可以。

## 判断`null`或`undefined`

```js
// good
if (x == null) {}

// bad
if (x === null || x === undefined) {}
```

# `fill([])`

```js
const a = new Array(3).fille([]);
a[0].push('abc');
console.log(JSON.stringify(a)); // '[["abc"],["abc"],["abc"]]'
```

## `ES6`和`ECMAScript 2015`的关系

`ES6`是`ECMA`为`JavaScript`制定的第`6`个版本的标准，标准委员会最终决定，标准在每年的`6`月份正式发布一次，作为当年的正式版本。`ECMAScript 2015`是在`2015`年`6`月份发布的`ES6`的第一个版本，以此类推`ECMAScript 2016`是`ES6`的第二个版本，`ECMAScript 2017`是`ES6`的第三个版本。

## 其他

- 在每个`script`标签中，顶层作用域即全局作用域，如果没有任何处理而直接在代码中进行变量或函数声明，就会造成全局作用域的污染。

- `setTimeout`函数指定了**将任务添加到队列前的延时**。

- 箭头函数中的`this`、`super`、`arguments`以及`new.target`这些值由外围最近一层非箭头函数决定。

- 如果想让箭头函数向外返回一个对象字面量，则需要将该字面量包裹在小括号里，以将其与函数体区分开来。

- 无论函数已定义的命名参数有多少，都不限制调用时传入的实际参数数量，调用时总是可以传入任意数量的参数。

- 在`ES6`出现之前，一般来说只有函数作用域和全局作用域之分。

- `debugger`。

- 基本数据类型保存在栈空间中，引用类型保存在堆空间中，闭包变量保存在堆空间中。

- ![](/skill-blog/img/0007.png)

- 字符串的值是不可以改变的。

  ```js
  let str = 'abc'
  str[1] = 'd'
  console.log(str) // abc
  ```

- 建议减少使用`export default`导出，一方面是因为`export default`会导出整体对象结果，不利于通过`tree shaking`进行分析；另一方面是因为`export default`导出的结果可以随意命名变量，不利于团队统一管理。

- `try...catch`处理异常的能力有限，对于处理运行时非异步错误是没有问题的，但却无法处理语法错误和异步错误。

- `setTimeout`最小的`delay`为`4`（`ms`），`setInterval`最小的`delay`为`10`（`ms`）。

- 变量的声明应该距离使用的地方越近越好，并最大限度地本地化。

- 静默失败（`silently failed`）。

- 当你给一个属性定义`getter`、`setter`或者两者都有时，这个属性会被定义为“访问描述符”（和“数据描述符”相对）。对于访问描述符来说，`JavaScript`会忽略它们的`value`和`writable`特性，取而代之的是关心`set`和`get`（还有`configurable`和`enumerable`）特性。

- `in`操作符会检查属性是否在对象及其`[[Prototype]]`链中。相比之下，`hasOwnProperty`只会检查属性是否在对象自身中，不会检查`[[Prototype]]`链。

- `Object.create(null)`会创建一个拥有空`[[Prototype]]`链接的对象，这些特殊的空`[[Prototype]]`对象通常被称作“字典”，它们完全不会受到原型链的干扰，因此非常适合用来存储数据。

- `requestAnimationFrame -> Style -> Layout -> Paint`。

- [Promise.prototype.then的返回值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#%E8%BF%94%E5%9B%9E%E5%80%BC)

- ![](/skill-blog/img/0056.png)

- [可选链操作符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

- [Number.MAX_SAFE_INTEGER](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)

- `9007199254740993 == 9007199254740992; // true`

- 如果`throw`非`Error`对象，那么在代码出问题的时候无法获得调用栈等有用的信息。

- 异步函数或方法的返回类型必须为全局`Promise<T>`类型

- ```js
  const a = '200px'
  console.log(parseInt(a, 10)) // 200
  ```

- `console.log(window.toString()) // [object Window]`

- ```js
  const stopPropagation = (e: React.MouseEvent) => {
    e?.stopPropagation?.();
    e?.nativeEvent?.stopImmediatePropagation?.();
  }
  ```

- ![](/skill-blog/img/0081.jpeg)

- ![](/skill-blog/img/0082.jpeg)

- ![](/skill-blog/img/0085.jpeg)

- ![](/skill-blog/img/0086.jpeg)

- ```js
    console.log('' ?? 'abc'); // ''
    console.log('' || 'abc'); // 'abc'
  ```

- ```js
  [1, 2, 3].forEach(async value => {
      await doSomething(value) // 错误，因为 callbackfn: (value: number, index: number, array: number[]) => void
  });
  ```

- `window.crypto.randomUUID(); // 'c8379004-ea99-498c-a28f-4034dabf97ef'`

- ```js
    function foo() {
        try {
            return true;
        } finally {
            console.log('123');
        }
    }
    foo(); // 123
    ```

- ![](/skill-blog/img/0130.png)
