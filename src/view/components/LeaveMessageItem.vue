<!--留言记录组件 -->

<template>
  <div class ="evaluate">
     <div class="topbox">
        <div class="shopbox">
            <img class="shopicon" src="../../assets/shopicon.jpg">
            <p class="shopname">我就看看，不买</p>
        </div>
     </div>     
     <div class ="contentbox">    
        <p class="evaluatemessage">一次不错的购物，下次还会再来</p>
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

        }
    })
</script>
<style scoped>
    .evaluate {
        width: 100%;
        max-width: 640px;
        user-select: none;
        -webkit-user-select: none;
        overflow: hidden;
        position: relative;
    }
    
    .topbox {
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
        justify-content: flex-start;
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
    
    .contentbox {
        width: 100%;
        max-width: 640px;
        background: #fafafa;
    }
    
    .evaluatetime {
        width: 100%;
        max-width: 640px;
        height: 25px;
        color: gray;
        font-size: 12px;
        text-align: left;
        padding-left: 15px;
    }
    
    .evaluatemessage {
        text-align: left;
        text-indent: 30px;
        font-size: 15px;
    }
    
    .goodsimg {
        width: 80%;
        height: auto;
        min-height: 60px;
    }
    
    .bottombox {
        width: 100%;
        max-width: 640px;
        height: 50px;
    }
    
    .operatebox {
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
        justify-content: flex-end;
        /* android 4.4 */
    }
    
    .button {
        text-align: center;
        line-height: 30px;
        width: 80px;
        height: 30px;
        border-radius: 15px;
        border: solid 1px #e5e5e5;
        margin-right: 15px;
    }
</style>