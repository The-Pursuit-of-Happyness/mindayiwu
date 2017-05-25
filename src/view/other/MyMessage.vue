<template>
    <div id="mymessage">
        <p class="title">个人信息编辑</p>
        <div class="topbox">
            <p class="itemname">用户头像：</p>
            <div class="inline">
                <img id="headimg" class="userimg" src="../../assets/head.jpg"></img>
                <a href="javascript:;" class="file">选择图片
                    <input id = "file" type="file" accept="image/*" capture="camera" @change="viewimg()">
                </a>
            </div> 
            <p class="itemname">详细信息</p>
            <div class="messagebox">          
            <p class="itemname">用户名：</p>
            <input class="inputinfo inline" value="萌娃家的小店">
             <p class="itemname">用户邮箱：</p>
            <input class="inputinfo inline" value="萌娃家的小店">
             <p class="itemname">用户地址：</p>
            <input class="inputinfo inline" value="萌娃家的小店">
             <p class="itemname">用户电话：</p>
            <input class="inputinfo inline" value="萌娃家的小店">
            </div>
        </div>
        <div class="bottombox" :style="{'top':(height-12) + 'px'}">
            <ul class="bottommenu">
                <li class="item border" @click="backHome()">首页</li>
                <li class="item" @click="saveInfo()">保存</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userimg: '',
                height: window.clientHeight,
            }
        },
        methods: {
            viewimg($event) {
                var _self = this;
                var currentObj = event.currentTarget; //获取当前的input标签
                if (currentObj.files && currentObj.files[0]) {
                    _self.userimg = currentObj.files[0];
                    $("#headimg")[0].src = window.URL.createObjectURL(currentObj.files[0]);
                }
            },
            backHome() {
                this.$router.back();
            },
            saveInfo: function() {
                console.log('保存信息成功');
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
</style>