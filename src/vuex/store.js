import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger'
// import sessionState from '../plugins/SessionState'
import * as actions from './actions';
import * as getters from './getters';

import cookie from './modules/cookie';
import order from './modules/order';

Vue.use(Vuex);

export default new Vuex.Store({
    actions,
    getters,
    modules: {
        cookie,
        order,
        //---------------

        //-------------------

    },
    plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] //, sessionState()
        :
        [],
});