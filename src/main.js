import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api'

//引入Toast组件
import {Toast} from 'vant'
Vue.use(Toast)

Vue.config.productionTip = false

Vue.prototype.$api = api;

router.beforeEach((to, from, next) => {
    if (store.state.login.token || to.path === "/login") {
        next()
    } else {
        next({
            path: "/login"
        })
    }
})

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')
