<!--订单组件 -->

<!--订单状态
1-待支付
2-待发货
3-待收货
4-待评价
5-交易完成
6-订单已删除
9-订单已取消
 -->
<template>
  <div class ="orderitem" v-if="isshow">
     <div class="topbox">
     <div class="shopbox">
        <img class="shopicon" :src="orderitem.shopicon">
        <p class="shopname">{{orderitem.shopname}}</p>
        <img class="nexticon" src="../../assets/next.png"> 
        </div>
        <p class="status">{{orderstate}}</p>
     </div>
     <div class ="contentbox" @click="seeDetails()">
        <div class="goodsbox">
            <img class="goodsimg" :src="orderitem.goodsimg">
            <div class="goodsinfobox">
                <p class="goodsname">{{orderitem.goodsname}}</p>
                <p class="goodsinfo">{{orderitem.goodsinfo}}</p>
            </div>
        </div>
        <div class="goodsnumbox">
            <p>价格：￥{{orderitem.price}}</p>
            <p>数量：x {{orderitem.number}}</p>
        </div>
     </div>
     <div class ="itembottombox">
        <p class="sumbox">共{{orderitem.number}}件商品 合计：￥{{totalprice}}</p>
        <div>
            <div class="operatebox" v-if="orderitem.status==1">
                <p class="button" @click="paynow()">立即支付</p>
                <p class="button" @click="cancleOrder">取消订单</p>
            </div>
            <div class="operatebox" v-if="orderitem.status==2">
                <p class="button" @click="tosend()">提醒发货</p>
                <p class="button" @click="cancleOrder">取消订单</p>
            </div>
            <div class="operatebox" v-if="orderitem.status==3">
                <p class="button" @click="surearrival()">确认收货</p>
                <p class="button" @click="cancleOrder">取消订单</p>
            </div>
            <div class="operatebox" v-if="orderitem.status==4">
                <p class="button" @click="deleteOrder()">删除订单</p>
                <p class="button" @click="evaluate()">评价</p>
            </div>
            <div class="operatebox" v-if="orderitem.status==5">
                <p class="button" @click="deleteOrder()">删除订单</p>
            </div>
            <div class="operatebox" v-if="orderitem.status==9">
                <p class="button" @click="deleteOrder()">删除订单</p>
            </div>
        </div>
     </div>
     <div class="weui-mask" v-if="iscancle"></div>
    <div class="weui-dialog weui-skin_android" v-if="iscancle">
        <div class="weui-dialog__bd">                
                确定取消订单?              
        </div>
        <div class="weui-dialog__ft">
            <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="cancleto()">确定</a>
            <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="iscancle = false;">取消</a>
        </div>
    </div>
     <div class="weui-mask" v-if="isdelete"></div>
    <div class="weui-dialog weui-skin_android" v-if="isdelete">
        <div class="weui-dialog__bd">                
                确定删除订单?              
        </div>
        <div class="weui-dialog__ft">
            <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="deleteto()">确定</a>
            <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="isdelete = false;">取消</a>
        </div>
    </div>
     <div class="weui-mask" v-if="isarrival"></div>
    <div class="weui-dialog weui-skin_android" v-if="isarrival">
        <div class="weui-dialog__bd">                
                确定收货?              
        </div>
        <div class="weui-dialog__ft">
            <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="arrivalto()">确定</a>
            <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="isarrival = false;">取消</a>
        </div>
    </div>
     <div class="weui-mask" v-if="ispay"></div>
    <div class="weui-dialog weui-skin_android" v-if="ispay">
        <div class="weui-dialog__bd">                
                确定支付订单?              
        </div>
        <div class="weui-dialog__ft">
            <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="payto()">确定</a>
            <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="ispay = false;">取消</a>
        </div>
    </div>
  </div>
