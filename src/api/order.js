import Vue from 'vue';

export default {
    //获取订单详情 getOrder
    //重命名 getOrder 方法为 getPlanOrder
    getOrder(ctx, order_id, scb, fcb) {
        Vue.rpc.call(ctx, "order", "getPlanOrder", order_id).then(scb, fcb);
    },
    //重命名 getOrders 方法为 getPlanOrdersByUser
    getOrders(ctx, scb, fcb) {
        Vue.rpc.call(ctx, "order", "getPlanOrdersByUser").then(scb, fcb);
    },
    //根据vid获取已生效订单
    //重命名 getPlanOrderByVehicle 方法为 getPlanOrdersByVehicle
    getPlanOrderByVehicle(ctx, vid, scb, fcb) {
        Vue.rpc.call(ctx, "order", "getPlanOrdersByVehicle", vid).then(scb, fcb);
    },

    //重命名 placeAnPlanOrder 方法为 createPlanOrder
    createPlanOrder(ctx, qid, vid, owner, insured, plans, expect_at, third_plan_selected, scb, fcb) {
        Vue.rpc.call(ctx, "order", "createPlanOrder", qid, vid, owner, insured, plans, expect_at, third_plan_selected).then(scb, fcb);
        console.log('------createPlanOrder api------' + JSON.stringify(ctx) + ',' + qid + ',' + owner + ',' + insured + ',' + JSON.stringify(plans)  + ',' + expect_at + ',' + third_plan_selected);
    },
    
    //获取订单状态 getPlanOrderByQid
    getPlanOrderByQid(ctx, qid, scb, fcb) {
        Vue.rpc.call(ctx, "order", "getPlanOrderByQid", qid).then(scb, fcb);
    },

    //判断一个VIN码是否有订单\
    //重命名 ValidOrder 方法为 getOrdersByVid
    ValidOrder(ctx, vid, scb, fcb) {
        Vue.rpc.call(ctx, "order", "getOrdersByVid", vid).then(scb, fcb);
        console.log("call validOrder api");
    },
    //上传证件照 uploadDriverImages
    updateDrivingView(ctx, oid, driving_frontal_view, driving_rear_view,owner_id, identity_frontal_view, identity_rear_view, licenseSet, scb, fcb) {
        Vue.rpc.call(ctx, "order", "updateDrivingView", oid, driving_frontal_view, driving_rear_view, owner_id, identity_frontal_view, identity_rear_view, licenseSet).then(scb, fcb);
        console.log("updateDrivingView api" + oid, driving_frontal_view, driving_rear_view, owner_id, identity_frontal_view, identity_rear_view, licenseSet);
    },
};