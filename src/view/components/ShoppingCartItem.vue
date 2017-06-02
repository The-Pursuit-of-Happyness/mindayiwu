<!--购物车商品组件 -->

<template>
  <div class ="shoppingcartitem">
     <div class="topbox">
        <div class="shopbox">
            <!--<input class="radio" type="radio"></input>-->
            <img class="shopicon" :src="shoppingcartitem.shopimg">
            <p class="shopname">{{shoppingcartitem.shopname}}</p>
            <img class="nexticon" src="../../assets/next.png">
        </div>
        <!--<p class="edit">编辑</p>-->
     </div>
    <div class="contentbox" v-for="cartitem of shoppingcartitem.cartitems">
        <cartitem :cartitem = "cartitem"></cartitem>
    </div>
    <space></space>
  </div>
</template>
<script>
    export default ({
        props: ['shoppingcartitem'],
        data: function() {
            return {}
        },
        mounted: function() {

        },
        methods: {
            seeDetails() {
                this.$router.push('/ProductDetailsPage');
            },
        }
    })
</script>
<style scoped>
    .shoppingcartitem {
        background: white;
        width: 100%;
        max-width: 640px;
        height: auto;
        user-select: none;
        -webkit-user-select: none;
        overflow: hidden;
        position: relative;
    }
    
    .topbox {
        border-top: solid 1px #e5e5e5;
        height: 40px;
        width: 100%;
        max-width: 640px;
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
    
    .shopbox {
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
    
    .radio {
        margin-left: 15px;
    }
    
    .shopicon {
        margin-left: 15px;
        width: 30px;
        height: 30px;
    }
    
    .shopname {
        display: inline-block;
        font-size: 14px;
        margin-left: 10px;
        margin-right: 10px;
    }
    
    .nexticon {
        width: 8px;
        height: auto;
    }
    
    .edit {
        font-size: 14px;
        color: #2ad2c9;
        float: right;
        margin-right: 15px;
    }
</style>