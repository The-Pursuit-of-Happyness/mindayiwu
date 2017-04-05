<template>
  <div class="mypage">
        <p class="content">我的</p>
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