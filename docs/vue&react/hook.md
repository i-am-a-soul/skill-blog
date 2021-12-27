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

