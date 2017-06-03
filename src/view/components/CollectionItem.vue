<!--收藏商品组件 -->
<!--
    goodsimage:商品图片
    goodsname:商品名称
    price:商品价格
-->
<template>
  <div class ="collectionitem" v-if="isshow">
    <div class="leftbox">
        <img class="goodsimg" :src ="item.goodsimg">
    </div>
    <div class ="rightbox">
        <p class="name">{{item.goodsname}}</p>
        <p class="price">$ {{item.price}}</p>
        <div class="bottom">
            <p class="button" @click="deleteitem()">取消收藏</p>
            <p class="button" @click="seeDetails()">查看详情</p>
        </div>
    </div>  
    <div class="weui-mask" v-if="isdelete"></div>
        <div class="weui-dialog weui-skin_android" v-if="isdelete">
            <div class="weui-dialog__bd">                
                   确定取消收藏该商品？                
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
        props: ['item'],
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
                var thiz = this;
                this.$store.dispatch("saveGoodsId", thiz.item.id).then(() => {
                    console.log("保存数据成功！！！");
                }).catch(err => {
                    Toast('保存数据失败');
                });
                this.$router.push('/ProductDetailsPage');
            },
            todelete() {
                this.isdelete = false;
                var _self = this;
                $.ajax({
                    headers: {
                        'X-Token': $.cookie("token"),
                    },
                    type: 'GET',
                    url: port + '/shopping/' + _self.item.shoppingid + '/shopping/0',
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
            },
            deleteitem() {
                this.isdelete = true;
            },
        }
    })
</script>
<style scoped>
    .collectionitem {
        background: white;
        width: 100%;
        max-width: 640px;
        min-height: 200px;
        height: auto;
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
        justify-content: space-between;
        /* android 4.4 */
    }
    
    .leftbox {
        height: auto;
        width: 180px;
    }
    
    .goodsimg {
        height: auto;
        width: 180px;
        min-height: 180px;
    }
    
    .name {
        text-align: left;
        display: block;
        width: 100%;
        height: 60px;
        padding: 5px;
        margin-left: 10px;
        font-size: 16px;
    }
    
    .rightbox {
        width: 100%;
        height: 100%;
    }
    
    .price {
        text-align: left;
        margin-left: 15px;
        margin-bottom: 10px;
        font-size: 18px;
        color: red;
        font-weight: bold;
    }
    
    .bottom {
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
        margin-left: 15px;
        margin-right: 15px;
    }
    
    .button {
        font-weight: bold;
        color: white;
        width: 75px;
        height: 25px;
        font-size: 14px;
        line-height: 25px;
        border-radius: 5px;
        display: block;
        background: #2ad2c9;
        text-align: center;
    }
</style>