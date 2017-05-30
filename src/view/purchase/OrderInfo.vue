<template>
    <div id="orderinfo">
        <p class="title">订单详情</p>
      <div class="filltop"></div>

      <div class="bottombox" :style="{'top':(height-12) + 'px'}">
            <ul class="bottommenu">
                <!--<li class="item" >首页</li>-->
                <li class="item border" @click="backHome()">返回首页</li>
                <li class="item" @click="backOrder">返回订单</li>
            </ul>
        </div>
        <div class="fillbottom"></div>
    </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex';
    export default {
        data() {
            return {
                height: window.clientHeight,
            }
        },
        computed: mapGetters({
            currentorderid: 'currentorderid',
        }),
        created() {
            console.log(this.currentorderid);
        },
        methods: {
            backOrder: function() {
                console.log("OrderInfo-tabid:2");
                var thiz = this;
                this.$store.dispatch("saveTab", 2).then(() => {
                    console.log("保存数据成功！！！");
                }).catch(err => {
                    Toast('保存数据失败');
                });
                this.$router.push('/');
            },
            backHome: function() {
                this.$router.push('/');
            }
        },
    }
</script>

<style>
    #orderinfo {
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
        border-left: solid 1px #cacaca;
        border-right: solid 1px #cacaca;
    }
    
    .fillbottom {
        height: 60px;
        width: 100%;
    }
</style>