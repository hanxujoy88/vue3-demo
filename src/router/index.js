/*
 * @Author: hanxu03
 * @Date: 2021-11-11 10:40:28
 * @LastEditTime: 2021-11-15 11:40:51
 * @LastEditors: hanxu03
 * @Description: 
 * @Enuma: Elish
 */
import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
        path: '/reactiveDemo',
        name: 'ReactiveDemo',
        component: () =>
            import ('../views/reactiveDemo.vue')
    },
    {
        path: '/toRefsDemo',
        name: 'ToRefsDemo',
        component: () =>
            import ('../views/toRefsDemo.vue')
    },
    {
        path: '/lifeCycle',
        name: 'LiftCycle',
        component: () =>
            import ('../views/lifeCycle.vue')
    },
    {
        path: '/watchReactive',
        name: 'WatchReactive',
        component: () =>
            import ('../views/watchReactive.vue')
    },
    {
        path: '/watchReactiveDeep',
        name: 'WatchReactiveDeep',
        component: () =>
            import ('../views/watchReactiveDeep.vue')
    },
    {
        path: '/hookTest',
        name: 'HookTest',
        component: () =>
            import ('../views/hookTest.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router