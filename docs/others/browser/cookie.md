# `cookie`

`cookie`一般分为如下两种：

- `session cookie`，这种`cookie`会随着用户关闭浏览器而清除，不会标记任何过期时间`Expires`或最大时限`Max-Age`。
- `permanent cookie`，与`session cookie`相反，会在用户关闭浏览器之后被浏览器持久化存储。

同时，服务器端可以对`cookie`进行一些关键配置，以保障`cookie`的使用安全：

- `HttpOnly cookie`：在浏览器端，`JavaScript`没有读`cookie`的权限。
- `Secure cookie`：只有在特定安全通道（通常指`HTTPS`）下，传输链路的请求中才会自动加入相关`cookie`。
- `SameSite cookie`：在跨域情况下，相关`cookie`无法被请求携带，这里主要是为了防止`CSRF`攻击。

![](/skill-blog/img/0020.jpg)

在请求报文和响应报文头部各有一个与`cookie`相关的字段。请求报文中为`cookie`，响应报文中为`set-cookie`。

