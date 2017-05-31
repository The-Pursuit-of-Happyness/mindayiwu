<!--评论页-->
<template>
    <div id="evaluate">
        <p class="title">用户评价</p>
        <div class="filltop"></div>
        <p>添加评论：</p>
        <textarea  class="message" placeholder="说点什么吧~~"></textarea>
        <p>添加图片：</p>
        <div class="addimg" id="addimg">
            <div  class="imgbox">
                <img class="imgadd" src="../../assets/addimg.png">
                <input id="file" type="file" class="fileupload" accept="image/*" multiple capture="camera" @change="viewimg()"/>
            </div>
        </div>

        <div class="bottombox" :style="{'top':(height-12) + 'px'}">
            <ul class="bottommenu">
                <li class="item border" @click="backOrder()">返回订单</li>
                <li class="item" @click="submit()">提交评价</li>
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

        },
        methods: {
            backOrder() {
                console.log("OrderInfo-tabid:2");
                var thiz = this;
                this.$store.dispatch("saveTab", 2).then(() => {
                    console.log("保存数据成功！！！");
                }).catch(err => {
                    Toast('保存数据失败');
                });
                this.$router.push('/');
            },
            submit() {
                console.log("提交评论");
            },
            viewimg($event) {
                var _self = this;
                var currentObj = event.currentTarget; //获取当前的input标签
                var img = new Image(); //currentObj.parentNode.children[0]; //找到要预览的图片img标签，亦可动态生成
                if (currentObj.files && currentObj.files[0]) {
                    img.className = "imgstyle";
                    img.style.width = "90%";
                    img.style.height = "auto";
                    img.style.marginBottom = "5px";
                    img.style.maxHeight = "300px";
                    var urls = window.URL.createObjectURL(currentObj.files[0]);
                    img.src = urls;
                    img.onclick = function() {
                        for (var i = 0; i < _self.photosUrl.length; i++) {
                            if (this.src == _self.photosUrl[i]) {
                                _self.isdelete = true;
                                _self.currentindex = i;
                                _self.currentimg = this;
                                console.log("delete");
                            }
                        }
                    };
                    this.imgs.push(img);
                    this.photos.push(currentObj.files[0]);
                    this.photosUrl.push(urls);
                    $("#addimg").prepend(img);
                }
            },
        }
    }
</script>

<style scoped>
    #evaluate {
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
        width: 90%;
        height: 200px;
        margin-top: 15px;
        border: none;
        border: solid 1px #ccc;
        border-radius: 5px;
        text-indent: 20px;
    }
    
    .addimg {
        width: 100%;
        max-width: 640px;
        height: auto;
    }
    
    .imgbox {
        border: solid 1px #ccc;
        position: relative;
        width: 90%;
        margin-left: 5%;
        height: auto;
    }
    
    .imgadd {
        width: 180px;
        height: 180px;
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