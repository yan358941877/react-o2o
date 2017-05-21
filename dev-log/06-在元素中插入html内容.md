### dangerouslySetHTML

处于安全考虑的原因（XSS攻击），在React.js当中所有的表达式插入的内容都会被自动转移，就相当于jQuery里面的text()函数一样，任何的HTML格式都会被转移掉

```javascript
render(){
    const content = '<h1>Hello World</h1>'
    return (
        <div>
            {content}
        </div>
    )
}
```

在上面的例子中，该组件会呈现出 `<h1>Hello World</h1>`而不会以h1的央视呈现Hello World


表达式插入并不会把一个 `<h1>` 渲染到页面，而是把它的文本形式渲染了。那要怎么才能做到设置动态 HTML 结构的效果呢？React.js 提供了一个属性 dangerouslySetInnerHTML，可以让我们设置动态设置元素的 innerHTML：

```javascript
render(){
    const content = '<h1>Hello World</h1>'
    return (
        <div dangerouslySetInnerHTML={{__html: content}}/>
    )
}
```

* 注意该属性在不必要的情况下就不要使用