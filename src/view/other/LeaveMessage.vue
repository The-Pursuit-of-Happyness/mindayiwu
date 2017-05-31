<!--留言页-->
<template>
    <div class="leavemessage">
        <p class="title">买家留言</p>
        <div class="filltop"></div>
        <textarea class="message" placeholder="说点什么吧~~"></textarea>
        <div class="bottombox" :style="{'top':(height-12) + 'px'}">
            <ul class="bottommenu">
                <li class="item border" @click="backDetails()">返回详情</li>
                <li class="item" @click="submit()">提交评价</li>
            </ul>
        </div>        
        <div class="fillbottom"></div>
    </div>    
</template>
<script>
    export default {
        data() {
            return {
                height: window.clientHeight,
            }
        },
        methods: {
            backDetails: function() {
                this.$router.push('ProductDetailsPage');
            },
            submit() {
                console.log('提交留言');
            }
        },
    }
</script>

<style scoped>
    #leavemessage {
        width: 100%;
        max-width: 640px;
    }
    
    .title {
        height: 40px;
        width: 100%;
        max-width: 640px;
        font-size: 16px;
        background: #2ad2c9;
        border-bottom: medium none #ECEDED;
        position: fixed;
        z-index: 1;
        display: flex;
        -webkit-box-align: center;
        /* android 2.1-3.0, ios 3.2-4.3 */
        -webkit-align-items: center;
        /* Chrome 21+ */
        -ms-flex-align: center;
        /* WP IE 10 */
        align-items: center;
        /* android 4.4 */
        justify-content: center;
        /* android 4.4 */
    }
    
    .filltop {
        height: 40px;
        width: 100%;
        max-width: 640px;
    }
    
    .message {
        height: 200px;
        width: 90%;
        margin-left: 15px;
        margin-top: 15px;
        border: none;
        border: solid 1px #ccc;
    }
    
    .bottombox {
        z-index: 1;
        height: 60px;
        width: 100%;
        max-width: 640px;
        background: white;
        position: fixed;
        bottom: 0;
        overflow: hidden;
        border-top: medium none #ECEDED;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
        z-index: 10;
    }
    
    .bottommenu {
        height: 60px;
        margin-left: 15px;
        margin-right: 15px;
        display: flex;
        -webkit-box-align: center;
        /* android 2.1-3.0, ios 3.2-4.3 */
        -webkit-align-items: center;
        /* Chrome 21+ */
        -ms-flex-align: center;
        /* WP IE 10 */
        align-items: center;
        /* android 4.4 */
        justify-content: space-between;
        /* android 4.4 */
    }
    
    .item {
        width: 33%;
        font-size: 16px;
        display: flex;
        -webkit-box-align: center;
        /* android 2.1-3.0, ios 3.2-4.3 */
        -webkit-align-items: center;
        /* Chrome 21+ */
        -ms-flex-align: center;
        /* WP IE 10 */
        align-items: center;
        /* android 4.4 */
        justify-content: center;
        /* android 4.4 */
    }
    
    .border {
        width: 40%;
        border-right: solid 1px #cacaca;
    }
    
    .fillbottom {
        height: 60px;
        width: 100%;
    }
</style>