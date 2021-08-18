# 图片懒加载（`IntersectionObserver`）

## 效果（强制刷新页面后查看）

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> 图片懒加载 </title>
    <style>
        body { margin: 0; }
        p { text-align: center; }
        .container {
            width: 320px;
            height: 568px;
            overflow: auto;
        }
        .img {
            width: 100%;
        }
    </style>
</head>
<body>
    <div class="container">
        <p> 文字 </p>
        <p> 文字 </p>
        <p> 文字 </p>
        <p> 文字 </p>
        <p> 文字 </p>
        <div class="img-wrapper"><img src="https://placehold.it/320&text=Loading..." class="img" data-src="/skill-blog/img/0001.png"></div>
        <div class="img-wrapper"><img src="https://placehold.it/320&text=Loading..." class="img" data-src="/skill-blog/img/0002.png"></div>
        <div class="img-wrapper"><img src="https://placehold.it/320&text=Loading..." class="img" data-src="/skill-blog/img/0003.png"></div>
        <div class="img-wrapper"><img src="https://placehold.it/320&text=Loading..." class="img" data-src="/skill-blog/img/0004.png"></div>
        <div class="img-wrapper"><img src="https://placehold.it/320&text=Loading..." class="img" data-src="/skill-blog/img/0005.bmp"></div>
        <div class="img-wrapper"><img src="https://placehold.it/320&text=Loading..." class="img" data-src="/skill-blog/img/0006.bmp"></div>
    </div>
    <script>
        const images = document.querySelectorAll('.img')
        window.addEventListener('load', () => {
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target
                        const dataSrc = img.getAttribute('data-src')
                        img.setAttribute('src', dataSrc)
                        img.removeAttribute('data-src')
                        observer.unobserve(img)
                    }
                })
            })
            images.forEach(img => observer.observe(img))
        })
    </script>
</body>
</html>

## 实现

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> 图片懒加载 </title>
    <style>
        body { margin: 0; }
        p { text-align: center; }
        .container {
            width: 320px;
            height: 568px;
            overflow: auto;
        }
        .img {
            width: 100%;
        }
    </style>
</head>
<body>
    <div class="container">
        <p> 文字 </p>
        <p> 文字 </p>
        <p> 文字 </p>
        <p> 文字 </p>
        <p> 文字 </p>
        <div class="img-wrapper"><img src="https://placehold.it/320&text=Loading..." class="img" data-src="/skill-blog/img/0001.png"></div>
        <div class="img-wrapper"><img src="https://placehold.it/320&text=Loading..." class="img" data-src="/skill-blog/img/0002.png"></div>
        <div class="img-wrapper"><img src="https://placehold.it/320&text=Loading..." class="img" data-src="/skill-blog/img/0003.png"></div>
        <div class="img-wrapper"><img src="https://placehold.it/320&text=Loading..." class="img" data-src="/skill-blog/img/0004.png"></div>
        <div class="img-wrapper"><img src="https://placehold.it/320&text=Loading..." class="img" data-src="/skill-blog/img/0005.bmp"></div>
        <div class="img-wrapper"><img src="https://placehold.it/320&text=Loading..." class="img" data-src="/skill-blog/img/0006.bmp"></div>
    </div>
    <script>
        const images = document.querySelectorAll('.img')
        window.addEventListener('load', () => {
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target
                        const dataSrc = img.getAttribute('data-src')
                        img.setAttribute('src', dataSrc)
                        img.removeAttribute('data-src')
                        observer.unobserve(img)
                    }
                })
            })
            images.forEach(img => observer.observe(img))
        })
    </script>
</body>
</html>
```

