<template>
  <div class="orderpage" v-scroll="getMoreData">
        <div class="filltop"></div>
        <div class="titlebox">
            <ul class="items">
                <li class="itemname" @click="selecttab(0)" v-bind:class="{ 'items-active': currenttab ==0 }">全部</li>
                <li class="itemname" @click="selecttab(1)" v-bind:class="{ 'items-active': currenttab ==1 }">待支付</li>
                <li class="itemname" @click="selecttab(2)" v-bind:class="{ 'items-active': currenttab ==2 }">待发货</li>
                <li class="itemname" @click="selecttab(3)" v-bind:class="{ 'items-active': currenttab ==3 }">待收货</li>
                <li class="itemname" @click="selecttab(4)" v-bind:class="{ 'items-active': currenttab ==4 }">待评价</li>
            </ul>
        </div>
        <space></space>
        <div v-for = "orderitem of orderItems">
            <div v-if="orderitem.status == currenttab">
                <orderitem :orderitem = "orderitem"></orderitem>
                <smallspace></smallspace>
            </div>
            <div v-if="currenttab == '0'">
                <orderitem :orderitem = "orderitem"></orderitem>
                <smallspace></smallspace>
            </div>
        </div>
        <div class="bottombox"></div>
  </div>
</template>

<script>
    import {
        WEB_SERVER as port
    } from '../config';
    export default {
        name: 'orderpage',
        data() {
            return {
                status: 0,
                currenttab: 0,
                orderItems: [],
                currentpage: 1,
                istoload: true,
            }
        },
        created() {
            if ($.cookie("token")) {
                console.log("已经登录");
            } else {
                console.log("未登录");
            }
            this.getDate(this.currenttab, this.currentpage);
            //this.getOrderInfo();
        },
        directives: { // 自定义指令
            scroll: {
                bind: function(el, binding) {
                    window.addEventListener('scroll', function() {
                        if (document.body.scrollTop + window.innerHeight >= el.clientHeight) {
                            var fnc = binding.value;
                            fnc();
                        }
                    })
                }
            }
        },
        methods: {
            getMoreData: function() {
                if (this.istoload) {
                    console.log("获取数据！！！");
                    this.currentpage++;
                    this.getDate();
                }
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
            selecttab(tab) {
                if (this.currenttab != 0) this.istoload = true;
                this.currenttab = tab;
                this.status = this.currenttab == 0 ? 10 : this.currenttab;
                this.currentpage = 1;
                this.orderItems = [];
                this.getDate();
            },
            getDate() {
                this.status = this.currenttab == 0 ? 10 : this.currenttab;
                var _self = this;
                $.ajax({
                    headers: {
                        'X-Token': $.cookie("token"),
                    },
                    //timeout: 1000,
                    type: 'GET',
                    url: port + 'order/' + $.cookie("username") + '/getOrderById/' + _self.currentpage + '/' + _self.status,
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
        height: 32px;
    }
    
    .titlebox {
        background: #ccc;
        opacity: 0.9;
        width: 100%;
        max-width: 640px;
        position: fixed;
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
        height: 60px;
        width: 100%;
        max-width: 640px;
    }
</style>