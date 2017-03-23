import * as types from '../mutation-types';

const state = {
  ctx: {
    wxuser: null,
  }
}

const mutations = {
  [types.RECEIVE_COOKIE] (state, { openid }) {
    state.ctx.wxuser = openid;
    console.log("openid"+openid)
  }
};

export default {
  state,
  mutations
};
