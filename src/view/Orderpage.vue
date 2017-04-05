<template>
  <div class="orderpage">
        <p class="content">订单</p>
  </div>
</template>

<script>
    export default {
        name: 'orderpage',
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
    .orderpage{
        width: 100%;
        max-width: 640px;
        margin:0 auto;
    }
</style>