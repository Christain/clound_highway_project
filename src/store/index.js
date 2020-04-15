import Vue from "vue"
import Vuex from "vuex"
import login from "./modules/login"
import mutations from "./mutations"
import getters from "./getters"
import actions from "./actions"

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        login
    },
    getters,
    mutations,
    actions,
})

export default store