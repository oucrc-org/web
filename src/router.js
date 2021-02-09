import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function loadView(view) {
    return () => import(/* webpackChunkName: "view-[request]" */ `@/components/${view}`)
}

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'app',
            component: loadView('Home')
        },
        {
            path: '/health',
            name: 'health',
            component: loadView('Health')
        },
        {
            path: '*',
            name: '404',
            component: loadView('NotFound')
        },
    ]
})