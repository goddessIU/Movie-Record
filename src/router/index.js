import VueRouter from 'vue-router';
import Vue from 'vue';
import sessionStorage from '../utils/sessionStorage';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/Home.vue'),
        redirect: '/home/login',
        children: [
            {
                path: 'login',
                name: 'login',
                component: () => import('../views/Login.vue')
            },
            {
                path: 'register',
                name: 'register',
                component: () => import('../views/Register.vue')
            }
        ]
    },
    {
        path: '/user',
        name: 'user',
        component: () => import('../views/User.vue'),
        redirect: '/user/total',
        children: [
            {
                path: 'total',
                name: 'total',
                component: () => import('../views/Total.vue')
            },
            {
                path: 'setting',
                name: 'setting',
                component: () => import('../views/Setting.vue')
            }
        ]
    }
];

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    if (['login', 'register', 'home'].includes(to.name)) {
        next();
    } else {
        if (sessionStorage.getItem()) {
            next();
        } else {
            next({name: 'login'});
        }
    }

})

export default router;