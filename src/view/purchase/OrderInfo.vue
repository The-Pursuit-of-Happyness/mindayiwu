<template>
    <div id="orderinfo">
        <p class="title">订单详情</p>
      <div class="filltop"></div>
      <p class="status">{{orderstate}}</p>
      <div class="addressbox">
          <div class="oneitem">
               <label>收货人：</label><p>小黑</p>
          </div>
          <div class="oneitem">
               <label>收货地址：</label><p>大连市大连民族大学金石滩校区</p>
          </div>
      </div>
      <space></space>
      <div class="topbox">
        <div class="shopbox">
            <img class="shopicon" :src="shopicon">
            <p class="shopname">{{shopname}}</p>
        </div>
     </div>
     <div class ="contentbox">
        <div class="goodsbox">
            <img class="goodsimg" :src="goodsimg">
            <div class="goodsinfobox">
                <p class="goodsname">{{goodsname}}</p>
                <p class="goodsinfo">{{goodsinfo}}</p>
            </div>
        </div>
        <div class="goodsnumbox">
            <p>价格：￥{{price}}</p>
            <p>数量：x {{number}}</p>
        </div>
     </div>
     <div class ="itembottombox">
        <p class="sumbox">共{{number}}件商品 合计：￥{{totalprice}}</p>
        <div>
            <div class="operatebox" v-if="status==1">
                <p class="button">立即支付</p>
                <p class="button">取消订单</p>
            </div>
            <div class="operatebox" v-if="status==2">
                <p class="button">提醒发货</p>
                <p class="button">取消订单</p>
            </div>
            <div class="operatebox" v-if="status==3">
                <p class="button">确认收货</p>
                <p class="button">取消订单</p>
            </div>
            <div class="operatebox" v-if="status==4">
                <p class="button">删除订单</p>
                <p class="button">评价</p>
            </div>
            <div class="operatebox" v-if="status==5">
                <p class="button">删除订单</p>
            </div>
        </div>
      </div>
      <space></space>
      <div class="orderbox">
          <div class="oneitem">
              <label>订单编号:</label><p>96759</p>
          </div>
          <div class="oneitem">
              <label>创建时间:</label><p>2017-5-20</p>
          </div>
      </div>
      <div class="bottombox" :style="{'top':(height-12) + 'px'}">
            <ul class="bottommenu">
                <!--<li class="item" >首页</li>-->
                <li class="item border" @click="backHome()">返回首页</li>
                <li class="item" @click="backOrder">返回订单</li>
            </ul>
        </div>
        
        <div class="fillbottom"></div>
    </div>
</template>

<script>
    import shopicon from '../../assets/shopicon.jpg';
    import goodsimg from '../../assets/goods1.jpg';
    import {
        mapGetters
    } from 'vuex';
    export default {
        data() {
            return {
                height: window.clientHeight,
                shopicon: shopicon,
                goodsimg: goodsimg,
                shopname: '小黑家的铺子',
                status: "4",
                orderstate: '',
                goodsname: '五彩签字笔',
                goodsinfo: '一款实用而又精美的签字笔',
                price: '12.50',
                number: 5,
                totalprice: '52.50',
            }
        },
        computed: mapGetters({
            currentorderid: 'currentorderid',
        }),
        created() {
            console.log(this.currentorderid);
            switch (this.status) {
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
        methods: {
            backOrder: function() {
                console.log("OrderInfo-tabid:2");
                var thiz = this;
                this.$store.dispatch("saveTab", 2).then(() => {
                    console.log("保存数据成功！！！");
                }).catch(err => {
                    Toast('保存数据失败');
                });
                this.$router.push('/');
            },
            backHome: function() {
                this.$router.push('/');
            }
        },
    }
</script>

<style scoped>
    #orderinfo {
        width: 100%;
        max-width: 640px;
    }
    
    .title {
        height: 40px;
        width: 100%;
        max-width: 640px;
        font-size: 16px;
        background: #2ad2c9;
        border-bottom: medium none #ECEDED;
        position: fixed;
        z-index: 1;
        display: flex;
        -webkit-box-align: center;
        /* android 2.1-3.0, ios 3.2-4.3 */
        -webkit-align-items: center;
        /* Chrome 21+ */
        -ms-flex-align: center;
        /* WP IE 10 */
        align-items: center;
        /* android 4.4 */
        justify-content: center;
        /* android 4.4 */
    }
    
    .filltop {
        height: 40px;
        width: 100%;
        max-width: 640px;
    }
    
    .addressbox {
        border-top: solid 1px #ccc;
        padding-top: 10px;
        padding-left: 15px;
        margin-bottom: 10px;
    }
    
    .oneitem {
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        justify-content: flex-start;
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
    
    .status {
        line-height: 50px;
        font-size: 20px;
        color: #2ad2c9;
        text-align: left;
        margin-left: 15px;
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
        height: 70px;
        clear: both;
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
        border-bottom: solid 1px #ccc;
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
    
    .orderbox {
        padding-left: 15px;
        font-size: 14px;
        margin-top: 10px;
    }
    
    .bottombox {
        z-index: 1;
        height: 60px;
        width: 100%;
        max-width: 640px;
        background: white;
        position: fixed;
        bottom: 0;
        overflow: hidden;
        border-top: medium none #ECEDED;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
        z-index: 10;
    }
    
    .bottommenu {
        height: 60px;
        margin-left: 15px;
        margin-right: 15px;
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
    
    .item {
        width: 33%;
        font-size: 16px;
        display: flex;
        -webkit-box-align: center;
        /* android 2.1-3.0, ios 3.2-4.3 */
        -webkit-align-items: center;
        /* Chrome 21+ */
        -ms-flex-align: center;
        /* WP IE 10 */
        align-items: center;
        /* android 4.4 */
        justify-content: center;
        /* android 4.4 */
    }
    
    .border {
        width: 40%;
        border-right: solid 1px #cacaca;
    }
    
    .fillbottom {
        height: 60px;
        width: 100%;
    }
</style>