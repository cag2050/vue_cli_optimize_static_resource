import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: '',
            component: () => import('./views/IEchartsDemo')
        },
        {
            path: '/element',
            name: '',
            component: () => import('./views/ElementUIDemo.vue')
        },
        {
            path: '/hello',
            name: 'HelloWorld',
            component: () => import('./components/HelloWorld')
        }
    ]
})
