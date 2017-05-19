<template>
  <div id="app">
    <router-view></router-view>    
  </div>
</template>
<script>
    export default {
        name: 'app'
    };
</script>
<script>
    import store from 'vuex/store'
    export default {
        store: store
    }
</script>
<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        max-width: 640px;
        margin: 0 auto;
    }
</style>