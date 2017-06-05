<template>
    <div class="wranpage">
        <div class="icon-box topbox">
            <i class="weui-icon-warn weui-icon_msg"></i>
            <div class="icon-box__ctn contentbox">
                <h3 class="icon-box__title">尚未登录！！！</h3>
                <p class="icon-box__desc">登录后你讲获取更多精彩功能~~~</p>
            </div>
        </div>
        <p class="weui-btn weui-btn_plain-primary" @click="backHome()">返回首页</p>
        <p class="weui-btn weui-btn_plain-primary" @click="tologin()">立即登录</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        methods: {
            backHome() {
                this.$store.dispatch("saveTab", 0).then(() => {
                    console.log("保存数据成功！！！");
                }).catch(err => {
                    Toast('保存数据失败');
                });
                this.$router.replace('/');
            },
            tologin() {
                this.$router.replace("Login");
            },
        },
        created() {

        }
    }
</script>

<style scoped>
    #wranpage {
        width: 100%;
        max-width: 640px;
    }
    
    .contentbox {
        margin-top: 30px;
    }
    
    .topbox {
        margin-top: 80px;
        margin-bottom: 60px;
    }
</style>