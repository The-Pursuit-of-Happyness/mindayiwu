import * as types from '../mutation-types';

// initial state
const state = {
    getOrder: null,
    getOrderStatus: null,
    getOrders: null,
    getOrdersStatus: null,
    getPlanOrderByVehicle: null,
    getPlanOrderByVehicleStatus: null,
    getDriverForVehicle: null,
    getDriverForVehicleStatus: null,
    getOrdersByOpenid: null,
    getOrdersByOpenidStatus: null,
    placeAnPlanOrder: null,
    placeAnPlanOrderStatus: null,
    updateOrderState: null,
    updateOrderStateStatus: null,
    uploadImage: null, //证件照上传
    uploadImageStatus: null,    
    ValidOrder: null,
    ValidOrderStatus: null,

    oid: null, //存储订单的oid
    setVehicleId: null, //存储选择的车辆的vid
    //保存驾驶人数量
    driver_num: 0,
    //获取订单状态 planOrderInfo
    planOrderInfo: null,
    planOrderInfoStatus: null,
    //保存司机单的价格
    diverPrice: null,
    checkCode: 0,
    //保存司机未支付的订单是否还在有效期中
    paymentStatus: true,
    preparePayVid: null,
    preparePayQid: null,
    // saveOrderByVid: null, //保存通过vid获取的订单信息
};

// mutations
const mutations = {

    [types.GET_ORDER_REQUEST](state) {
        state.getOrderStatus = 'loading';
    },
    [types.GET_ORDER_SUCCESS](state, { order }) {
        state.getOrder = order;
        state.getOrderStatus = 'successful';
    },
    [types.GET_ORDER_FAILURE](state) {
        state.getOrderStatus = 'failed';
    },
    //得到当前用户的订单列表
    [types.GET_ORDERS_REQUEST](state) {
        state.getOrdersStatus = 'loading';
    },
    [types.GET_ORDERS_SUCCESS](state, { order }) {
        state.getOrders = order;
        state.getOrdersStatus = 'successful';
    },
    [types.GET_ORDERS_FAILURE](state) {
        state.getOrdersStatus = 'failed';
    },
    //根据 vid 获取订单已生效的车的信息
    [types.GET_ORDERS_VID_REQUEST](state) {
        state.getPlanOrderByVehicleStatus = 'loading';
    },
    [types.GET_ORDERS_VID_SUCCESS](state, { order }) {
        state.getPlanOrderByVehicle = order;
        state.getPlanOrderByVehicleStatus = 'successful';
    },
    [types.GET_ORDERS_VID_FAILURE](state) {
        state.getPlanOrderByVehicleStatus = 'failed';
    },

    //获取对应车的驾驶人信息
    [types.GET_DRIVER_FOR_VEHICLE_REQUEST](state) {
        state.getDriverForVehicleStatus = 'loading';
    },
    [types.GET_DRIVER_FOR_VEHICLE_SUCCESS](state, { order }) {
        state.getDriverForVehicle = order;
        state.getDriverForVehicleStatus = 'successful';
    },
    [types.GET_DRIVER_FOR_VEHICLE_FAILURE](state) {
        state.getDriverForVehicleStatus = 'failed';
    },

    //得到用户的订单列表 通过openid
    [types.GET_ORDERS_OPENID_REQUEST](state) {
        state.getOrdersByOpenidStatus = 'loading';
    },
    [types.GET_ORDERS_OPENID_SUCCESS](state, { order }) {
        state.getOrdersByOpenid = order;
        state.getOrdersByOpenidStatus = 'successful';
    },
    [types.GET_ORDERS_OPENID_FAILURE](state) {
        state.getOrdersByOpenidStatus = 'failed';
    },

    [types.ANPLAN_ORDER_REQUEST](state) {
        state.placeAnPlanOrderStatus = 'loading';
    },
    [types.ANPLAN_ORDER_SUCCESS](state, { order }) {
        state.placeAnPlanOrder = order;
        state.placeAnPlanOrderStatus = 'successful';
        state.checkCode = order.code;   //?????
    },
    [types.ANPLAN_ORDER_FAILURE](state) {
        state.placeAnPlanOrderStatus = 'failed';
    },

    [types.UP_DATE_ORDER_STATE_REQUEST](state) {
        state.updateOrderStateStatus = 'loading';
    },
    [types.UP_DATE_ORDER_STATE_SUCCESS](state, { order }) {
        state.updateOrderState = order;
        state.updateOrderStateStatus = 'successful';
    },
    [types.UP_DATE_ORDER_STATE_FAILURE](state) {
        state.updateOrderStateStatus = 'failed';
    },

    //获取订单状态 planOrderInfo
    [types.GET_PLAN_ORDER_BY_QID_REQUEST](state) {
        state.planOrderInfoStatus = 'loading';
    },
    [types.GET_PLAN_ORDER_BY_QID_SUCCESS](state, { order }) {
        state.planOrderInfo = order;
        state.planOrderInfoStatus = "successful";
    },
    [types.GET_PLAN_ORDER_BY_QID_FAILURE](state) {
        state.planOrderInfoStatus = 'failed';
    },
    //存储用户选择的计划的id
    [types.SET_OID](state, { oid }) {
        state.oid = oid;
    },
    //设置用户点击的车辆的id
    [types.SET_VEHICLE_ID](state, { id }) {
        state.setVehicleId = id;
    },
    //存储驾驶人的数量
    [types.SET_DRIVER_NUMBER](state, { number }) {
        state.driver_num = number;
    },
    //保存司机单的价格
    [types.SET_DRIVER_PRICE](state, { price }) {
        state.diverPrice = price;
    },
    //保存司机未支付的订单是否还在有效期中
    [types.SET_PAYMENT_STATUS](state, { status }) {
        state.paymentStatus = status;
    },

    [types.SET_VIDQID_REQUEST](state, { vid, qid }) {
        state.preparePayVid = vid;
        state.preparePayQid = qid;
        console.log('modules this.state.prepareVid + Qid: ' + vid, qid);
    },

    //上传图片
    [types.UPDATE_DRIVING_VIEW_REQUEST](state) {
        state.uploadImageStatus = 'loading';
    },
    [types.UPDATE_DRIVING_VIEW_SUCCESS](state, { order }) {
        state.uploadImage = order;
        state.uploadImageStatus = 'successful';
    },
    [types.UPDATE_DRIVING_VIEW_FAILURE](state) {
        state.uploadImageStatus = 'failed';
    },
    //判断一个VIN码是否有订单 ValidOrder
    [types.VALID_ORDER_REQUEST](state) {
        state.ValidOrderStatus = 'loading';
    },
    [types.VALID_ORDER_SUCCESS](state, { order }) {
        state.ValidOrder = order;
        state.ValidOrderStatus = "successful";
        console.log("modules order模块 ==> ValidOrder: ");
        console.log(order);
    },
    [types.VALID_ORDER_FAILURE](state) {
        state.ValidOrderStatus = 'failed';
    },
};

export default {
    state,
    mutations
};