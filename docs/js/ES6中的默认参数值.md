# `ES6`中的默认参数值

声明函数时，可以为任意参数指定默认值，在已指定默认参数值的参数后可以继续声明无默认值参数。举个例子，像这样声明函数不会抛出错误：

```js
function makeRequest (url, timeout = 2000, callback) {
    // 函数的其余部分
}
```

在这种情况下，只有当不为第二个参数传入值或主动为第二个参数传入`undefined`时才会使用`timeout`的默认值，就像这样：

```js
// 使用 timeout 的默认值
makeRequest("/foo", undefined, function (body) {
    doSomething(body)
})

// 使用 timeout 的默认值
makeRequest("/foo")

// 不使用 timeout 的默认值
makeRequest("/foo", null, function (body) {
    doSomething(body)
})
```

对于默认参数值，`null`是一个合法值，也就是说第`3`次调用`makeRequest`方法时，不使用`timeout`的默认值，其值最终为`null`。

