# `publicPath`

## `output.publicPath`

### `HTML`相关

我们可以将`publicPath`指定为`HTML`的相对路径，在请求这些资源的时候会以当前页面`HTML`所在路径加上相对路径，构成实际请求的`URL`。如：

```js
// 假设当前 HTML 地址为 https://example.com/app/index.html
// 异步加载的资源名为 0.chunk.js
publicPath: ""           // 实际路径 https://example.com/app/0.chunk.js
publicPath: "./js"       // 实际路径 https://example.com/app/js/0.chunk.js
publicPath: "../assets/" // 实际路径 https://example.com/assets/0.chunk.js
```

### `Host`相关

若`publicPath`的值以“`/`”开始，则代表此时`publicPath`是以当前页面的`host name`为基础路径的。如：

```js
// 假设当前 HTML 地址为 https://example.com/app/index.html
// 异步加载的资源名为 0.chunk.js
publicPath: "/"      // 实际路径 https://example.com/0.chunk.js
publicPath: "/js/"   // 实际路径 https://example.com/js/0.chunk.js
publicPath: "/dist/" // 实际路径 https://example.com/dist/0.chunk.js
```

### `CDN`相关

上面两种配置都是相对路径，我们也可以使用绝对路径的形式配置`publicPath`。这种情况一般发生于静态资源放在`CDN`上面时，由于其域名与当前页面域名不一致，需要以绝对路径的形式进行指定。当`publicPath`以协议头或相对协议的形式开始时，代表当前的路径是`CDN`相关。如：

```js
// 假设当前 HTML 地址为 https://example.com/app/index.html
// 异步加载的资源名为 0.chunk.js
publicPath: "http://cdn.com/"   // 实际路径 http://cdn.com/0.chunk.js
publicPath: "https://cdn.com/"  // 实际路径 https://cdn.com/0.chunk.js
publicPath: "//cdn.com/assets/" // 实际路径 //cdn.com/0.chunk.js
```

## `devServer.publicPath`

它的作用是指定`webpack-dev-server`的静态资源服务路径，例子：

```js
const path = require('path')
module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
    },
    devServer: {
        putlicPath: '/abc/',
        port: 3000,
    },
}
```

从上面的目录可以看到，`Webpack`配置中`output.path`为`dist`目录，因此`bundle.js`应该生成在`dist`目录。但是当我们启动`webpack-dev-server`的服务后，访问`localhost:3000/dist/bundle.js`时却会得到`404`。这是因为`devServer.publicPath`配置后将资源位置指向了`localhost:3000/abc/`，因此只有访问`localhost:3000/abc/bundle.js`才能得到我们想要的结果。