</template>
<script>
    import {
        WEB_SERVER as port
    } from '../../config';
    export default ({
        props: ['orderitem'],
        data: function() {
            return {
                iscancle: false,
                isdelete: false,
                isshow: true,
                isarrival: false,
                ispay: false,
                wronmessage: '确定删除订单？',
                totalprice: '',
                orderstate: '',
            }
        },
        methods: {
            paynow() {
                this.ispay = true;
            },
            surearrival() {
                this.isarrival = true;
            },
            cancleOrder: function() {
                this.iscancle = true;
                console.log("取消订单");
            },
            deleteOrder: function() {
                this.isdelete = true;
                console.log("删除订单");
            },
            tosend() {
                alert('已提醒店家发货！');
            },
            cancleto: function() {
                this.iscancle = false;
                var _self = this;
                $.ajax({
                    headers: {
                        'X-Token': $.cookie("token"),
                    },
                    timeout: 1000,
                    type: 'GET',
                    url: port + 'order/' + _self.orderitem.orderid + '/deleteOrderById/9',
                    success: function(data) {
                        console.log(data);
                        if (data.code == 200) {
                            _self.orderstate = "已取消";
                            alert("取消订单成功！！");
                        } else {
                            console.log(data.message);
                        }
                    },
                    error: function() {
                        console.log("error");
                    }
                });
            },
            arrivalto() {
                this.isarrival = false;
                var _self = this;
                $.ajax({
                    headers: {
                        'X-Token': $.cookie("token"),
                    },
                    timeout: 1000,
                    type: 'GET',
                    url: port + 'order/' + _self.orderitem.orderid + '/deleteOrderById/4',
                    success: function(data) {
                        console.log(data);
                        if (data.code == 200) {
                            _self.orderstate = "待评价";
                            alert("收货成功！！");
                        } else {
                            console.log(data.message);
                        }
                    },
                    error: function() {
                        console.log("error");
                    }
                });
            },
            payto() {
                this.ispay = false;
                var _self = this;
                $.ajax({
                    headers: {
                        'X-Token': $.cookie("token"),
                    },
                    timeout: 1000,
                    type: 'GET',
                    url: port + 'order/' + _self.orderitem.orderid + '/deleteOrderById/2',
                    success: function(data) {
                        console.log(data);
                        if (data.code == 200) {
                            _self.orderstate = "待发货";
                            alert("支付成功！！");
                        } else {
                            console.log(data.message);
                        }
                    },
                    error: function() {
                        console.log("error");
                    }
                });
            },
            deleteto: function() {
                this.isdelete = false;
                var _self = this;
                $.ajax({
                    headers: {
                        'X-Token': $.cookie("token"),
                    },
                    timeout: 1000,
                    type: 'GET',
                    url: port + 'order/' + _self.orderitem.orderid + '/deleteById',
                    success: function(data) {
                        console.log(data);
                        if (data.code == 200) {
                            _self.isshow = false;
                            alert("删除订单成功！！");
                        } else {
                            console.log(data.message);
                        }
                    },
                    error: function() {
                        console.log("error");
                    }
                });
            },
            seeDetails: function() {
                var thiz = this;
                console.log("OrderItem-orderid:" + thiz.orderitem.orderid);
                var thiz = this;
                this.$store.dispatch("saveOrderId", thiz.orderitem.orderid).then(() => {
                    console.log("保存数据成功！！！");
                }).catch(err => {
                    Toast('保存数据失败');
                });
                this.$router.push('OrderInfo');
            },
            evaluate: function() {
                var thiz = this;
                console.log("OrderItem-orderid:" + thiz.orderitem.orderid);
                var thiz = this;
                this.$store.dispatch("saveOrderId", thiz.orderitem.orderid).then(() => {
                    console.log("保存数据成功！！！");
                }).catch(err => {
                    Toast('保存数据失败');
                });
                this.$router.push('Evaluate');
            }
        },
        created() {
            this.totalprice = parseFloat((this.orderitem.price * this.orderitem.number)).toFixed(2);
            //set order state
            switch (this.orderitem.status) {
                case 1:
                    this.orderstate = "待支付";
                    break;
                case 2:
                    this.orderstate = "待发货";
                    break;
                case 3:
                    this.orderstate = "待收货";
                    break;
                case 4:
                    this.orderstate = "待评价";
                    break;
                case 5:
                    this.orderstate = "交易完成";
                    break;
                case 9:
                    this.orderstate = "已取消";
            }
        },
        mounted: function() {},
    })
