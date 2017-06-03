<template>
  <div class="mypage">
        <!--
        <p class="content">我的</p>
        <a href="#" class="weui-btn weui-btn_primary">按钮</a>
        <a href="#" class="weui-btn weui-btn_disabled weui-btn_primary">按钮</a>
        <a href="#" class="weui-btn weui-btn_warn">确认</a>
        <a href="#" class="weui-btn weui-btn_disabled weui-btn_warn">确认</a>
        <a href="#" class="weui-btn weui-btn_default">按钮</a>
        <a href="#" class="weui-btn weui-btn_disabled weui-btn_default">按钮</a>
        <div class="button-sp-area">
            <a href="#" class="weui-btn weui-btn-plain-default">按钮</a>
            <a href="#" class="weui-btn weui-btn-plain-primary">按钮</a>

            <a href="#" class="weui-btn weui-btn-mini weui-btn-primary">按钮</a>
            <a href="#" class="weui-btn weui-btn-mini weui-btn-default">按钮</a>
        </div>
        -->
        <!-- usericon userid userName userqrcode  -->
        <div class="topbox">
            <img class="headimage" :src="usericon">
            <p class="username">{{username}}</p>
            <p class="edit" @click="edit()">编辑</p>
        </div>
        <space></space>
        <div class="shopandcart">
            <div class="shopcarbox" @click="myshop()">
                <div>
                    <img class="shopicon" src="../assets/shop.png">
                    <p>我的货架</p>
                </div>
            </div>
            <div class="shopcarbox" @click="shoppingcart()">
                <div>
                    <img class="shopicon" src="../assets/shopcar.png">
                    <p>我的购物车</p>
                </div>
            </div>
        </div>
        <space></space>
        <!--<linkitem title="我的货架" :imgurl="shopicon"></linkitem>-->
        <router-link to="/MyCollection" class="none"><linkitem  title="我的收藏" :imgurl="saveicon"></linkitem></router-link>
        <button class="weui-btn weui-btn_primary login"  @click ="login()">登陆</button>
        <button class="weui-btn weui-btn_primary login"  @click ="logout()">退出登陆</button>
        <!--<button class="weui-btn weui-btn_primary login"  @click ="search()">搜索</button> 
        <button class="weui-btn weui-btn_primary login"  @click ="toupload()">上传图片测试</button> -->
        <div class="bottombox"></div>
  </div>
</template>

<script>
    import shopIcon from '../assets/shop.png';
    import saveIcon from '../assets/save.png';
    import shopimg from '../assets/shopicon.jpg';
    import {
        WEB_SERVER as port
    } from '../config';
    export default {
        name: 'mypage',
        data() {
            return {
                username: '轻轻的我走了',
                usericon: shopimg,
                shopicon: shopIcon,
                saveicon: saveIcon,
                msg: '',
                userIcon: '',
            }
        },
        created() {
            this.initData();
        },
        methods: {
            edit() {
                this.$router.push("MyMessage");
            },
            shoppingcart() {
                this.$router.replace("ShoppingCart");
            },
            myshop() {
                this.$router.replace("MyShop");
            },
            mycollection() {
                this.$router.replace("MyCollection");
            },
            login() {
                this.$router.replace("Login");
            },
            logout() {
                $.cookie("token", null);
                $.cookie("username", null);
            },
            search() {
                this.$router.replace("SearchGoods");
            },
            toupload() {
                this.$router.replace("Upload");
            },
            initData: function() {
                var _self = this;
                $.ajax({
                    headers: {
                        'X-Token': $.cookie("token"),
                    },
                    type: 'GET',
                    url: port + 'user/' + $.cookie("username") + '/lookupId',
                    success: function(data) {
                        console.log(data);
                        if (data.code == 200) {
                            _self.username = data.data.barter_username;
                            _self.usericon = data.data.barter_userface;
                        } else {
                            alert(data.message);
                        }
                    }
                });
            },
        }
    }
</script>

<style src="../../static/css/weui.css"></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .content {
        font-size: 16px;
    }
    
    .mypage {
        width: 100%;
        max-width: 640px;
        margin: 0 auto;
    }
    
    .topbox {
        height: 90px;
        background: #fafafa;
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
    
    .headimage {
        margin-left: 15px;
        float: left;
        width: 60px;
        height: 60px;
        border-radius: 30px;
    }
    
    .username {
        margin-left: 15px;
        font-size: 16px;
        color: #2ad2c9;
    }
    
    .edit {
        margin-left: 50px;
        font-size: 16px;
        border-radius: 5px;
        line-height: 30px;
        height: 30px;
        width: 60px;
        color: black;
        border: solid 1px #ccc;
    }
    
    .edit:hover {
        background: #f1f1f1;
        color: #2ad2c9;
    }
    
    .shopandcart {
        height: 80px;
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
    }
    
    .shopcarbox {
        width: 50%;
        height: 80px;
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
    }
    
    .shopicon {
        width: 40px;
        height: 40px;
    }
    
    .bottombox {
        height: 60px;
        width: 100%;
        max-width: 640px;
    }
    
    .login {
        margin-top: 30px;
        width: 100%;
        max-width: 640px;
        height: 40px;
    }
    /*项目条文字样式*/
    
    .none {
        color: #202020;
        text-decoration: none;
        border: none;
        font-size: 17px;
        background: #ffffff;
        -webkit-tap-highlight-color: transparent;
    }
</style>