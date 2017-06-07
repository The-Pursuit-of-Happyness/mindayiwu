<template>
    <div id="charge">
      <p class="title">商品购买</p>      
      <div class="filltop"></div>
      <p>商品信息</p>
        <div class="goodsbox">
            <div class="leftbox">
            <img class="goodsimg" :src="goodsicon">    
            </div>
            <div class="rightbox">
                 <div class="messageitem rightitem"> 
                    <label class="messagelable">商品名称：</label>
                    <p class="messagetext">{{goodsname}}</p>
                </div>
                <div class="messageitem rightitem">
                    <label class="messagelable">商品成色:</label>
                    <p class="messagetext">{{second}}</p>
                </div>
                <div class=" rightitem">
                    <label class="messageitem messagelable">单价：</label>
                    <p class="messagetext"><span class="price">{{price}}</span>元/件</p>
                </div>
            </div> 
        </div>
        <p>购买信息</p>
        <div class="buyerbox">
            <div class="messageitem">
                <label class="messagelable">购买数量：</label>
                <input class="messageinput" type="number" min="0" v-model = "number"></input>
            </div>
             <div class="messageitem"> 
                <label  class="messagelable">收货人：</label>
                <input  class="messageinput" v-model="buyername"></input>
            </div>
            <div class="messageitem"> 
                <label  class="messagelable">收货地址：</label>
                <input  class="messageinput" v-model="buyeraddress"></input>
            </div>
            <div class="messageitem">
                <label class="messagelable">联系电话：</label>
                <input  class="messageinput" v-model="buyerphone"></input>
            </div>
            <div>
                <p class="messageitem messagelable">买家留言：</p>
                <textarea class="note" placeholder="可以给卖家留言哦！！！" v-model="buyernote"></textarea>
            </div>
        </div>
        <div class="pricebox">
            <label   class="messagelable">金额：</label>
            <p class="price">{{price*number}}元</p>
        </div>

       <div class="bottombox" :style="{'top':(height-12) + 'px'}">
            <ul class="bottommenu">
                <li class="item" @click="backHome()">首页</li>
                <li class="item border" @click="cancle()">放弃购买</li>
                <li class="item" @click="purchase()">提交订单</li>
            </ul>
        </div>
        <div class="fillbottom"></div>
         <div id="toast" style="opacity: 1; display: none;">
            <div class="weui-mask_transparent"></div>
            <div class="weui-toast">
                <i class="weui-icon-success-no-circle weui-icon_toast"></i>
                <p class="weui-toast__content">下单成功！</p>
            </div>
        </div>
        <div v-if="isuploading" id="loadingToast" style="opacity: 1;">
            <div class="weui-mask_transparent"></div>
            <div class="weui-toast">
                <i class="weui-loading weui-icon_toast"></i>
                <p class="weui-toast__content">数据加载中</p>
            </div>
        </div>
    </div>
</template>

<script>
    import goodsicon from '../../assets/goods1.jpg';
    import {
        WEB_SERVER as port
    } from '../../config';
    import {
        mapGetters
    } from 'vuex';
    export default {
        data() {
            return {
                goodsicon: goodsicon,
                goodsname: '',
                second: '',
                price: 0,
                ownerid: '',
                number: '',
                buyername: '',
                buyeraddress: '',
                buyerphone: '',
                buyernote: '',
                goodsid: '',
                height: window.clientHeight,
                isuploading: false,
            }
        },
        computed: mapGetters({
            currentgoodsid: 'currentgoodsid',
        }),
        created() {
            if ($.cookie("token") == '' || $.cookie("token") == undefined || $.cookie("token") == null) {
                console.log("未登录");
                this.$router.push("WranPage");
            } else {
                console.log("已经登录");
            }
            this.goodsid = this.currentgoodsid;
            this.getGoodsInfo();
        },
        methods: {
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
                            _self.goodsname = data.barter_commodityname;
                            _self.price = data.barter_sellingprice;
                            _self.goodsicon = data.barter_files[0].barter_showpictures;
                            _self.ownerid = data.barter_userid;
                        }
                    },
                    error: function(xhr, type) {
                        console.log('Ajax error!');
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
            cancle() {
                this.number = '';
                this.buyername = '';
                this.buyeraddress = '';
                this.buyerphone = '';
                this.buyernote = '';
            },
            purchase: function() {
                this.isuploading = true;
                var _self = this;
                var obj = {};
                obj.barterSellernumber = _self.ownerid;
                obj.barterBuyernumber = $.cookie("username");
                obj.barterOrdername = this.buyername;
                obj.barterTransactionprice = this.price * this.number;
                obj.barterCommoditynumber = this.goodsid;
                obj.barterOrderphone = this.buyerphone;
                obj.barterOrdercount = this.number;
                obj.barterOrdermessage = this.buyernote;
                obj.barterUseraddress = this.buyeraddress;
                $.ajax({
                    type: 'POST',
                    url: port + 'order/add',
                    dataType: 'json',
                    timeout: 3000,
                    data: obj,
                    success: function(data) {
                        _self.isuploading = false;
                        console.log(data);
                        if (data.code == 200) {
                            var $toast = $('#toast');
                            if ($toast.css('display') != 'none') return;
                            else {
                                $toast.fadeIn(100);
                                setTimeout(function() {
                                    $toast.fadeOut(100);
                                }, 2000);
                            }
                            console.log("success!");
                        }
                    },
                    error: function(xhr, type) {
                        _self.isuploading = false;
                        console.log('Ajax error!');
                    }
                });
            }
        }
    }
</script>

<style scoped>
    #charge {
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
    
    .goodsbox {
        border: solid 1px #ccc;
        margin-top: 10px;
        margin-bottom: 15px;
        margin-left: 15px;
        margin-right: 15px;
        max-width: 640px;
        height: 200px;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        justify-content: flex-start;
    }
    
    .leftbox {
        margin: 10px;
        width: 50%;
    }
    
    .rightbox {
        width: 50%;
        margin-left: 5px;
    }
    
    .rightitem {
        width: 100%;
    }
    
    .goodsimg {
        width: 180px;
        height: 180px;
    }
    
    .buyerbox {
        width: 90%;
        margin-left: 5%;
        border: solid 1px #ccc;
        border-radius: 5px;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 15px;
    }
    
    .messageitem {
        margin-top: 5px;
        margin-bottom: 5px;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        justify-content: flex-start;
    }
    
    .messagelable {
        font-size: 16px;
    }
    
    .messagetext {
        font-size: 16px;
    }
    
    .messageinput {
        font-size: 16px;
        border: none;
        border-bottom: solid 1px #ccc;
    }
    
    .note {
        width: 90%;
        height: 120px;
        border: none;
        border: solid 1px #ccc;
    }
    
    .price {
        color: red;
        font-size: 20px;
        margin-right: 15px;
        margin-left: 10px;
    }
    
    .pricebox {
        margin-top: 10px;
        margin-bottom: 10px;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        justify-content: flex-end;
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
        border-left: solid 1px #cacaca;
        border-right: solid 1px #cacaca;
    }
    
    .fillbottom {
        height: 60px;
        width: 100%;
    }
</style>