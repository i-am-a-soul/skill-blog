# `window.performance API`

```js
function getTime () {
    const t = window.performance.timing

    return {
        // 重定向时间
        redirectTime: t.redirectEnd - t.redirectStart,
        // DNS 查询耗时
        dnsTime: t.domainLookupEnd - t.domainLookupStart,
        // 读取页面第一个字节的时间
        ttfbTime: t.responseStart - t.navigationStart,
        // DNS 缓存时间
        appCacheTime: t.domainLookupStart - t.fetchStart,
        // 卸载页面的时间
        unloadTime: t.unloadEventEnd - t.unloadEventStart,
        // TCP 连接耗时
        tcpTime: t.connectEnd - t.connectStart,
        // 请求耗时
        reqTime: t.responseEnd - t.responseStart,
        // 解析 DOM 树耗时
        analysisTime: t.domComplete - t.domInteractive,
        // 白屏时间
        blankTime: t.domLoading - t.fetchStart,
        // 用户可交互时间
        domReadyTime: t.domContentLoadedEventEnd - t.fetchStart,
        // 用户等待页面完全可用的时间
        loadPageTime: t.loadEventEnd - t.navigationStart,
    }
}
```

![](/skill-blog/img/0105.jpg)
