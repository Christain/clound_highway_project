import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index'
// import Map from '../components/Map.vue'
// import Control from '../components/Control.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    // {
    //     path: '/map',
    //     name: 'Map',
    //     component: Map
    // },
    // {
    //     path: '/control',
    //     name: 'Control',
    //     component: Control
    // },
    // {
    //     path: '/video',
    //     name: 'Video',
    //     component: () => import(/* webpackChunkName: "Video" */'../components/Video.vue'),
    // },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "Login" */'../views/Login.vue'),
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    // base: '/clound_highway',
    routes
})

export default router
