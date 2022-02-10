import Vue from 'vue';
import Vuex from 'vuex';
import localStorage from '../utils/localStorage.js';
import sessionStorage from '../utils/sessionStorage.js';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        names: localStorage.getItem(JSON.stringify(sessionStorage.getItem())).names || []
    },
    mutations: {
        ADDCARD(state, {name}) {
            let names = localStorage.getItem(JSON.stringify(sessionStorage.getItem())).names;
            if (!names) {
                localStorage.addItem(sessionStorage.getItem(), {names: []});
            } 
            names.push(name);
            localStorage.addItem(sessionStorage.getItem(), { names });
            state.names.push(name);
        },
        DELETECARD(state, index) {
            let names = state.names;
            names.splice(index, 1);
            localStorage.addItem(sessionStorage.getItem(), { names });
        }
    }
})