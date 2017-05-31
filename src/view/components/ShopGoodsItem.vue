<!--分类商品组件 -->

<template>
  <div class ="shopgoodsitem" >
    <div class="topbox" @click="seeDetails()">
        <img class="goodsimg" :src="goodsitem.img">
    </div>
    <p class="name"> {{goodsitem.name}}</p>
    <div class="bottom">
        <p class="price">$ {{goodsitem.price}}</p>
        <div class="button" @click="addtocart()">
            <img class="nexticon" src="../../assets/shopcar.png">
        </div>
    </div>   
  </div>
</template>
<script>
    import {
        mapGetters
    } from 'vuex';
    import {
        WEB_SERVER as port
    } from '../../config';
    export default ({
        props: ['goodsitem'],
        data: function() {
            return {}
        },
        mounted: function() {

        },
        methods: {
            seeDetails() {
                console.log("ShopGoodsItem-goodsid:" + this.goodsitem.id);
                var thiz = this;
                this.$store.dispatch("saveGoodsId", thiz.goodsitem.id).then(() => {
                    console.log("保存数据成功！！！");
                }).catch(err => {
                    Toast('保存数据失败');
                });
                this.$router.push('/ProductDetailsPage');
            },
            addtocart() {
                var _self = this;
                $.ajax({
                    headers: {
                        'X-Token': $.cookie("token"),
                    },
                    type: 'POST',
                    data: {
                        barterUserid: $.cookie("username"),
                        barterCommoditynumber: _self.goodsitem.id,
                        barterGoodscount: '1',
                    },
                    url: port + 'shopping/addshopping',
                    success: function(data) {
                        console.log(data);
                        if (data.code == 200) {} else {
                            alert(data.message);
                        }
                    },
                    error: function() {
                        console.log("error");
                    }
                });
            }
        }
    })
</script>
<style scoped>
    .shopgoodsitem {
        float: left;
        background: #f1f1f1;
        margin-bottom: 5px;
        width: 50%;
        max-width: 320px;
        height: 270px;
        user-select: none;
        -webkit-user-select: none;
        overflow: hidden;
        position: relative;
    }
    
    .topbox {
        border-top: solid 1px #e5e5e5;
        height: 200px;
        width: 100%;
        max-width: 320px;
    }
    
    .goodsimg {
        margin-left: 5px;
        margin-right: 5px;
        width: 90%;
        max-width: 320px;
        height: 200px;
    }
    
    .name {
        text-align: left;
        display: block;
        width: 100%;
        max-width: 320px;
        height: 30px;
        padding: 5px;
        margin-left: 10px;
        font-size: 16px;
    }
    
    .bottom {
        width: 100%;
        max-width: 320px;
        height: 40px;
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
        margin-left: 15px;
        font-size: 16px;
        color: red;
        font-weight: bold;
    }
    
    .button {
        margin-right: 15px;
        margin-bottom: 10px;
        text-align: center;
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
    
    .nexticon {
        margin-left: 5px;
        width: 25px;
        height: auto;
    }
</style>