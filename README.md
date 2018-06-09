# vue_cli_optimize_static_resource

> A Vue.js project

### 关键代码解析：

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
        'vue': 'Vue',
        'vue-router': 'VueRouter',
        'element-ui': 'ELEMENT',
        'moment': 'moment',
        'echarts': 'echarts'
    },
```

事项 | 优化前 | 优化后
--- | --- | ---
初次dev速度 | |
dev速度 |  | 200ms、275ms
build速度 | | 8s


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
