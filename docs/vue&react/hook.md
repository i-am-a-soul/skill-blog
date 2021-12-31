# `hook`

## `demo1`

```jsx
const Demo1 = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log('useEffect');
  });

  return (
    <div>
      {(() => {
        console.log('render');
        return null;
      })()}
      <div>data: {JSON.stringify(data)}</div>
    </div>
  );
};
```

`render`

`useEffect`

## `demo2`

```jsx
const Demo2 = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log('useEffect - []');
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => res.json())
      .then(res => {
        setData(res);
      });
  }, []);

  useEffect(() => {
    console.log('useEffect - 无');
  });

  useEffect(() => {
    console.log('useEffect - data');
  }, [data]);

  return (
    <div>
      {(() => {
        console.log('render');
        return null;
      })()}
      <div>data: {JSON.stringify(data)}</div>
    </div>
  );
};
```

`render`

`useEffect - []`

`useEffect - 无`

`useEffect - data`

`render`

`useEffect - 无`

`useEffect - data`

## `demo3`

```jsx
const Demo3 = () => {
  const [count, setCount] = useState(0);

  useState(() => {
    const timer = setInterval(() => {
      console.log(count); // 0 0 ...，闭包陷阱
      setCount(myCount => myCount + 1);
    }, 500);
    return () => { clearInterval(timer); }
  }, []);

  return <div>demo3</div>;
};
```

## `useState`

```jsx
// 1. 涉及复杂计算
/* bad */
const initCount = props.data.reduce((acc, cur) => acc + cur, 0);
const [count, setCount] = useState(initCount);
/* good */
const [count, setCount] = useState(() => props.data.reduce((acc, cur) => acc + cur, 0));

// 2. 涉及复杂对象
/* bad */
const [state, setState] = useState({
    key1: 'value1',
    key2: 'value2',
    ...
    key100: 'value100',
});
/* good */
const [state, setState] = useState(() => ({
    key1: 'value1',
    key2: 'value2',
    ...
    key100: 'value100',
}));
```

## `useState`、`useRef`

`useState`会触发组件的重新渲染，`useRef`不会。

- 当维护与`UI`有关的数据时，使用`useState`
- 当维护与`UI`无关的数据时，使用`useRef`
- 不发生变更的数据，使用`useState`，如下：

```js
const [immutable] = useState(value);
```

## `useCallback`

`useCallback`是简化版的`useMemo`，用于缓存函数的引用。

```js
const memoCallback = useCallback((...args) => {
  // do something
}, [...deps]);
// 等价于
const memoCallback = useMemo(() => (...args) => {
  // do something
}, [...deps]);
```

