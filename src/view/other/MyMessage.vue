<template>
    <div id="mymessage">
        <p class="title">个人信息</p>
        <div class="topbox">
            <p class="itemname">用户头像：</p>
            <div class="inline">
                <img id="headimg" class="userimg" :src="userimg"></img>
                <a href="javascript:;" class="file">选择图片
                    <input id = "file" type="file" accept="image/*" capture="camera" @change="viewimg()">
                </a>
            </div> 
            <p class="itemname">用户信息</p>
            <div class="messagebox">          
                <p class="itemname">用户名：</p>
                <input class="inputinfo inline" v-model = "username"> 
                <p class="itemname">用户邮箱：</p>
                <input class="inputinfo inline" v-model="useremail">
                <p class="itemname">用户电话：</p>
                <input class="inputinfo inline" v-model="userphone">
                <p class="itemname">用户介绍信息：</p>
                <textarea class="infoarea" v-model="userinfo"></textarea>
            </div>
            <p class="itemname">店铺信息</p>
            <div class="messagebox">
                <p class="itemname">店铺名：</p>
                <input class="inputinfo inline" v-model = "usershopname">
                 <p class="itemname">店铺介绍信息：</p>
                <textarea class="infoarea" v-model="usershopinfo"></textarea>
            </div>
        </div>
        <div class="bottombox" :style="{'top':(height-12) + 'px'}">
            <ul class="bottommenu">
                <li class="item border" @click="backHome()">返回</li>
                <li class="item" @click="saveInfo()">保存</li>
            </ul>
        </div>
        <div class="fillbottom"></div>
        <div id="toast" style="opacity: 1; display: none;">
            <div class="weui-mask_transparent"></div>
            <div class="weui-toast">
                <i class="weui-icon-success-no-circle weui-icon_toast"></i>
                <p class="weui-toast__content">上架成功！</p>
            </div>
        </div>
    </div>
</template>

<script>
    import userimg from '../../assets/head.jpg';
    import {
        WEB_SERVER as port
    } from '../../config';
    export default {
        data() {
            return {
                userimg: userimg,
                username: '萌娃',
                usershopname: '萌娃家的小店',
                useremail: '123456@qq.com',
                userphone: '15640928579',
                usershopinfo: '萌娃家的小店，主营各类萌物，萌翻你的心。',
                userinfo: '阳光帅气的小哥',
                tempimg: '',
                height: window.clientHeight,
            }
        },
        created() {
            this.initData();
        },
        methods: {
            viewimg($event) {
                var _self = this;
                var currentObj = event.currentTarget; //获取当前的input标签
                if (currentObj.files && currentObj.files[0]) {
                    _self.tempimg = currentObj.files[0];
                    $("#headimg")[0].src = window.URL.createObjectURL(currentObj.files[0]);
                }
            },
            backHome() {
                console.log("OrderInfo-tabid:3");
                var thiz = this;
                this.$store.dispatch("saveTab", 3).then(() => {
                    console.log("保存数据成功！！！");
                }).catch(err => {
                    Toast('保存数据失败');
                });
                this.$router.push('/');
            },
            initData: function() {
                var _self = this;
                $.ajax({
                    headers: {
                        'X-Token': $.cookie("token"),
                    },
                    type: 'GET',
                    url: port + 'user/' + $.cookie("username") + '/lookupId',
                    success: function(data) {
                        console.log(data);
                        if (data.code == 200) {
                            _self.username = data.data.barter_username;
                            _self.userimg = data.data.barter_userface;
                            _self.usershopname = data.data.barter_storename;
                            _self.useremail = data.data.barter_useremail;
                            _self.userphone = data.data.barter_userphone;
                            _self.usershopinfo = data.data.barter_storebewrite;
                            _self.userinfo = data.data.barter_userinformation;
                        } else {
                            alert(data.message);
                        }
                    }
                });
            },
            /*采用formData形式上传图片和表单数据*/
            saveInfo: function() {
                var _self = this;
                var formData = new FormData();
                formData.append("file", _self.tempimg);

                formData.append('barterUserid', $.cookie("username"));
                formData.append('barterUsername', _self.username);
                formData.append('barterUserphone', _self.userphone);
                formData.append('barterUseremail', _self.useremail);
                formData.append('barterUserinformation', _self.userinfo);

                formData.append('barterStorename', _self.usershopname);
                formData.append('barterStorebewrite', _self.usershopinfo);
                console.log(_self.photos);
                var _self = this;
                $.ajax({
                    headers: {
                        'X-Token': $.cookie("token"),
                    },
                    type: 'POST',
                    url: port + 'user/update',
                    dataType: "json",
                    data: formData,
                    processData: false,
                    contentType: false,
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
                            console.log("success");
                        } else {
                            _self.filedmsg = data.message;
                            this.isuploadfaild = true;
                            alert(data.message);
                        }
                    }
                });
            },
        },
    }
</script>

<style scoped>
    #mymessage {
        width: 100%;
        max-width: 640px;
    }
    
    .title {
        width: 100%;
        max-width: 640px;
        height: 60px;
        font-size: 18px;
        line-height: 60px;
        background: #2ad2c9;
    }
    
    .itemname {
        text-align: left;
        margin-left: 15px;
        font-size: 16px;
        height: 25px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    
    .inline {
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
    
    .userimg {
        height: 150px;
        width: 150px;
    }
    
    .inputinfo {
        margin-top: 5px;
        height: 25px;
        width: 60%;
        font-size: 14px;
        border: none;
        border-bottom: solid 1px #ccc;
    }
    
    .file {
        margin-left: 80px;
        width: 80px;
        height: 30px;
        position: relative;
        display: inline-block;
        background: #D0EEFF;
        border: 1px solid #99D3F5;
        border-radius: 4px;
        padding: 4px 12px;
        overflow: hidden;
        color: #1E88C7;
        text-decoration: none;
        text-indent: 0;
        line-height: 20px;
    }
    
    .file input {
        position: absolute;
        font-size: 100px;
        right: 0;
        top: 0;
        opacity: 0;
    }
    
    .file:hover {
        background: #AADFFD;
        border-color: #78C3F3;
        color: #004974;
        text-decoration: none;
    }
    
    .messagebox {
        border: solid 1px #ccc;
        border-radius: 5px;
        margin-top: 10px;
        margin-left: 10px;
        margin-right: 10px;
        padding-bottom: 10px;
    }
    
    .infoarea {
        width: 90%;
        height: 80px;
        border: none;
        border: solid 1px #ccc;
        border-radius: 3px;
        text-indent: 20px;
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
        width: 50%;
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
        width: 50%;
        border-right: solid 1px #cacaca;
    }
    
    .fillbottom {
        width: 100%;
        max-width: 640px;
        height: 75px;
    }
</style>