import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger'
import sessionState from '../plugins/SessionState'
import * as actions from './actions';
import * as getters from './getters';

import cookie from './modules/cookie';
import plan from './modules/plan';
import group from './modules/group';
import mutual_aid from './modules/mutual_aid';
import order from './modules/order';
import vehicle from './modules/vehicle';
import wallet from './modules/wallet';
import profile from './modules/profile';
import pay from './modules/pay';
import checkcode from './modules/checkcode';
import bank_payment from './modules/bank_payment';
import mobile from './modules/mobile';
import person from './modules/person';
import quotation from './modules/quotation';

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    cookie,
    plan,
    group,
    mutual_aid,
    order,
    vehicle,
    wallet,
    profile,
    pay,
    checkcode,
    bank_payment,
    mobile,
    person,
    quotation,
//---------------

//-------------------

  },
  plugins:  process.env.NODE_ENV !== 'production'
    ? [createLogger()]//, sessionState()
    : [],
});
 
