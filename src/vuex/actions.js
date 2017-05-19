// import quotation_api from '../api/quotation';
//-------------------- 
//-----------------------
import * as types from './mutation-types';

//saveGoods
// export const saveGoods = ({ commit, state }, goodsid) => {
//     commit(types.GET_CURRENT_GOODS_SUCCESS, { gid: goodsid });
// };

export const saveGoodsId = ({ commit, state }, goodsid) => {
    return new Promise((resolve, reject) => {
        console.log("action:" + goodsid);
        commit(types.CURRENT_GOODS_ID, { goodsid });
    });
};



//cookie
export const fetchCookie = ({ commit, state }, cookies) => {
    if (!state.cookie.ctx.wxuser) {
        for (let cookie of cookies.split(";")) {
            let pair = cookie.split("=");
            if (pair[0].trim() === "wxuser") {
                commit(types.RECEIVE_COOKIE, { openid: pair[1].trim() });
                break;
            };
        }
    }
};


//plan
/*
export const getJoinedPlans = ({ commit, state }) => {
    return new Promise((resolve, reject) => {
        commit(types.JOINED_PLANS_REQUEST);
        plan_api.getJoinedPlans(state.cookie.ctx,
            (plan) => {
                commit(types.JOINED_PLANS_SUCCESS, { plan });
                resolve()
            },
            (err) => {
                commit(types.JOINED_PLANS_FAILURE);
                reject(err)
            });
    })
};

*/