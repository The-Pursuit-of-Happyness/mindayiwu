<template>
  <div class="recordpage">
        <p class="content">记录</p>
  </div>
</template>

<script>
    export default {
        name: 'recordpage',
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
    .recordpage{
        width: 100%;
        max-width: 640px;
        margin:0 auto;
    }
</style>