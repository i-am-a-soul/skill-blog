# 知识点

## 获取一个库的声明文件

![](/skill-blog/img/0059.png)

## `key`未知

```typescript
interface IObj {
  [key: string]: number;
}
```

## `tsconfig.json`选项

| 选项    | 说明                                                         |
| ------- | ------------------------------------------------------------ |
| include | `TSC`在哪个文件夹中寻找`TypeScript`文件                      |
| lib     | `TSC`假定运行代码的环境中有哪些`API`。包括`ES5`的`Function.prototype.bind`、`ES2015`的`Object.assign`和`DOM`的`document.querySelector` |
| module  | `TSC`把代码编译成哪个模块系统（`CommonJS`、`SystemJS`、`ES2015`等） |
| outDir  | `TSC`把生成的`JavaScript`代码放在哪个文件夹中                |
| strict  | 检查无效代码时尽量严格。该选项强制所有代码都正确声明了类型。 |
| target  | `TSC`把代码编译成哪个`JavaScript`版本（`ES3`、`ES5`、`ES2015`、`ES2016`等） |

## 子类型和超类型

给定两个类型`A`和`B`，假设`B`是`A`的子类型，那么在需要`A`的地方都可以放心使用`B`。

- 所有类型都是`any`的子类型

- `never`是所有类型的子类型

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

- ![](/skill-blog/img/0100.png)

- ![](/skill-blog/img/0102.png)

- 少数情况下，如果你确实无法预知一个值的类型，不要使用`any`，应该使用`unknown`。与`any`类似，`unknown`也表示任何值，但是`TypeScript`会要求你再做检查、细化类型。

- 并集使用`|`，交集使用`&`。

- `T`、`U`、`V`、`W`。

- 装饰器就是在装饰目标上调用函数的一种语法。

- 如果想让`TypeScript`推导的类型尽量窄一些，请使用`as const`，`const`不仅能阻止拓宽类型，还将递归把成员设为`readonly`，不管数据结构的嵌套层级有多深。

- `React`有自己的一套`DOM`事件包装类型。处理`React`事件时，必须使用`React`的事件类型，不能使用常规的`DOM`事件类型。

- `strictNullChecks`：When type checking, take into account `null` and `undefined`.

- Don't use `{}` as a type. `{}` actually means "any non-nullish value".

  - If you want a type meaning "any object", you probably want `Record<string, unknown>` instead.

  - If you want a type meaning "any value", you probably want `unknown` instead.

  - If you want a type meaning "empty object", you probably want `Record<string, never>` instead.

- `// @ts-expect-error`

- Catch 子句变量类型注释必须为 "any" 或 "unknown" (若已指定)：[链接](https://stackoverflow.com/questions/69021040/why-catch-clause-variable-type-annotation-must-be-any
  )
- ![](/skill-blog/img/0121.jpg)
