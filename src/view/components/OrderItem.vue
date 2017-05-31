<!--订单组件 -->

<!--订单状态
1-待支付
2-待发货
3-待收货
4-待评价
5-交易完成
6-订单已删除
 -->
<template>
  <div class ="orderitem">
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
                <p class="button">立即支付</p>
                <p class="button">取消订单</p>
            </div>
            <div class="operatebox" v-if="orderitem.status==2">
                <p class="button">提醒发货</p>
                <p class="button">取消订单</p>
            </div>
            <div class="operatebox" v-if="orderitem.status==3">
                <p class="button">确认收货</p>
                <p class="button">取消订单</p>
            </div>
            <div class="operatebox" v-if="orderitem.status==4">
                <p class="button">删除订单</p>
                <p class="button" @click="evaluate()">评价</p>
            </div>
            <div class="operatebox" v-if="orderitem.status==5">
                <p class="button">删除订单</p>
            </div>
        </div>
     </div>
  </div>
</template>
<script>
    export default ({
        props: ['orderitem'],
        data: function() {
            return {
                totalprice: '',
                orderstate: '',
            }
        },
        methods: {
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
                this.$router.push('Evaluate');
            }
        },
        created() {
            this.totalprice = parseFloat((this.orderitem.price * this.orderitem.number)).toFixed(2);
            //set order state
            switch (this.orderitem.status) {
                case "1":
                    this.orderstate = "待支付";
                    break;
                case "2":
                    this.orderstate = "待发货";
                    break;
                case "3":
                    this.orderstate = "待收货";
                    break;
                case "4":
                    this.orderstate = "待评价";
                    break;
                case "5":
                    this.orderstate = "交易完成";
                    break;
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