<template>
    <div class="shopmessage">       
        <div class="topbox">
             <div class="shopbox">          
                <img class="shopicon" :src="shopicon">
                <p class="shopname">{{shopname}}</p>
            </div>
        </div>

        <p class="itemname">店铺信息</p>
            <div class="messagebox">
                <p class="itemname">店铺介绍信息：</p>
                <p class="leftp">{{shopinfo}}</p>
                <p class="itemname">店铺联系电话：</p>
                <p class="leftp">{{shopphone}}</p>
                <p class="itemname">店铺联系地址：</p>
                <p class="leftp">{{shopemail}}</p>
                <p class="itemname">店铺开业时间：</p>
                <p class="leftp">{{opentime}}</p>
            </div>
        
        <div class="bottombox" :style="{'top':(height-12) + 'px'}">
            <p class="backhome" @click="backshelf()">返回货架</p>
        </div> 
        <div class="fillbottom"></div>
    </div>
</template>

<script>
    import shopicon from '../../assets/head.jpg'
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
                shopname: '开心就好的小店',
                shopicon: shopicon,
                shopinfo: '本店以诚信为本，良心经营。。',
                shopphone: '15640928579',
                shopemail: '123456@qq.com',
                opentime: '2017-5-20'
            }
        },
        computed: mapGetters({
            currentshopid: 'currentshopid',
        }),
        created() {
            this.initData();
        },
        methods: {
            initData: function() {
                var _self = this;
                $.ajax({
                    headers: {
                        'X-Token': $.cookie("token"),
                    },
                    type: 'GET',
                    url: port + 'user/' + _self.currentshopid + '/lookupId',
                    success: function(data) {
                        console.log(data);
                        if (data.code == 200) {
                            _self.shopimg = data.data.barter_userface;
                            _self.shopname = data.data.barter_storename;
                            _self.shopphone = data.data.barter_userphone;
                            _self.shopemail = data.data.barter_useremail;
                            _self.shopinfo = data.data.barter_storebewrite;
                            _self.opentime = data.data.barter_userregistrationtime;
                        } else {
                            alert(data.message);
                        }
                    }
                });
            },
            backshelf: function() {
                if (this.currentshopid == $.cookie("username")) {
                    this.$router.replace("MyShop");
                } else {
                    this.$router.replace("ShopPage");
                }

            }
        }
    }
</script>

<style scoped>
    .shopmessage {
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
    
    .itemname {
        text-align: left;
        margin-left: 15px;
        font-size: 16px;
        height: 25px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    
    .leftp {
        font-size: 14px;
        text-align: left;
        margin-left: 30px;
    }
    
    .messagebox {
        border: solid 1px #ccc;
        border-radius: 5px;
        margin-top: 10px;
        margin-left: 10px;
        margin-right: 10px;
        padding-bottom: 10px;
    }
    
    .goodsbox {
        background: #f1f1f1;
        -webkit-column-count: 2;
        -moz-column-count: 2;
        column-count: 2;
        /*列数*/
        column-gap: 5px;
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