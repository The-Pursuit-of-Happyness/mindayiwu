<template>
    <div class="shoppingcart">        
        <p class="title">购物车({{cartnum}})</p>
        <div class="filltop"></div>
        <div class="topbox" v-for="shoppingcartitem of shoppingcartitems">
            <shoppingcartitem :shoppingcartitem = "shoppingcartitem"></shoppingcartitem>
            <!--<shoppingcartitem></shoppingcartitem>
            <shoppingcartitem></shoppingcartitem>
            <shoppingcartitem></shoppingcartitem>-->
        </div>
        <div v-if="shoppingcartitems.length==0">
            <img class="nodataimg"  src="../../assets/nodata.png">
            <p class="nodatap">暂无数据</p>
          </div>  
        <div class="fillbottom"></div>    
        <div class="bottombox" :style="{'top':(height-12) + 'px'}">
            <ul class="bottommenu">
                <li class="item" @click="backHome()">首页</li>
                <!--<li class="item">宝贝分类</li>
                <li class="item border">店铺简介</li>-->
                <li class="item">结算</li>
            </ul>
        </div>        
    </div>
</template>

<script>
    import {
        WEB_SERVER as port
    } from '../../config';
    export default {
        data() {
            return {
                cartnum: 5,
                height: window.clientHeight,
                page: 1,
                shoppingcartitems: [{
                    shopimg: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1882243725,3291657674&fm=23&gp=0.jpg',
                    shopname: '萌萌哒',
                    cartitems: [{
                        goodsimg: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4189529634,3151803078&fm=23&gp=0.jpg',
                        goodsname: '毛绒熊',
                        goodstype: '珊瑚绒 超柔',
                        price: '55.00',
                        number: 2,
                        id: 'abcd123',
                        shopping: '2'
                    }, {
                        goodsimg: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=841688564,2911971417&fm=23&gp=0.jpg',
                        goodsname: '8G U盘',
                        goodstype: '银白色 金属外壳',
                        price: '42.00',
                        number: 1,
                        id: 'abcd124',
                        shopping: '1'
                    }],
                }],
            }
        },
        created() {
            this.getDate();
        },
        methods: {
            getDate() {
                var _self = this;
                $.ajax({
                    headers: {
                        'X-Token': $.cookie("token"),
                    },
                    type: 'GET',
                    url: port + 'shopping/' + $.cookie("username") + '/getShopping/' + _self.page + '1',
                    success: function(data) {
                        console.log(data);
                        if (data.code == 200) {
                            _self.shoppingcartitems = [];
                            var items = _self.shoppingcartitems;
                            var ishave = false;
                            for (var datas of data.data.record_list) {
                                if (items.length > 0) {
                                    for (var i = 0; i < items.length; i++) {
                                        if (items[i].shopid != null && datas.barter_userid == items[i].shopid) {
                                            var obj = {};
                                            obj.goodsimg = datas.barter_showpictures;
                                            obj.goodsname = datas.barter_commodityname;
                                            obj.goodstype = datas.barter_descriptioninform;
                                            obj.price = datas.barter_sellingprice;
                                            obj.number = datas.barter_goodscount;
                                            obj.id = datas.barter_commoditynumber;
                                            obj.shoppingid = datas.barter_shoppingid;
                                            items[i].cartitems.push(obj);
                                            ishave = true;
                                        }
                                    }
                                    if (!ishave) {
                                        console.log(datas.barter_userid);
                                        _self.addData(_self.shoppingcartitems, datas);
                                    }
                                } else {
                                    _self.addData(_self.shoppingcartitems, datas);
                                }
                            }
                        } else {
                            alert(data.message);
                        }
                    },
                    error: function() {
                        console.log("error");
                    }
                });
            },
            backHome: function() {
                console.log("OrderInfo-tabid:0");
                var thiz = this;
                this.$store.dispatch("saveTab", 0).then(() => {
                    console.log("保存数据成功！！！");
                }).catch(err => {
                    Toast('保存数据失败');
                });
                this.$router.replace("/");
            },
            addData(target, datas) {
                var item = {};
                item.shopimg = datas.barter_userface;
                item.shopname = datas.barter_storename;
                item.shopid = datas.barter_userid;
                var obj = {};
                obj.goodsimg = datas.barter_showpictures;
                obj.goodsname = datas.barter_commodityname;
                obj.goodstype = datas.barter_descriptioninform;
                obj.price = datas.barter_sellingprice;
                obj.number = datas.barter_goodscount;
                obj.id = datas.barter_commoditynumber;
                obj.shoppingid = datas.barter_shoppingid;
                item.cartitems = [];
                item.cartitems.push(obj);
                target.push(item);
            }
        }
    }
</script>

<style scoped>
    .shoppingcart {
        width: 100%;
        max-width: 640px;
    }
    
    .filltop {
        height: 40px;
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
    
    .topbox {
        width: 100%;
        max-width: 640px;
        height: auto;
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
    
    .nodataimg {
        margin-top: 60px;
        margin-bottom: 40px;
        width: 180px;
        height: auto;
    }
    
    .nodatap {
        font-size: 16px;
    }
</style>