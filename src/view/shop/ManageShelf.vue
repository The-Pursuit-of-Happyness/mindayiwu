<template>
  <div class="manageshelf">
      <div class="filltop"></div>
        <div class="titlebox">
            <ul class="items">
                <li class="itemname" @click="selecttab(0)" v-bind:class="{ 'items-active': currenttab ==0 }">全部</li>
                <li class="itemname" @click="selecttab(1);" v-bind:class="{ 'items-active': currenttab ==1 }">已预订</li>
                <li class="itemname" @click="selecttab(2);" v-bind:class="{ 'items-active': currenttab ==2 }">待发货</li>
                <li class="itemname" @click="selecttab(3);" v-bind:class="{ 'items-active': currenttab ==3 }">待收货</li>
                <li class="itemname" @click="selecttab(4);" v-bind:class="{ 'items-active': currenttab ==4 }">已收货</li>
            </ul>
        </div>
        <div v-for = "orderitem of orderItems">
            <div v-if="orderitem.status == currenttab">
                <shelfitem :orderitem = "orderitem"></shelfitem>
                <smallspace></smallspace>
            </div>
            <div v-if="currenttab == '0'">
                <shelfitem :orderitem = "orderitem"></shelfitem>
                <smallspace></smallspace>
            </div>
        </div>
         <div class="bottombox" :style="{'top':(height-12) + 'px'}">
            <p class="backhome" @click="backHome()">返回货架</p>
        </div> 
        <div class="fillbottom"></div>
         <div v-if="isloading" id="loadingToast" style="opacity: 1;">
            <div class="weui-mask_transparent"></div>
            <div class="weui-toast">
                <i class="weui-loading weui-icon_toast"></i>
                <p class="weui-toast__content">数据加载中</p>
            </div>
        </div>
  </div>
</template>

<script>
    import {
        WEB_SERVER as port
    } from '../../config';
    export default {
        name: 'manageshelf',
        data() {
            return {
                height: window.clientHeight,
                isloading: false,
                currenttab: 0,
                currentpage: 1,
                orderItems: [],
            }
        },
        created() {
            this.getData();
            //this.getOrderInfo();
        },
        methods: {
            selecttab(tab) {
                if (this.currenttab != 0) this.istoload = true;
                this.currenttab = tab;
                this.status = this.currenttab == 0 ? 10 : this.currenttab;
                this.currentpage = 1;
                this.orderItems = [];
                this.getData();
            },
            backHome() {
                this.$router.push('ShopPage');
            },
            getOrderInfo() {
                var _self = this;
                $.ajax({
                    type: 'GET',
                    url: './static/json/orderitem.json',
                    dataType: 'json',
                    success: function(data) {
                        if (data.code == 200) {
                            _self.orderItems = data.data.orderItems;
                        }
                    },
                    error: function(xhr, type) {
                        _self.getOrderInfo();
                        console.log('Ajax error!');
                    }
                });
            },
            getData() {
                this.status = this.currenttab == 0 ? 10 : this.currenttab;
                var _self = this;
                $.ajax({
                    headers: {
                        'X-Token': $.cookie("token"),
                    },
                    //timeout: 1000,
                    type: 'GET',
                    url: port + 'order/' + $.cookie("username") + '/getOrderBySellerId/' + _self.currentpage + '/' + _self.status,
                    success: function(data) {
                        console.log(data);
                        if (data.code == 200) {
                            var datas = data.data.record_list;
                            for (var data of datas) {
                                var obj = {};
                                obj.goodsname = data.barter_commodityname;
                                obj.goodsinfo = data.barter_descriptioninform;
                                obj.number = data.barter_ordercount;
                                obj.orderid = data.barter_orderid;
                                obj.status = data.barter_orderstatus;
                                obj.goodsimg = data.barter_showpictures;
                                obj.shopname = data.barter_storename;
                                obj.price = data.barter_transactionprice / data.barter_ordercount;;
                                obj.shopicon = data.barter_userface;
                                _self.orderItems.push(obj);
                            }
                        } else if (data.code == 4) {
                            _self.istoload = false;
                        } else {
                            console.log(data.message);
                        }
                    },
                    error: function() {
                        _self.getOrderInfo();
                        console.log("error");
                    }
                });
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .orderpage {
        width: 100%;
        max-width: 640px;
        margin: 0 auto;
    }
    
    .filltop {
        width: 100%;
        max-width: 640px;
        height: 42px;
    }
    
    .titlebox {
        width: 100%;
        position: fixed;
        background: white;
        top: 0;
        z-index: 1;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
        overflow: hidden;
        border-bottom: medium none #ECEDED;
    }
    
    .items {
        height: 42px;
        color: #666;
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
    
    .items-active {
        color: #2ad2c9;
        height: 40px;
        border-bottom: solid 2px #2ad2c9;
    }
    
    .itemname {
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
        height: 42px;
        width: 20%;
        font-size: 16px;
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
        border-left: solid 1px #cacaca;
        border-right: solid 1px #cacaca;
    }
    
    .fillbottom {
        height: 60px;
        width: 100%;
        max-width: 640px;
    }
    
    .bottombox {
        height: 50px;
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
    
    .backhome {
        line-height: 50px;
        font-size: 18px;
    }
    
    .backhome:active {
        background: #2ad2c9;
        font-size: 20px;
        color: white;
    }
</style>