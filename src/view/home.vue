<template>
  <div class="home">
      <slider></slider>
  </div>
</template>

<script>
    export default {
        name: 'home',
        data() {
            return {
                msg: '',
            }
        },
         created () {
            
           //init 
           this.init();
         },
         methods: {
             //初始化页面
            init(){
            },
         }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .home{
        max-width: 640px;
        margin:0 auto;
    }
</style>