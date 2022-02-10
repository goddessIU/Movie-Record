import Vue from 'vue';
import Vuex from 'vuex';
import localStorage from '../utils/localStorage.js';
import sessionStorage from '../utils/sessionStorage.js';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        id: sessionStorage.getItem(),
        user: localStorage.getItem(sessionStorage.getItem()) || {}
    },
    actions: {
        changeInformation({commit}, form) {
            commit('CHANGEINFORMATION', form);
        }
    },
    mutations: {
        CHANGEINFORMATION(state, {name, sex}) {
            localStorage.setItem(state.id, { name, sex });
        }
    }
})