</script>
<style scoped>
    .orderitem {
        width: 100%;
        max-width: 640px;
        height: 212px;
        user-select: none;
        -webkit-user-select: none;
        overflow: hidden;
        position: relative;
    }
    
    .topbox {
        border-top: solid 1px #e5e5e5;
        height: 40px;
        width: 100%;
        max-width: 640px;
        display: flex;
        -webkit-box-align: center;
        /* android 2.1-3.0, ios 3.2-4.3 */
        -webkit-align-items: center;
        /* Chrome 21+ */
        -ms-flex-align: center;
        /* WP IE 10 */
        align-items: center;
        /* android 4.4 */
        justify-content: space-between;
        /* android 4.4 */
    }
    
    .shopbox {
        display: flex;
        -webkit-box-align: center;
        /* android 2.1-3.0, ios 3.2-4.3 */
        -webkit-align-items: center;
        /* Chrome 21+ */
        -ms-flex-align: center;
        /* WP IE 10 */
        align-items: center;
        /* android 4.4 */
    }
    
    .shopicon {
        margin-left: 15px;
        width: 30px;
        height: 30px;
    }
    
    .shopname {
        display: inline-block;
        font-size: 14px;
        margin-left: 10px;
        margin-right: 10px;
    }
    
    .nexticon {
        width: 8px;
        height: auto;
    }
    
    .status {
        font-size: 14px;
        color: #2ad2c9;
        float: right;
        margin-right: 15px;
    }
    
    .contentbox {
        width: 100%;
        max-width: 640px;
        height: 100px;
        background: #fafafa;
        display: flex;
        justify-content: space-between;
        /* android 4.4 */
    }
    
    .goodsbox {
        background: #fafafa;
        text-align: left;
        padding-top: 10px;
        display: flex;
    }
    
    .goodsimg {
        width: 80px;
        height: auto;
        min-height: 60px;
        max-height: 80px;
        margin-left: 15px;
    }
    
    .goodsinfobox {
        margin-left: 5px;
        width: 60%;
    }
    
    .goodsinfo {
        color: gray;
        font-size: 12px;
    }
    
    .goodsname {
        font-size: 16px;
    }
    
    .itembottombox {
        width: 100%;
        max-width: 640px;
        height: 50px;
    }
    
    .goodsnumbox {
        font-weight: bold;
        font-size: 12px;
        padding-top: 40px;
        text-align: right;
        margin-top: 5px;
        margin-right: 15px;
    }
    
    .sumbox {
        display: block;
        width: 100%;
        max-width: 640px;
        text-align: right;
        padding: 5px;
        padding-right: 15px;
        border-bottom: solid 1px #e5e5e5;
    }
    
    .operatebox {
        height: 40px;
        width: 100%;
        max-width: 640px;
        display: flex;
        -webkit-box-align: center;
        /* android 2.1-3.0, ios 3.2-4.3 */
        -webkit-align-items: center;
        /* Chrome 21+ */
        -ms-flex-align: center;
        /* WP IE 10 */
        align-items: center;
        /* android 4.4 */
        justify-content: flex-end;
        /* android 4.4 */
    }
    
    .button {
        text-align: center;
        line-height: 30px;
        width: 80px;
        height: 30px;
        border-radius: 15px;
        border: solid 1px #e5e5e5;
        margin-right: 15px;
    }
</style>