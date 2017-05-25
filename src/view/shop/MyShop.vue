<template>
    <div class="myshop">       
        <div class="topbox">
             <div class="shopbox">          
                <img class="shopicon" src="../../assets/head.jpg">
                <p class="shopname">开心就好的小店</p>
            </div>
        </div>
        <div class="goodsbox" v-for="goodsitem of goodsitems">
            <myshopgoodsitem :goodsitem = "goodsitem"></myshopgoodsitem>            
        </div>
        <div class="bottombox" :style="{'top':(height-12) + 'px'}">
            <ul class="bottommenu">
                <li class="item" @click="backHome()">首页</li>
                <li class="item" @click="manageShelf()">货架管理</li>
                <li class="item border" @click="shopMessage()">店铺介绍</li>
                <li class="item" @click ="newProduct()">新品上架</li>
            </ul>
        </div>
        <div class="fillbottom"></div>
    </div>
</template>

<script>
    import {
        WEB_SERVER as port
    } from '../../config';
    export default {
        data() {
            return {
                height: window.clientHeight,
                goodsitems: [{
                    "name": "五彩签字笔",
                    "img": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1432781925,4087601980&fm=23&gp=0.jpg",
                    "type": "日用百货",
                    "info": "这是一款彩虹色的签字笔",
                    "price": "3.50",
                    "number": "6",
                    "id": ""
                }, {
                    "name": "时尚手链",
                    "img": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1815189915,1980183862&fm=23&gp=0.jpg",
                    "type": "日用百货",
                    "info": "绚丽迷人的你值得拥有！",
                    "price": "99.50",
                    "number": "2",
                    "id": ""
                }, {
                    "name": "网球拍",
                    "img": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1492774813013&di=962de4c1e5f62433b26add5915c11116&imgtype=0&src=http%3A%2F%2Fimg2.3lian.com%2Fimg2007%2F7%2F17%2F697410062cj.jpg",
                    "type": "运动装备",
                    "info": "这是一款彩虹色的签字笔",
                    "price": "60.00",
                    "number": "1",
                    "id": ""
                }],
                uid: 'abcdefg123456',
                page: '1'
            }
        },
        created() {
            this.initData();
        },
        methods: {
            initData: function() {
                var _self = this;
                //当发送 ajax 请求开始时， 将 cookie 中的 token 与 username 放入 request header 中
                // $(document).ajaxSend(function(event, xhr) {
                //     xhr.setRequestHeader("token", $.cookie("token"));
                //     xhr.setRequestHeader("username", $.cookie("username"));
                // });
                console.log($.cookie("token"));
                $.ajax({
                    // headers: {
                    //     'token': $.cookie("token")
                    // },
                    // headers: {
                    //     "Access-Control-Allow-Credentials": true,
                    //     "Access-Control-Allow-Origin": "http://10.145.0.2/",
                    // },
                    type: 'GET',
                    url: port + 'goods/' + _self.uid + '/personStoreList/' + _self.page,
                    success: function(data) {
                        console.log(data);
                        if (data.code == 200) {
                            _self.goodsitems = [];
                            console.log("success");
                            for (data of data.data.record_list) {
                                var obj = {};
                                obj.name = data.barter_commodityname;
                                obj.price = data.barter_sellingprice;
                                obj.number = data.barter_commodityquantity;
                                obj.type = data.barter_categoryid;
                                obj.info = data.barter_descriptioninform;
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
            },
            newProduct: function() {
                this.$router.push('/NewProduct');
            },
            manageShelf: function() {
                this.$router.push('/ManageShelf');
            },
            shopMessage: function() {
                this.$router.push('/ShopMessage');
            }
        }
    }
</script>

<style scoped>
    .myshop {
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
    }
</style>