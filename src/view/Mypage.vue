<template>
  <div class="mypage">
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
  </div>
</template>

<script>
    export default {
        name: 'mypage',
        data() {
            return {
                msg: '',
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
</style>
