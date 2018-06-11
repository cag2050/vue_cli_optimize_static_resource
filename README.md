# vue_cli_optimize_static_resource

> A Vue.js project

* 在开发时，`router.js`只保留正在开发的路由，其他路由注释掉，可以显著减少编译时间。
* 操作说明：http://www.cnblogs.com/cag2050/p/9134930.html
* 放在项目根目录下static文件夹里的文件夹及文件，在打包后，会被复制到dist/static下。

### 关键代码解析：
build/webpack.base.conf.js 文件中配置：

```
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            // 默认路径代理，例如 import Vue from 'vue'，会自动到 'vue/dist/vue.esm.js'中寻找
            // 我们用script标签的形式引入vue.min.js，所以此处需要注释掉
            // 'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src'),
        }
    },
    externals: {
        // 下面一行等价于：'vue': 'window.Vue'，其他行同理
        // 配置好externals后，运行`import Vue from 'vue'`语句，语句中from后面的vue就是下面这行的key：'vue'，key对应的value：Vue（等价于window.Vue）；
        // externals对象里的key，用来`import xxx from <externals的key>`；externals对象里的value，指定从哪里寻找资源。
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'element-ui': 'ELEMENT',
        'moment': 'moment',
        'echarts': 'echarts'
    },
```

### 优化前后对比：

事项 | 优化前 | 优化后
--- | --- | ---
初次dev速度 | | 5.5s、
dev速度 | 300ms、400ms | 200ms、275ms、191ms、256ms、306ms、
build速度 | 8s、| 8s、10s、8s


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
