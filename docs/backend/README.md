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

