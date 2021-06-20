# 知识点

## 什么是`Webpack`

`Webpack`是一个模块打包工具（`Module Bundler`，如`Browserify`或`Brunch`），而不是一个任务执行工具（`Task Runner`，如`Make`，`Grunt`或`Gulp`）。

任务执行工具用来自动化处理常见的开发任务，如`lint`（代码检测）、`build`（构建）、`test`（测试）。相比于模块打包工具，任务执行工具则聚焦在偏重上层的问题上面。

你仍然可以得益于这种用法：使用上层的工具，而将打包部分的问题留给`Webpack`。

## `tree shaking`

`tree shaking`只能对`ES6 Module`生效。

如果我们在工程中使用了`babel-loader`，那么一定要通过配置来禁用它的模块依赖解析。因为如果由`babel-loader`来做依赖解析，`Webpack`接收到的就都是转化过的`CommonJS`形式的模块，无法进行`tree shaking`。

`tree shaking`本身只是为死代码添加上标记，真正去除死代码是通过压缩工具来进行的。

## 其他

- 一般来说，在生产环境下，我们希望样式存在于`CSS`文件中而不是`style`标签中，因为文件更有利于客户端进行缓存。
- `Webpack`的运行时指的是初始化环境的代码，如创建模块缓存对象、声明模块加载函数等。
- 当模块数量过多、资源体积过大时，可以把一些暂时用不到的模块延迟加载（即资源异步加载）。
- `ES6 Module`中要求`import`必须出现在代码的顶层作用域，而`Webpack`的`import`函数可以在任何我们希望的时候调用。

