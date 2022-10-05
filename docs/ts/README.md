# 知识点

## 获取一个库的声明文件

![](/skill-blog/img/0059.png)

## `key`未知

```typescript
interface IObj {
  [key: string]: number;
}
```

## 其他

- [Indexable Types](https://www.typescriptlang.org/docs/handbook/interfaces.html#indexable-types)

- `tsc --watch code.ts`

- `type Maybe<T> = T | null;`

- ![](/skill-blog/img/0097.jpg)

- [lib.es5.d.ts](https://github.com/microsoft/TypeScript/blob/main/lib/lib.es5.d.ts)

- [Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeystype)

- `never`是`union`运算的幺元：

  ```typescript
  type A = number | never; // type A = number
  type B = any | never; // type B = any
  ```

  
