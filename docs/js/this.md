# `this`

```js
const obj = {
    name: 'Lucas',
    f () {
        console.log(this) // obj

        setTimeout(function () {
            console.log(this) // Window
        }, 1000)

        setTimeout(() => {
            console.log(this) // obj
        }, 2000)
    },
}

obj.f()
```

