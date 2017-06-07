<template>   
  <div class="productdetailspage">
      <div class="swiper-container">
            <div class="swiper-wrapper" > 
                <div class="swiper-slide" v-for="icon of photos"><img class="productimage" :src="icon"></div>
                    <!--<div class="swiper-wrapper" v-else>
                        <div class="swiper-slide"><img class="productimage" src="../../assets/goods1.jpg"></div>
                        <div class="swiper-slide"><img class="productimage" src="../../assets/goods2.jpg"></div>
                        <div class="swiper-slide"><img class="productimage" src="../../assets/goods3.jpg"></div>
                        <div class="swiper-slide"><img class="productimage" src="../../assets/goods4.png"></div>
                    </div>-->
            </div>
            <!-- 分页器 -->
            <div class="swiper-pagination"></div>
        </div>
        <!--
        <div>
            <img class="productimage" src="../../assets/goods3.jpg">
        </div>
        -->
        <p class="name">{{goodsname}}</p>
        <div class="pricebox">
            <p class="price">$ {{price}}</p>
            <p class="address">地址：{{address}}</p>
            <P class="number">共 {{number}}件</P>
        </div>
        <space></space>
        <p class="titlebox">评价</p>
        <div v-for="item of evaluateitems">
            <evaluate :evaluateitem=item></evaluate>            
        </div>
        <p v-if="evaluateitems.length==0">暂无评价</p>
        <space></space>
         <p class="titlebox">留言</p>
         <div v-for="item of leaveMessageitems">
            <leavemessageitem :messageitem=item></leavemessageitem>
        </div>
        <p v-if="leaveMessageitems.length==0">暂无留言</p>
        <space></space>
        <p class="titlebox">详情</p>
        <div class="detialbox">           
            <p class="detialmessage">{{goodsinfo}}</p>
            <div v-for="img of photos">
                <img class="detialimg" :src="img">
            </div>
        </div>
        <space></space>
        <p class="titlebox">店家信息</p>
        <div class="shop">
            <div class="shopbox">
                <img class="shopicon" :src="shopicon">
                <p class="shopname">{{shopname}}</p>
            </div>
            <p class="left">全部物品：5</p>
            <p class="right">已售物品：2</p>
            <p class="left">待售物品：3</p>
            <p class="right">信用评分:{{shopstar}}分</p>
            <p class="tel">联系电话:{{shopphone}}</p>
            <p class="tel">地址:{{shopaddress}}</p>            
        </div>
        <div class="footer" :style="{'top':(height-12) + 'px'}">
            <div class="backhomebox" @click="backHome">            
                <div class="backhome" ></div>
                <p>首页</p> 
            </div>
            <div @click="leaveMessage()">
                <div class="note"></div>
                <p>留言</p>
            </div>
            <div @click="saveGoods()">
                <div class="save"></div>
                <p>收藏</p>
            </div>
             <div @click="enterShop()">
                <div class="entershop"></div>
                <p>店铺</p>
            </div>
            <p class="buy" @click="charge">立即购买</p>
        </div>
        <div class="bottombox"></div>
  </div>
</template>

