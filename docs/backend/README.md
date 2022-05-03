# 知识点

## `IDL`文件示例

```idl
// struct 名称标识 {
//   数字标识: (required|optional)? 类型 名称标识 (= 值)?
// }
// 数字标识： 是用来同步服务端、客户端参数位置信息的
// required: 可以看成必填
// optional: 可以看成可选
struct GetActionsRequest {
  1: required string              Host
  2: required string              Path
  3: required string              Method
  4: required map<string, string> Headers
  5: optional string              Protocol // default protocol is http
}

service GatewayService {
  GetActionsResponse getActions(1: GetActionsRequest req)(api.get='/api/gateway/getActions')
}

  GetActionsResponse getActions(1: GetActionsRequest req)(api.get='/api/gateway/getActions')
  \_______________/   \_______/  \_____________________/  \______________________________/
          |               |                |                             |
        返回值           方法名           请求参数                      method 与 uri
```

## `GraphQL`与`REST API`的区别

- `GraphQL`是聚合的，而`REST API`是离散的。使用`GraphQL`时只需要通过一个请求地址来操作数据，而`REST API`需要通过不同的请求地址来操作数据。
- `GraphQL`是可变的，而`REST API`是相对固定的。`GraphQL`传入不同的`Schema`可以操作不同的数据；而对于`REST API`而言，一个请求地址只能指向一个（类）资源。

## 服务发现

![](/skill-blog/img/0075.png)

## 其他

- `gRPC`基于`HTTP 2`。
- 通过压力测试，我们可以在大体上了解一个应用可以承受的最大`QPS`。
- `GUID`是`UUID`的一种实现。
- ![](/skill-blog/img/0074.png)
- 一个请求经过的所有服务和中间件，构成了一条调用链，包括`LB`，`HTTP`服务，`RPC`服务，消息队列等。
- ![](/skill-blog/img/0076.png)
- `thrift`既是`IDL`格式，又是序列化协议和传输协议。

