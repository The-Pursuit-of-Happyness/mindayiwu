<!--留言记录组件 -->

<template>
  <div class ="leavemessageitem">    
    <div class="topbox">
        <p class="username">{{messageitem.name}}:</p>
        <p class="evaluatemessage">{{messageitem.message}}</p>
    </div>
    <div class="bottombox">
        <div class="buttonbox">
            <p class="button" @click="seeDetail()">{{opera}}</p>
        </div>
        <div  v-if="isshow">
            <div class="oneline" v-for="item of messageitem.sonmessage">
                <p class="username">{{item.name}}:</p>
                <p class="evaluatemessage">{{item.message}}</p>
            </div>
            <div  class="oneline">
                <input class="inputmsg" v-model="msg" placeholder="我也说一句"></input>
                <p class="button" @click="save()">保存</p>
            </div>
        </div>
    </div>
    <div id="toast" style="opacity: 1; display: none;">
            <div class="weui-mask_transparent"></div>
            <div class="weui-toast">
                <i class="weui-icon-success-no-circle weui-icon_toast"></i>
                <p class="weui-toast__content">保存成功！</p>
            </div>
        </div>
  </div>
</template>
<script>
    import {
        WEB_SERVER as port
    } from '../../config';
    export default {
        props: ['messageitem'],
        data() {
            return {
                opera: '详情',
                isshow: false,
                msg: '',
            }
        },
        mounted: function() {

        },
        methods: {
            seeDetail() {
                this.isshow = !this.isshow;
                this.opera = !this.isshow ? '详情' : '折叠';
            },
            save() {
                var _self = this;
                $.ajax({
                    headers: {
                        'X-Token': $.cookie("token"),
                    },
                    //timeout: 1000,
                    type: 'POST',
                    data: {
                        userId: $.cookie("username"),
                        parenMessageId: _self.messageitem.id,
                        message: _self.msg,
                    },
                    url: port + 'sonmessage/addSonMessage',
                    success: function(data) {
                        console.log(data);
                        if (data.code == 200) {
                            //成功提示
                            var $toast = $('#toast');
                            if ($toast.css('display') != 'none') return;
                            else {
                                $toast.fadeIn(100);
                                setTimeout(function() {
                                    $toast.fadeOut(100);
                                }, 2000);
                            }
                        } else {
                            console.log(data.message);
                        }
                    },
                    error: function() {
                        console.log("error");
                    }
                });
            }
        }
    }
</script>
<style scoped>
    .leavemessageitem {
        width: 100%;
        max-width: 640px;
        overflow: hidden;
    }
    
    .topbox {
        height: 40px;
        width: 100%;
        max-width: 640px;
        margin-left: 15px;
        display: flex;
        -webkit-box-align: center;
        /* android 2.1-3.0, ios 3.2-4.3 */
        -webkit-align-items: center;
        /* Chrome 21+ */
        -ms-flex-align: center;
        /* WP IE 10 */
        align-items: center;
        /* android 4.4 */
        justify-content: flex-start;
        /* android 4.4 */
    }
    
    .oneline {
        margin-left: 15px;
        display: flex;
        -webkit-box-align: center;
        /* android 2.1-3.0, ios 3.2-4.3 */
        -webkit-align-items: center;
        /* Chrome 21+ */
        -ms-flex-align: center;
        /* WP IE 10 */
        align-items: center;
        /* android 4.4 */
        justify-content: flex-start;
        /* android 4.4 */
    }
    
    .inputmsg {
        width: 300px;
        height: 30px;
        border: none;
        border: solid 1px #ccc;
    }
    
    .evaluatemessage {
        margin-left: 15px;
    }
    
    .bottombox {
        padding-bottom: 10px;
        border-bottom: solid 1px #ccc;
    }
    
    .buttonbox {
        width: 100%;
        text-align: right;
        display: flex;
        -webkit-box-align: center;
        /* android 2.1-3.0, ios 3.2-4.3 */
        -webkit-align-items: center;
        /* Chrome 21+ */
        -ms-flex-align: center;
        /* WP IE 10 */
        align-items: center;
        /* android 4.4 */
        justify-content: flex-end;
        /* android 4.4 */
    }
    
    .button {
        text-align: center;
        line-height: 30px;
        width: 80px;
        height: 30px;
        border-radius: 15px;
        border: solid 1px #e5e5e5;
        margin-right: 15px;
    }
</style>