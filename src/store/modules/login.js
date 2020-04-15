const state = {
    token: ''//登录标识
}

const getters = {}

const actions = {
    actionSetToken(context, token) {
        context.commit("mutationSetToken", token)
    }
}

const mutations = {
    //设置登录标识
    mutationSetToken(state, token) {
        state.token = token
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}