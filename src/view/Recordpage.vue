<template>
  <div class="recordpage">
        <p class="content">记录</p>
        <div class="items">
            <classifyitem></classifyitem>
            <classifyitem></classifyitem>
            <classifyitem></classifyitem>
            <classifyitem></classifyitem>
            <classifyitem></classifyitem>
            <classifyitem></classifyitem>
        </div>
        <div class="bottombox"></div>
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
    .items{
        background:#f1f1f1;
         -webkit-column-count:2;
         -moz-column-count:2;
         column-count:2; /*列数*/
         column-gap:5px;
    }
     .bottombox{
        height:60px;
        width:100%;
        max-width:640px;
    }
</style>