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

## 其他

- 在每个`script`标签中，顶层作用域即全局作用域，如果没有任何处理而直接在代码中进行变量或函数声明，就会造成全局作用域的污染。

