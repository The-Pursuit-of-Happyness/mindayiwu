<template>
    <div class="shoppage">       
        <div class="topbox">
             <div class="shopbox">          
                <img class="shopicon" src="../../assets/head.jpg">
                <p class="shopname">开心就好的小店</p>
            </div>
        </div>
        <div class="goodsbox" v-for="goodsitem of goodsitems">
            <shopgoodsitem :goodsitem = "goodsitem"></shopgoodsitem>
            <!--<shopgoodsitem></shopgoodsitem>
            <shopgoodsitem></shopgoodsitem>
            <shopgoodsitem></shopgoodsitem>
            <shopgoodsitem></shopgoodsitem>
            <shopgoodsitem></shopgoodsitem>
            <shopgoodsitem></shopgoodsitem>
            <shopgoodsitem></shopgoodsitem>-->
        </div>
        <div class="bottombox" :style="{'top':(height-12) + 'px'}">
            <ul class="bottommenu">
                <li class="item" @click="backHome()">首页</li>
                <!--<li class="item">宝贝分类</li>
                <li class="item border">店铺简介</li>-->
                <li class="item">联系卖家</li>
            </ul>
        </div>
        <div class="fillbottom"></div>
    </div>
</template>

<script>
    import {
        WEB_SERVER as port
    } from '../../config';
    import {
        mapGetters
    } from 'vuex';
    export default {
        data() {
            return {
                height: window.clientHeight,
                goodsitems: [],
                page: 0,
            }
        },
        created() {
            this.initData();
        },
        computed: mapGetters({
            currentshopid: 'currentshopid',
        }),
        methods: {
            initData: function() {
                console.log(this.currentshopid);
                var _self = this;
                $.ajax({
                    type: 'GET',
                    url: port + 'goods/' + _self.currentshopid + '/personStoreList/' + _self.page,
                    success: function(data) {
                        console.log(data);
                        if (data.code == 200) {
                            console.log("success");
                            for (data of data.data.record_list) {
                                var obj = {};
                                obj.name = data.barter_commodityname;
                                obj.price = data.barter_sellingprice;
                                obj.img = data.barter_showpictures;
                                obj.id = data.barter_commoditynumber;
                                _self.goodsitems.push(obj);
                            }
                        } else {
                            alert(data.message);
                        }
                    }
                });
            },
            backHome: function() {
                this.$router.replace("/");
            }
        }
    }
</script>

<style scoped>
    .shoppage {
        width: 100%;
        max-width: 640px;
    }
    
    .topbox {
        width: 100%;
        height: 60px;
    }
    
    .shopbox {
        width: 100%;
        max-width: 640px;
        background: #ccc;
        opacity: 0.9;
        position: fixed;
        z-index: 1;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
        height: 60px;
        display: flex;
        -webkit-box-align: center;
        /* android 2.1-3.0, ios 3.2-4.3 */
        -webkit-align-items: center;
        /* Chrome 21+ */
        -ms-flex-align: center;
        /* WP IE 10 */
        align-items: center;
        /* android 4.4 */
        justify-content: flex-start;
        /* android 4.4 */
        overflow: hidden;
        border-bottom: medium none #ECEDED;
    }
    
    .shopicon {
        margin-left: 15px;
        width: 40px;
        height: 40px;
    }
    
    .shopname {
        margin-left: 15px;
        font-size: 16px;
        font-weight: bold;
    }
    
    .goodsbox {
        background: #f1f1f1;
        /*-webkit-column-count: 2;
        -moz-column-count: 2;
        column-count: 2;
        /*列数
        column-gap: 5px;*/
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
        width: 50%;
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
    }
</style>