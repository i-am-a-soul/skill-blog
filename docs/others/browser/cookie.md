# `cookie`

## 种类

- `session cookie`，这种`cookie`会随着用户关闭浏览器而清除，不会标记任何过期时间`Expires`或最大时限`Max-Age`。
- `permanent cookie`，与`session cookie`相反，会在用户关闭浏览器之后被浏览器持久化存储。

## 缺点

- `cookie`的大小是有限的，不同浏览器的限制会有所不同，早期浏览器对`cookie`的限制大约在4KB左右，这就意味着客户端能存取的状态信息是非常有限的。
- `cookie`会消耗网络带宽，因为`cookie`是跟随域名和路径设定的，只要域名和路径相同，对于某些不需要`cookie`的请求也会带上`cookie`。
- `cookie`是可以被禁用的，如果浏览器设置了安全策略禁止使用`cookie`，那么服务器端设置`cookie`将会失败。
- `cookie`可能会被窃取或篡改。

## 带`.`和不带`.`的区别

![](/skill-blog/img/0080.png)

带`.`：父`domain`和子`domain`都可以访问

不带`.`：只有`domain`一样才可以访问

## 安全

在请求报文和响应报文头部各有一个与`cookie`相关的字段。请求报文中为`cookie`，响应报文中为`set-cookie`。

![](/skill-blog/img/0020.jpg)

服务器端可以对`cookie`进行一些关键配置，以保障`cookie`的使用安全：

- `HttpOnly cookie`：在浏览器端，`JavaScript`没有读`cookie`的权限。
- `Secure cookie`：只有在特定安全通道（通常指`HTTPS`）下，传输链路的请求中才会自动加入相关`cookie`。
- `SameSite cookie`：在跨站情况下，相关`cookie`无法被请求携带，这里主要是为了防止`CSRF`攻击。

参考资料：

- [跨域和跨站的基本概念](https://alexzhong22c.github.io/2020/05/22/cross-origin-cross-site/)
- [Cookie 的 SameSite 属性](https://www.ruanyifeng.com/blog/2019/09/cookie-samesite.html)

