<template>
  <div class="classifypage">
      <p class="title">{{type}}</p>
      <div class="filltop"></div>
      <div></div>
        <div class="items">
            <classifyitem></classifyitem>
            <classifyitem></classifyitem>
            <classifyitem></classifyitem>
            <classifyitem></classifyitem>
            <classifyitem></classifyitem>
            <classifyitem></classifyitem>
            <classifyitem></classifyitem>
        </div>
        <div class="bottombox" :style="{'top':(height-12) + 'px'}">
            <p class="backhome" @click="backhome()">返回首页</p>
        </div> 
        <div class="fillbottom"></div>
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
                type: '其他',
            }
        },
        created() {
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
        methods: {
            backhome: function() {
                this.$router.replace("/");
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .classifypage {
        width: 100%;
        max-width: 640px;
        margin: 0 auto;
        clear: both;
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
        padding-left: 5px;
        padding-right: 5px;
        margin-bottom: 10px;
        clear: both;
    }
    
    .fillbottom {
        height: 60px;
        width: 100%;
        max-width: 640px;
    }
    
    .bottombox {
        height: 50px;
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
    
    .backhome {
        line-height: 50px;
        font-size: 18px;
    }
    
    .backhome:active {
        background: #2ad2c9;
        font-size: 20px;
        color: white;
    }
</style>