<script>
    import goods1 from '../../assets/goods1.jpg';
    import goods2 from '../../assets/goods2.jpg';
    import goods3 from '../../assets/goods3.jpg';
    import goods4 from '../../assets/goods4.png';
    import {
        WEB_SERVER as port
    } from '../../config';
    import {
        mapGetters
    } from 'vuex';
    import shopicon from '../../assets/shopicon.jpg'
    export default {
        name: 'productdetailspage',
        data() {
            return {
                goodsname: '精品收纳箱',
                price: 3.50,
                address: '金石滩校区',
                number: '2',
                photos: [],
                second: '九成新',
                currentpage: 0,
                height: window.clientHeight,
                goodsid: '',
                shopid: 'abcdefg123456',
                goodsinfo: '这是一款不错的签字笔，来自的德国的先进工艺生产。',
                shopstar: '5',
                shopicon: shopicon,
                shopname: '开心就好家的店铺',
                shopphone: '15640928579',
                shopaddress: '金石滩校区',
                evaluateitems: [{
                    name: '王五',
                    message: '一次不错的购物，还行的',
                    userimg: shopicon,
                    createtime: '2017-5-20',
                    goodsimg: goods1,
                    sonevaluates: [{
                        name: '小王',
                        message: '确定不是坏的？？',
                    }],
                }],
                leaveMessageitems: [{
                    name: '张三',
                    message: '可以交换不?',
                    sonmessage: [{
                        name: '王五',
                        message: '怎么可能啊?',
                    }, {
                        name: '小正',
                        message: '同问?',
                    }],
                }, {
                    name: '李四',
                    message: '新旧程度如何啊?',
                    sonmessage: [{
                        name: '王五',
                        message: '怎么可能啊?',
                    }, {
                        name: '小正',
                        message: '同问?',
                    }],
                }],
            }
        },
        computed: mapGetters({
            currentgoodsid: 'currentgoodsid',
        }),
        created() {
            console.log("商品详情页面：" + this.currentgoodsid);
            this.goodsid = this.currentgoodsid;
            this.getGoodsInfo();
            this.getLeaveMessage();
            this.getEvalute();
        },
        methods: {
            getEvalute() {
                var _self = this;
                $.ajax({
                    type: 'GET',
                    url: port + 'message/' + _self.goodsid + "/goodsId/1/1",
                    dataType: 'json',
                    success: function(data) {
                        if (data.code == 200) {
                            _self.evaluateitems = [];
                            var datas = data.data.record_list;
                            for (data of datas) {
                                var obj = {};
                                obj.name = data.barter_messagename;
                                obj.message = data.barter_message;
                                obj.createtime = data.barter_messagetime;
                                obj.goodsimg = data.barter_messagephoto;
                                _self.evaluateitems.push(obj);
                            }
                            console.log(data);
                        }
                    },
                    error: function(xhr, type) {
                        console.log('Ajax error!');
                    }
                });
            },
            getLeaveMessage() {
                var _self = this;
                $.ajax({
                    type: 'GET',
                    url: port + 'message/' + _self.goodsid + "/goodsId/1/0",
                    dataType: 'json',
                    success: function(data) {
                        if (data.code == 200) {
                            console.log(data);
                            _self.leaveMessageitems = [];
                            var datas = data.data.record_list;
                            for (data of datas) {
                                var obj = {};
                                obj.name = data.barter_messagename;
                                obj.message = data.barter_message;
                                obj.id = data.barter_messageid;
                                obj.sonmessage = [];
                                for (var i = 0; i < data.barter_sonmessage_dto_list.length; i++) {
                                    var msg = {};
                                    msg.name = data.barter_sonmessage_dto_list[i].barter_username;
                                    msg.message = data.barter_sonmessage_dto_list[i].barter_sonmessage;
                                    obj.sonmessage.push(msg);
                                }
                                _self.leaveMessageitems.push(obj);
                            }
                        }
                    },
                    error: function(xhr, type) {
                        console.log('Ajax error!');
                    }
                });
            },
            backHome() {
                this.$store.dispatch("saveTab", 0).then(() => {
                    console.log("保存数据成功！！！");
                }).catch(err => {
                    Toast('保存数据失败');
                });
                this.$router.replace('/');
            },
            enterShop() {
                var thiz = this;
                this.$store.dispatch("saveShopId", thiz.shopid).then(() => {
                    Toast("保存数据成功！！！");
                    console.log("数据保存成功！");
                }).catch(err => {
                    Toast('保存数据失败');
                });
                this.$router.replace('/ShopPage');
            },
            charge() {
                this.$router.push('Charge');
            },
            leaveMessage() {
                this.$router.push('LeaveMessage');
            },
            saveGoods: function() {
                var _self = this;
                $.ajax({
                    headers: {
                        'X-Token': $.cookie("token"),
                    },
                    type: 'POST',
                    data: {
                        barterUserid: $.cookie("username"),
                        barterCommoditynumber: _self.goodsid,
                        status: '6',
                    },
                    url: port + 'shopping/addshopp',
                    success: function(data) {
                        console.log(data);
                        if (data.code == 200) {} else {
                            alert(data.message);
                        }
                    },
                    error: function() {
                        console.log("error");
                    }
                });
            },
            getGoodsInfo: function() {
                var _self = this;
                $.ajax({
                    type: 'GET',
                    url: port + 'goods/' + _self.goodsid + "/lookupId",
                    dataType: 'json',
                    success: function(data) {
                        if (data.code == 200) {
                            console.log(data.data);
                            var data = data.data;
                            switch (data.barter_severalnew) {
                                case 1:
                                    _self.second = "全新";
                                    break;
                                case 2:
                                    _self.second = "九九新";
                                    break;
                                case 3:
                                    _self.second = "九五新";
                                    break;
                                case 4:
                                    _self.second = "九成新";
                                    break;
                                case 5:
                                    _self.second = "八成新";
                                    break;
                                case 6:
                                    _self.second = "七成新";
                                    break;
                                case 7:
                                    _self.second = "六成新";
                                    break;
                                default:
                                    _self.second = "经典款";
                            }
                            _self.photos = [];
                            _self.photos.length = 0;
                            _self.goodsname = '[' + _self.second + ']:' + data.barter_commodityname;
                            _self.price = data.barter_sellingprice;
                            _self.address = data.barter_commodityaddress;
                            _self.number = data.barter_commodityquantity;
                            _self.goodsinfo = data.barter_descriptioninform;
                            _self.shopstar = data.barter_userstar;
                            _self.shopname = data.barter_storename;
                            _self.shopicon = data.barter_userface;
                            for (var img of data.barter_files) {
                                _self.photos.push(img.barter_showpictures);
                            }
                        }
                    },
                    error: function(xhr, type) {
                        console.log('Ajax error!');
                    }
                });
            },
        },
        mounted() {
            var mySwiper = new Swiper('.swiper-container', {
                direction: 'horizontal',
                loop: true,
                pagination: '.swiper-pagination',
                //autoplay: 2000,
                //autoplayDisableOnInteraction: false,
                // effect: 'cube',
                // cube: {
                //     slideShadows: false,
                //     shadow: false,
                //     shadowOffset: 100,
                //     shadowScale: 0.6
                // }
            })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .productimage {
        width: 100%;
        max-width: 640px;
        height: 250px;
    }
    
    .pricebox {
        width: 100%;
        max-width: 640px;
        padding-bottom: 5px;
        display: flex;
        height: 25px;
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
    
    .name {
        text-align: left;
        width: 100%;
        max-width: 640px;
        height: 30px;
        font-size: 16px;
        padding-left: 15px;
    }
    
    .price {
        font-size: 18px;
        padding-left: 15px;
        color: red;
        font-weight: bold;
    }
    
    .address {
        font-size: 12px;
        color: gray;
    }
    
    .number {
        font-size: 12px;
        color: gray;
        padding-right: 15px;
    }
    
    .detialmessage {
        width: 100%;
        height: auto;
        display: block;
        text-align: left;
        text-indent: 30px;
        font-size: 15px;
        padding-left: 15px;
        padding-right: 15px;
        margin-bottom: 5px;
    }
    
    .detialbox {
        background: #fafafa;
        margin: 0;
        padding: 0;
    }
    
    .detialimg {
        width: 100%;
        height: auto;
    }
    
    .shop {
        padding-top: 5px;
        padding-bottom: 5px;
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
    
    .left {
        float: left;
        width: 50%;
    }
    
    .right {
        float: right;
        width: 50%;
    }
    
    .tel {
        font-size: 16px;
        color: gray;
    }
    
    .footer {
        width: 100%;
        max-width: 640px;
        height: 50px;
        position: fixed;
        bottom: 0;
        overflow: hidden;
        background-color: #FFF;
        border-top: medium none #ECEDED;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
        z-index: 10;
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
    
    .backhomebox {
        margin-left: 15px;
    }
    
    .backhome {
        background-image: url('./../../assets/backhome.png');
        background-repeat: no-repeat;
        background-size: 25px auto;
        height: 25px;
        margin-top: 5px;
    }
    
    .save {
        background-image: url('./../../assets/save.png');
        background-repeat: no-repeat;
        background-size: 25px auto;
        height: 25px;
        margin-top: 5px;
    }
    
    .note {
        background-image: url('./../../assets/note.png');
        background-repeat: no-repeat;
        background-size: 25px auto;
        height: 25px;
        margin-top: 5px;
    }
    
    .entershop {
        background-image: url('../../assets/shop.png');
        background-repeat: no-repeat;
        background-size: 25px auto;
        height: 25px;
        margin-top: 5px;
    }
    
    .titlebox {
        font-size: 16px;
        font-weight: bold;
        display: block;
        width: 100%;
        max-width: 640px;
        height: 40px;
        line-height: 40px;
        border-bottom: solid 1px #e5e5e5;
    }
    
    .bottombox {
        height: 50px;
        width: 100%;
        max-width: 640px;
    }
    
    .buy {
        height: 100%;
        display: block;
        width: 120px;
        text-align: center;
        font-size: 18px;
        background: #2ad2c9;
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
</style>