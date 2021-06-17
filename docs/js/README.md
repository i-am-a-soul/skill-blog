# 知识点

## 在浏览器中导入框架或库

```
// 以 jQuery 为例
data:text/html,<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
```

## 查看引用的当前值

```javascript
JSON.parse(JSON.stringify(obj))
```

## 在循环中创建函数

### `var + `立即调用函数表达式（`IIFE`）

```javascript
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

```javascript
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

