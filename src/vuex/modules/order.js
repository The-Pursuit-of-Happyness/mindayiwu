import * as types from '../mutation-types';

// initial state
const state = {
    currentgoodsid: null,
    // //存储当前商品
    // getCurrentGoods: null,
    // getCurrentGoodsStatus: null,
};

// mutations
const mutations = {
    // //存储当前商品
    // [types.GET_CURRENT_GOODS_REQUEST](state) {
    //     state.getCurrentGoods = 'loading';
    // },
    // [types.GET_CURRENT_GOODS_SUCCESS](state, { goodsid }) {
    //     state.getCurrentGoods = goodsid;
    //     state.getCurrentGoodsStatus = 'successful';
    // },
    // [types.GET_CURRENT_GOODS_FAILURE](state) {
    //     state.getCurrentGoodsStatus = 'failed';
    // },

    [types.CURRENT_GOODS_ID](state, { goodsid }) {
        state.currentgoodsid = goodsid;
        console.log("modules--goodid" + goodsid)
    }
};

export default {
    state,
    mutations
};