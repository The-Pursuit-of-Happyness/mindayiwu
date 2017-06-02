<!--购物车单条商品组件 -->

<template>
  <div class ="cartitem" v-if="isshow">   
    <!--<input class="reaio" type="radio"></input>-->
    <img class="goodsimg" :src="cartitem.goodsimg">    
    <div class="goodsmessagebox">
        <p class="name">{{cartitem.goodsname}}</p>
        <p class="type">{{cartitem.goodstype}}</p>
        <div class="pricebox">
            <p class="price">￥{{cartitem.price}}</p>
            <p class="number">X {{cartitem.number}}</p>
        </div>        
    </div>
    <button class="delete" @click="deleteitem()">删除</button>
    <div class="weui-mask" v-if="isdelete"></div>
        <div class="weui-dialog weui-skin_android" v-if="isdelete">
            <div class="weui-dialog__bd">                
                   确定删除该商品？                
            </div>
            <div class="weui-dialog__ft">
                <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="todelete()">确定</a>
                <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="isdelete = false;">取消</a>
            </div>
        </div>
  </div>
</template>
<script>
    import {
        WEB_SERVER as port
    } from '../../config';
    export default ({
        props: ['cartitem'],
        data: function() {
            return {
                isshow: true,
                isdelete: false,
            }
        },
        mounted: function() {

        },
        methods: {
            seeDetails() {
                this.$router.push('/ProductDetailsPage');
            },
            deleteitem: function() {
                this.isdelete = true;
            },
            todelete: function() {
                this.isdelete = false;
                var _self = this;
                $.ajax({
                    headers: {
                        'X-Token': $.cookie("token"),
                    },
                    type: 'GET',
                    url: port + '/shopping/' + _self.cartitem.shoppingid + '/shopping/0',
                    success: function(data) {
                        console.log(data);
                        if (data.code == 200) {
                            _self.isshow = false;
                        } else {
                            alert(data.message);
                        }
                    },
                    error: function() {
                        console.log("error");
                    }
                });
                console.log("delete");
            }
        }
    })
</script>
<style scoped>
    .cartitem {
        background: white;
        width: 100%;
        max-width: 640px;
        height: 160px;
        user-select: none;
        -webkit-user-select: none;
        overflow: hidden;
        position: relative;
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
    }
    
    .reaio {
        margin-left: 15px;
    }
    
    .goodsimg {
        width: 130px;
        height: 130px;
        margin-left: 15px;
    }
    
    .goodsmessagebox {
        width: 200px;
        text-align: left;
        margin-left: 10px;
    }
    
    .name {
        width: 200px;
    }
    
    .type {
        color: #ccc;
    }
    
    .pricebox {
        margin-top: 5px;
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
    
    .price {
        color: red;
        font-weight: bold;
    }
    
    .number {
        margin-right: 5px;
        font-size: 16px;
    }
    
    .delete {
        margin-left: 10px;
        font-size: 14px;
        color: #2ad2c9;
    }
</style>