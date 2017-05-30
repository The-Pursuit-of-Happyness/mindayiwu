import * as types from '../mutation-types';

// initial state
const state = {
    //存储当前商品
    currentgoodsid: null,

    //存储当前类型
    currenttype: null,

    //存储当前店铺id
    currentshopid: null,

    //存储当前菜单页
    currenttab: null,

    //当前订单
    currentorderid: null,

    // 
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
    },

    [types.CURRENT_TYPE](state, { typeid }) {
        state.currenttype = typeid;
        console.log("modules--typeid" + typeid)
    },

    [types.CURRENT_SHOP_ID](state, { shopid }) {
        state.currentshopid = shopid;
        console.log("modules--typeid" + shopid)
    },

    [types.CURRENT_TAB](state, { tabid }) {
        state.currenttab = tabid;
        console.log("modules--tabid" + tabid)
    },

    [types.CURRENT_ORDER_ID](state, { orderid }) {
        state.currentorderid = orderid;
        console.log("modules--orderid" + orderid)
    },
};

export default {
    state,
    mutations
};