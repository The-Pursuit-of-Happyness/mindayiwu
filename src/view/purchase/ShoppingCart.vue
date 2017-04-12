<template>
    <div class="shoppingcart"> 
        <p class="title">购物车({{cartnum}})</p>
        <div class="topbox">
            <shoppingcartitem></shoppingcartitem>
        </div>
        <div class="bottombox" :style="{'top':(height-12) + 'px'}">
            <ul class="bottommenu">
                <li class="item" @click="backHome()">首页</li>
                <li class="item">宝贝分类</li>
                <li class="item border">店铺简介</li>
                <li class="item">联系卖家</li>
            </ul>
        </div>
        <div class="fillbottom"></div>
    </div>
</template>

<script>
    export default{        
        data(){
            return{
                cartnum:5,
                height: window.clientHeight,
            }
        },
        methods:{
            backHome:function(){
                this.$router.replace("/");
            }
        }
    }
</script>

<style scoped>
    .shoppingcart{
        width:100%;
        max-width:640px;
    }
    .title{
        height:30px;
        width:100%;
        font-size:16px;
        background:#2ad2c9;
        border-bottom: medium none #ECEDED;
        display:flex;
        -webkit-box-align: center;/* android 2.1-3.0, ios 3.2-4.3 */
        -webkit-align-items: center;/* Chrome 21+ */
        -ms-flex-align: center;/* WP IE 10 */
        align-items: center;/* android 4.4 */
        justify-content: center;/* android 4.4 */
    }
    .topbox{        
        width:100%;
        height:60px;
    }    
    .bottombox{
        z-index:1;
        height:60px;
        width:100%;
        background:white;
        position: fixed;
        bottom: 0;
        overflow: hidden;
        border-top: medium none #ECEDED;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);       
        z-index: 10;
    }
    .bottommenu{
        height:60px;
        margin-left:15px;
        margin-right:15px;
         display:flex;
        -webkit-box-align: center;/* android 2.1-3.0, ios 3.2-4.3 */
        -webkit-align-items: center;/* Chrome 21+ */
        -ms-flex-align: center;/* WP IE 10 */
        align-items: center;/* android 4.4 */
        justify-content: space-between;/* android 4.4 */
    }
    .item{     
        font-size:16px;  
         display:flex;
        -webkit-box-align: center;/* android 2.1-3.0, ios 3.2-4.3 */
        -webkit-align-items: center;/* Chrome 21+ */
        -ms-flex-align: center;/* WP IE 10 */
        align-items: center;/* android 4.4 */
        justify-content: center;/* android 4.4 */
    }
    .border{
        width:40%;
        border-left:solid 1px #cacaca;
        border-right:solid 1px #cacaca;
    }
    .fillbottom{
        height:60px;
        width:100%;
    }
</style>