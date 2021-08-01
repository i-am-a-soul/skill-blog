# 封装`localStorage`

```js
const namespace = 'mall'

export function setItem (key, value) {
    let storage = window.localStorage.getItem(namespace)

    if (!storage) {
        storage = {}
    } else {
        storage = JSON.parse(storage)
    }

    storage[key] = value
    window.localStorage.setItem(namespace, JSON.stringify(storage))
}

export function getItem (key, defaultValue) {
    let storage = window.localStorage.getItem(namespace)

    if (!storage) {
        return defaultValue
    } else {
        storage = JSON.parse(storage)
    }

    return storage[key] || defaultValue
}
```

