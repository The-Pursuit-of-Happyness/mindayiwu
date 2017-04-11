<template>
  <div class="orderpage">
        <div class="titlebox">
            <ul class="items">
                <li class="itemname" @click="currenttab =0;" v-bind:class="{ 'items-active': currenttab ==0 }">全部</li>
                <li class="itemname" @click="currenttab =1;" v-bind:class="{ 'items-active': currenttab ==1 }">待付款</li>
                <li class="itemname" @click="currenttab =2;" v-bind:class="{ 'items-active': currenttab ==2 }">待发货</li>
                <li class="itemname" @click="currenttab =3;" v-bind:class="{ 'items-active': currenttab ==3 }">待收货</li>
                <li class="itemname" @click="currenttab =4;" v-bind:class="{ 'items-active': currenttab ==4 }">待评价</li>
            </ul>
        </div>
        <space></space>
        <orderitem></orderitem>
        <space></space>
        <orderitem></orderitem>
        <space></space>
        <orderitem></orderitem>
        <space></space>
        <orderitem></orderitem>
        <div class="bottombox"></div>
  </div>
</template>

<script>
    export default {
        name: 'orderpage',
        data() {
            return {
                currenttab: 0,
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .orderpage{
        width: 100%;
        max-width: 640px;
        margin:0 auto;
    }
    .titlebox{
        width:100%;
             
    }
    .items{
        height:42px; 
        color:#666;        
        display:flex; 
        -webkit-box-align: center;/* android 2.1-3.0, ios 3.2-4.3 */
        -webkit-align-items: center;/* Chrome 21+ */
        -ms-flex-align: center;/* WP IE 10 */
        align-items: center;/* android 4.4 */
        justify-content: center;/* android 4.4 */
    }
    .items-active{
        color:#2ad2c9;
        height:40px;
        border-bottom:solid 2px #2ad2c9;
    }
    .itemname{
       display:flex; 
        -webkit-box-align: center;/* android 2.1-3.0, ios 3.2-4.3 */
        -webkit-align-items: center;/* Chrome 21+ */
        -ms-flex-align: center;/* WP IE 10 */
        align-items: center;/* android 4.4 */   
        justify-content: center;/* android 4.4 */
        height:42px;
        width:20%;
        font-size:16px;
    }
    .bottombox{
        height:60px;
        width:100%;
        max-width:640px;
    }
</style>