<template>
  <div class="manageshelf">
        <div class="titlebox">
            <ul class="items">
                <li class="itemname" @click="currenttab =0;" v-bind:class="{ 'items-active': currenttab ==0 }">全部</li>
                <li class="itemname" @click="currenttab =1;" v-bind:class="{ 'items-active': currenttab ==1 }">最新上架</li>
                <li class="itemname" @click="currenttab =2;" v-bind:class="{ 'items-active': currenttab ==2 }">已发货</li>
                <li class="itemname" @click="currenttab =3;" v-bind:class="{ 'items-active': currenttab ==3 }">待收货</li>
                <li class="itemname" @click="currenttab =4;" v-bind:class="{ 'items-active': currenttab ==4 }">已下架</li>
            </ul>
        </div>
        <!--<space></space>
        <orderitem></orderitem>
        <space></space>
        <orderitem></orderitem>
        <space></space>
        <orderitem></orderitem>
        <space></space>
        <orderitem></orderitem>-->
         <div class="bottombox" :style="{'top':(height-12) + 'px'}">
            <p class="backhome" @click="backHome()">返回首页</p>
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
    export default {
        name: 'manageshelf',
        data() {
            return {
                height: window.clientHeight,
                isloading: false,
                currenttab: 0,
            }
        },
        methods: {
            backHome() {
                console.log("OrderInfo-tabid:0");
                var thiz = this;
                this.$store.dispatch("saveTab", 0).then(() => {
                    console.log("保存数据成功！！！");
                }).catch(err => {
                    Toast('保存数据失败');
                });
                this.$router.push('/');
            }
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
    
    .titlebox {
        width: 100%;
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