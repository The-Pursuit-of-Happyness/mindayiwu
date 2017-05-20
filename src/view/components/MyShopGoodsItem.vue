<!--商家商品分类组件 -->

<template>
  <div class ="myshopgoodsitem">
    <div class="topbox">
        <p class="name"> 彩色荧光笔</p>
        <p class="editbutton" @click="edit()">编辑</p>
    </div>
    <div class="contentbox">
        <img class="goodsimg" src="../../assets/goods3.jpg">
        <div class="messagebox">
            <p>类型：日用百货</p>
            <p class="info">描述：一款彩虹签字笔，时尚清新的化生</p>
            <p>单价：$ 3.50</p>
            <p>数量：5件</p>
        </div>
    </div>    
    <div class="bottom">
       <p class="button">下架商品</p>
       <p class="button" @click="seeDetails()">查看详情</p>
    </div>   
  </div>
</template>
<script>
    export default ({
        data: function() {
            return {}
        },
        mounted: function() {

        },
        methods: {
            seeDetails() {
                this.$router.push('/ProductDetailsPage');
            },
            edit() {
                this.$router.push('/EditGoods');
            },
        }
    })
</script>
<style scoped>
    .myshopgoodsitem {
        background: white;
        margin-bottom: 5px;
        width: 100%;
        max-width: 640px;
        height: 230px;
        user-select: none;
        -webkit-user-select: none;
        overflow: hidden;
        position: relative;
    }
    
    .topbox {
        width: 100%;
        max-width: 640px;
        height: 50px;
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
    
    .editbutton {
        width: 80px;
        border-radius: 30px;
        border: solid 1px #ccc;
        height: 30px;
        line-height: 30px;
        margin-right: 15px;
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
    
    .contentbox {
        background: #fafafa;
        height: 140px;
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
        justify-content: flex-start;
        /* android 4.4 */
    }
    
    .messagebox {
        text-align: left;
        padding-left: 15px;
    }
    
    .goodsimg {
        width: 120px;
        height: 120px;
        margin-left: 15px;
    }
    
    .info {
        width: 200px;
    }
    
    .bottom {
        width: 100%;
        max-width: 640px;
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
        justify-content: flex-end;
        /* android 4.4 */
    }
    
    .button {
        width: 100px;
        border-radius: 30px;
        border: solid 1px #ccc;
        height: 30px;
        line-height: 30px;
        margin-right: 15px;
    }
</style>