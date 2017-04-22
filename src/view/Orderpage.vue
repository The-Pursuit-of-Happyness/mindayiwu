<template>
  <div class="orderpage">
        <div class="filltop"></div>
        <div class="titlebox">
            <ul class="items">
                <li class="itemname" @click="currenttab =0;" v-bind:class="{ 'items-active': currenttab ==0 }">全部</li>
                <li class="itemname" @click="currenttab =1;" v-bind:class="{ 'items-active': currenttab ==1 }">待支付</li>
                <li class="itemname" @click="currenttab =2;" v-bind:class="{ 'items-active': currenttab ==2 }">待发货</li>
                <li class="itemname" @click="currenttab =3;" v-bind:class="{ 'items-active': currenttab ==3 }">待收货</li>
                <li class="itemname" @click="currenttab =4;" v-bind:class="{ 'items-active': currenttab ==4 }">待评价</li>
            </ul>
        </div>
        <space></space>
        <div v-for = "orderitem of orderItems">
            <div v-if="orderitem.status == currenttab">
                <orderitem :orderitem = "orderitem"></orderitem>
                <smallspace></smallspace>
            </div>
            <div v-if="currenttab == '0'">
                <orderitem :orderitem = "orderitem"></orderitem>
                <smallspace></smallspace>
            </div>
        </div>
        <space></space>
        <div class="bottombox"></div>
  </div>
</template>

<script>
    export default {
        name: 'orderpage',
        data() {
            return {
                currenttab: 0,
                orderItems:[],
            }
        },
        created() {
            this.getOrderInfo();
        },
        methods:{ 
            getOrderInfo(){
                var _self = this;
                    $.ajax({
                        type: 'GET',
                        url: '../../static/json/orderitem.json',
                        dataType: 'json',
                        success: function(data){
                            if(data.code == 200){
                                _self.orderItems = data.data.orderItems;
                            }
                        },
                        error: function(xhr, type){
                            console.log('Ajax error!');
                        }
                    });
            },
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
    .filltop{
        width:100%;
        max-width:640px;
        height:32px; 
    }
    .titlebox{
        background:#ccc;
        opacity:0.9;
        width:100%;
        max-width:640px;
        position: fixed;
        top:0;
        z-index:1;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2); 
        overflow: hidden;
        border-bottom: medium none #ECEDED;            
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