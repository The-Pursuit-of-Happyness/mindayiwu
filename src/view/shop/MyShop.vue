<template>
    <div class="myshop">       
        <div class="topbox">
             <div class="shopbox">          
                <img class="shopicon" src="../../assets/head.jpg">
                <p class="shopname">开心就好的小店</p>
            </div>
        </div>
        <div class="goodsbox">
            <myshopgoodsitem></myshopgoodsitem>
            <space></space>
             <myshopgoodsitem></myshopgoodsitem>
             <space></space>
              <myshopgoodsitem></myshopgoodsitem>
        </div>
        <div class="bottombox" :style="{'top':(height-12) + 'px'}">
            <ul class="bottommenu">
                <li class="item" @click="backHome()">首页</li>
                <li class="item">货架管理</li>
                <li class="item border">店铺介绍</li>
                <li class="item" @click ="newProduct()">新品上架</li>
            </ul>
        </div>
        <div class="fillbottom"></div>
    </div>
</template>

<script>
    export default{        
        data(){
            return{
                height: window.clientHeight,
            }
        },
        methods:{
            backHome:function(){
                this.$router.replace("/");
            },
            newProduct:function(){
                this.$router.push('/NewProduct');
            }
        }
    }
</script>

<style scoped>
    .myshop{
        width:100%;
        max-width:640px;
    }
    .topbox{        
        width:100%;
        height:60px;
    }   
    .shopbox{
        width:100%;
        max-width:640px;
        background:#ccc;
        opacity:0.9;
        position: fixed;
        z-index:1;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);    
        height:60px;
         display:flex;
        -webkit-box-align: center;/* android 2.1-3.0, ios 3.2-4.3 */
        -webkit-align-items: center;/* Chrome 21+ */
        -ms-flex-align: center;/* WP IE 10 */
        align-items: center;/* android 4.4 */
        justify-content: flex-start;/* android 4.4 */
         overflow: hidden;
         border-bottom: medium none #ECEDED;        
    }
    .shopicon{
        margin-left:15px;
        width:40px;
        height:40px;
    }
    .shopname{
        margin-left:15px;
        font-size:16px;
        font-weight:bold;
    }
    .goodsbox{
        background:#f1f1f1;
    }
    .bottombox{
        z-index:1;
        height:60px;
        width:100%;
        max-width:640px;
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