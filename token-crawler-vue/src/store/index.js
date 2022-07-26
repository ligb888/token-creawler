import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const getDefaultState = () => ({
    token: "",
    userInfo: {},
    roles: [],
    organize: "",
    realName: ""
});

export default new Vuex.Store({
    state: getDefaultState(),

    getters: {
    },

    mutations: {
        setState(state, params) {
            state[params[0]] = params[1]
        }
    },

    actions: {},

    modules: {
    },

    plugins: [createPersistedState({
        key: 'store'
    })]
})
