<template>
  <div class="mypage">
        <!--
        <p class="content">我的</p>
        <a href="#" class="weui-btn weui-btn_primary">按钮</a>
        <a href="#" class="weui-btn weui-btn_disabled weui-btn_primary">按钮</a>
        <a href="#" class="weui-btn weui-btn_warn">确认</a>
        <a href="#" class="weui-btn weui-btn_disabled weui-btn_warn">确认</a>
        <a href="#" class="weui-btn weui-btn_default">按钮</a>
        <a href="#" class="weui-btn weui-btn_disabled weui-btn_default">按钮</a>
        <div class="button-sp-area">
            <a href="#" class="weui-btn weui-btn-plain-default">按钮</a>
            <a href="#" class="weui-btn weui-btn-plain-primary">按钮</a>

            <a href="#" class="weui-btn weui-btn-mini weui-btn-primary">按钮</a>
            <a href="#" class="weui-btn weui-btn-mini weui-btn-default">按钮</a>
        </div>
        -->
        <!-- usericon userid userName userqrcode  -->
        <div class="topbox">
            <img class="headimage"src="../assets/shopicon.jpg">
            <p class="username">轻轻的我走了</p>
        </div>
        <space></space>
        <div class="contentbox">

        </div>
  </div>
</template>

<script>
    export default {
        name: 'mypage',
        data() {
            return {
                msg: '',
                userIcon:'',
            }
        }
    }
</script>

<style  src="../../static/css/weui.css"></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .content{
        font-size:16px;
    }
    .mypage{
        width: 100%;
        max-width: 640px;
        margin:0 auto;
    }
    .topbox{
        height:90px;
        background:#fafafa;
         display:flex;
        -webkit-box-align: center;/* android 2.1-3.0, ios 3.2-4.3 */
        -webkit-align-items: center;/* Chrome 21+ */
        -ms-flex-align: center;/* WP IE 10 */
        align-items: center;/* android 4.4 */
    }
    .headimage{
        margin-left:15px;
        float:left;
        width:60px;
        height:60px;
        border-radius:30px;
    }
    .username{
        margin-left:15px;
        font-size:16px;
        color:#2ad2c9;
    }
    .contentbox{
        height:400px;
        background:orange;
    }
</style>
