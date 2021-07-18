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

### `var + `立即调用函数表达式（`IIFE`）

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

## 删除`DOM`节点

```js
let e = document.getElementById('to-be-removed')

e.parentNode.removeChild(e)
e = null // 释放内存
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

## 其他

- 在每个`script`标签中，顶层作用域即全局作用域，如果没有任何处理而直接在代码中进行变量或函数声明，就会造成全局作用域的污染。

- `setTimeout`函数指定了**将任务添加到队列前的延时**。

- 箭头函数中的`this`、`super`、`arguments`以及`new.target`这些值由外围最近一层非箭头函数决定。

- 如果想让箭头函数向外返回一个对象字面量，则需要将该字面量包裹在小括号里，以将其与函数体区分开来。

- 无论函数已定义的命名参数有多少，都不限制调用时传入的实际参数数量，调用时总是可以传入任意数量的参数。

- 在`ES6`出现之前，一般来说只有函数作用域和全局作用域之分。

- `debugger`。

- 基本数据类型保存在栈空间中，引用类型保存在堆空间中。

- ![](/skill-blog/img/0007.png)

- 字符串的值是不可以改变的。

- ```js
  const func = () => {
      console.log(a)
  }
  const a = 'a'
  func() // a
  
  const func = () => {
      console.log(a)
  }
  func() // ReferenceError: Cannot access 'a' before initialization
  const a = 'a'
  ```

- 
