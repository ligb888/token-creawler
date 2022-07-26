import Vue from 'vue';
import VueRouter from 'vue-router';

import store from '@/store';
import {
    Message
} from 'element-ui';


import warsManage from './modules/wars-manage';

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [{
            path: '/',
            redirect: '/login',
        }, {
            path: '/login',
            name: 'Login',
            component: () => import('@/views/login'),
            meta: {
                notToken: true
            }
        }, {
            path: '/navPage',
            name: 'NavPage',
            component: () => import('@/views/nav')
        },
        ...warsManage,
    ]
})



router.beforeEach((to, from, next) => {
    next();

    // 权限判断逻辑
    // const token = store.getters.getToken || '';
    //
    // if (to.meta.notToken || token) {
    //     next();
    // } else {
    //     Message.error('登录已失效，请重新登录');
    //     next({
    //         path: "/login"
    //     });
    // }
});

export default router