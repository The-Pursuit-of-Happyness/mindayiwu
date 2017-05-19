<template>
  <div class="classifypage">
      <p class="title">{{type}}</p>
      <div class="filltop"></div>
        <div class="items">
            <classifyitem></classifyitem>
            <classifyitem></classifyitem>
            <classifyitem></classifyitem>
            <classifyitem></classifyitem>
            <classifyitem></classifyitem>
            <classifyitem></classifyitem>
        </div>
        <div class="bottombox" :style="{'top':(height-12) + 'px'}">
            <ul class="bottommenu">
                <li class="item" @click="backHome()">首页</li>
                <li class="item">宝贝分类</li>
                <li class="item border">店铺简介</li>
                <li class="item">联系卖家</li>
            </ul>
        </div> 
        <div class="bottombox"></div>
  </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex';
    export default {
        name: 'classifypage',
        data() {
            return {
                height: window.clientHeight,
                type: 'aaa',
                msg: '',
            }
        },
        created() {
            console.log("bbbb:" + this.currenttype);
            if (Number.parseInt(this.currenttype)) {
                switch (Number.parseInt(this.currenttype)) {
                    case 1:
                        this.type = "图书";
                        break;
                    case 2:
                        this.type = '卡券';
                        break;
                    case 3:
                        this.type = '服装';
                        break;
                    case 4:
                        this.type = '礼品';
                        break;
                    case 5:
                        this.type = '运动装备';
                        break;
                    case 6:
                        this.type = '电子设备';
                        break;
                    case 7:
                        this.type = '日用百货';
                        break;
                    case 8:
                        this.type = '其他';
                        break;
                }
            }

            console.log(this.type);
        },
        computed: mapGetters({
            currenttype: 'currenttype',
        }),
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .classifypage {
        width: 100%;
        max-width: 640px;
        margin: 0 auto;
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
    
    .items {
        background: #f1f1f1;
        -webkit-column-count: 2;
        -moz-column-count: 2;
        column-count: 2;
        /*列数*/
        column-gap: 5px;
    }
    
    .bottombox {
        height: 60px;
        width: 100%;
        max-width: 640px;
    }
</style>