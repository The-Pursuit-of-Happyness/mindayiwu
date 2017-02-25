<template>
  <div class="login">
    <div class ="accountbox">
        <label>账号：</label><input></input>
    </div>
    <div class="passwordbox">
    <label>密码：</label><input type="password"></input>
    </div>
    <div class="submitbox">
        <button>登录</button>
        <button>注册</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
                msg: '',
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .accountbox {
        margin: 5px;
    }
    
    .passwordbox {
        margin: 5px;
    }
    
    .submitbox {
        margin: 5px;
        padding: 5px;
    }
</style>