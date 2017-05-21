<template id="editgoods">
    <div>
        <div class="topbox">
             <div class="shopbox">          
                <img class="shopicon" src="../../assets/head.jpg">
                <p class="shopname">开心就好的小店</p>
            </div>
        </div>
        <div class="goodsbox">
            <p class="formtitle">商品基本信息</p>
            <div class="messagebox">            
                <div class="startleft namebox">
                    <label class="title">商品名称：</label><input class="noborder" v-model="goodsname" placeholder="请输入商品名称">
                </div>
                <div class="startleft">
                    <label class="title">商品单价：</label>
                    <input class="noborder" placeholder="请输入单价" v-model="price">
                </div>
                <div class="startleft">
                    <label class="title">商品数量：</label>
                    <input class="noborder" type="number" min="0" max ="100" placeholder="请输入数量" v-model="number">
                </div>
                <div class="startleft">
                    <label class="title">联系电话：</label>
                    <input class="noborder" placeholder="请输入手机号" v-model="phone">
                </div>
                <div class="startleft">
                    <label class="title">联系地址：</label>
                    <input class="noborder" placeholder="请输入地址" v-model="address">
                </div>
                <div class="startleft goodstypebox">
                    <label class="title">商品类型：</label>
                    <select v-model="goodstype">
                        <option value="-1">请选择</option>
                        <option value="1">图书</option>
                        <option value="2">卡券</option>
                        <option value="3">服装</option>
                        <option value="4">礼品</option>
                        <option value="5">运动装备</option>
                        <option value="6">电子设备</option>
                        <option value="7">日用百货</option>
                        <option value="8">其他</option>
                    </select>
                </div>
                <div class="startleft goodstypebox">
                    <label class="title">商品成色：</label>
                    <select v-model="secondhand">
                        <option value="-1">请选择</option>
                        <option value="1">全新</option>
                        <option value="2">九九新</option>
                        <option value="3">九五新</option>
                        <option value="4">九成新</option>
                        <option value="5">八成新</option>
                        <option value="6">七成新</option>
                        <option value="7">六成新</option>
                        <option value="8">其他</option>
                    </select>
                </div>
            </div>
            <div class="messagebox">        
                <div class="startleft describebox">
                    <label class="title">商品描述</label>     
                </div>
                <textarea class="describeinfo" v-model="goodsinfo"></textarea>
            </div>
            <div class="messagebox">
                <div class="startleft">
                    <label class="title">图片</label>
                    <p class="deleteinfo">(点击选中的图片即可删除)</p> 
                </div>            
                <div class="addimg" id="addimg">
                    <div v-if="photos.length+oldimgs.length-deleteOldImg.length<3" class="imgbox">
                        <img class="imgadd" src="../../assets/addimg.png">
                        <input id="file" type="file" class="fileupload" accept="image/*" multiple capture="camera" @change="viewimg()"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="weui-mask" v-if="isdelete"></div>
        <div class="weui-dialog weui-skin_android" v-if="isdelete">
            <div class="weui-dialog__bd">                
                   确定删除图片？                
            </div>
            <div class="weui-dialog__ft">
                <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="deleteimg()">确定</a>
                <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="isdelete = false;">取消</a>
            </div>
        </div>
        
        <div class="bottombox" :style="{'top':(height-12) + 'px'}">
            <ul class="bottommenu">
                <li class="item" @click="backHome()">首页</li>
                <li class="item" @click="backShop()">返回货架</li>
                <li class="item border" @click="cancle()">放弃修改</li>
                <li class="item" @click="edit()">保存</li>
            </ul>
        </div>
        <div id="toast" style="opacity: 1; display: none;">
            <div class="weui-mask_transparent"></div>
            <div class="weui-toast">
                <i class="weui-icon-success-no-circle weui-icon_toast"></i>
                <p class="weui-toast__content">修改成功！</p>
            </div>
        </div>
        <div v-if="isuploadfaild" class="js_dialog" id="iosDialog2" style="opacity: 1;">
            <div class="weui-mask"></div>
            <div class="weui-dialog">
                <div class="weui-dialog__bd">{{filedmsg}},商品修改失败，请重新添加</div>
                <div class="weui-dialog__ft">
                    <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="isuploadfaild=false;">知道了</a>
                </div>
            </div>
        </div>
        <div class="fillbottom"></div>
    </div>
</template>

<script>
    import {
        WEB_SERVER as port
    } from '../../config';
    import {
        mapGetters
    } from 'vuex';
    export default {
        data() {
            return {
                height: window.clientHeight,
                goodsname: '魅族手机',
                goodstype: '8',
                goodsinfo: '这是一款时尚而又新颖的手机，方便灵活，拍照神器。',
                price: 2100.00,
                number: '8',
                phone: '15898195729',
                address: '大连市大连民族大学金石滩校区',
                secondhand: '2',
                uuid: 'abcdefg123456',
                photos: [],
                photosUrl: [],
                imgs: [],
                oldimgs: [],
                isdeleteOldImg: false,
                deleteOldImg: [],
                isdelete: false,
                currentimg: null,
                currentindex: -1,
                filedmsg: '失败',
                isuploadfaild: false,
            }
        },
        computed: mapGetters({
            currentgoodsid: 'currentgoodsid',
        }),
        created() {
            this.getGoodsInfo();
        },
        methods: {
            getGoodsInfo: function() {
                var _self = this;
                $.ajax({
                    type: 'GET',
                    url: port + 'goods/' + _self.currentgoodsid + "/lookupId",
                    dataType: 'json',
                    success: function(data) {
                        if (data.code == 200) {
                            console.log(data.data);
                            var data = data.data;
                            _self.goodsname = data.barter_commodityname;
                            _self.goodstype = data.barter_categoryid;
                            _self.goodsinfo = data.barter_descriptioninform;
                            _self.price = data.barter_sellingprice;
                            _self.number = data.barter_commodityquantity;
                            _self.phone = data.barter_contactinformation;
                            _self.address = data.barter_commodityaddress;
                            _self.secondhand = data.barter_severalnew;
                            _self.oldimgs = data.barter_files;
                            for (var tempimg of _self.oldimgs) {
                                var img = new Image();
                                img.className = "imgstyle";
                                img.style.width = "90%";
                                img.style.height = "auto";
                                img.style.marginBottom = "5px";
                                img.style.maxHeight = "300px";
                                //var urls = window.URL.createObjectURL(currentObj.files[0]);
                                img.src = tempimg.barter_showpictures;
                                img.onclick = function() {
                                    for (var i = 0; i < _self.photosUrl.length; i++) {
                                        if (this.src == _self.photosUrl[i]) {
                                            _self.isdelete = true;
                                            _self.currentindex = i;
                                            _self.currentimg = this;
                                            _self.deleteOldImg.push(this.src);
                                            _self.isdeleteOldImg = true;
                                            console.log("delete");
                                        }
                                    }
                                };
                                _self.imgs.push(img);
                                // _self.photos.push(currentObj.files[0]);
                                _self.photosUrl.push(tempimg.barter_showpictures);
                                $("#addimg").prepend(img);
                            }
                        }
                    },
                    error: function(xhr, type) {
                        console.log('Ajax error!');
                    }
                });
            },
            backHome: function() {
                this.$router.replace("/");
            },
            backShop: function() {
                this.$router.replace('MyShop');
            },
            cancle() {
                this.goodsname = '';
                this.goodstype = '-1';
                this.goodsinfo = '';
                this.price = '';
                this.number = '';
                this.phone = '';
                this.address = '';
                this.secondhand = '-1';
                this.photos = [];
                this.photosUrl = [];
                for (var i = 0; i < this.imgs.length; i++) {
                    this.imgs[i].remove(this.imgs[i]);
                };
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
            deleteimg: function() {
                this.photosUrl.splice(this.currentindex, 1);
                if (!this.isdeleteOldImg) {
                    this.photos.splice(this.currentindex, 1);
                }
                this.isdeleteOldImg = false;
                this.currentimg.remove(this.currentimg);
                this.isdelete = false;
            },
            /*采用formData形式上传图片和表单数据*/
            edit: function() {
                var _self = this;
                var formData = new FormData();
                var images = _self.photos;
                for (var i = 0; i < images.length; i++) {
                    formData.append("file", images[i], images[i].name);
                }
                for (var i = 0; i < _self.deleteOldImg.length; i++) {
                    console.log(_self.deleteOldImg[i]);
                    formData.append('barterShowpictures', _self.deleteOldImg[i]);
                }
                //formData.append('barterShowpictures', 'abc');
                formData.append('barterCommodityname', _self.goodsname);
                formData.append('barterSellingprice', _self.price);
                formData.append('barterContactinformation', _self.phone);
                formData.append('barterCommodityquantity', _self.number);
                formData.append('barterCommodityaddress', _self.address);
                formData.append('barterDescriptioninform', _self.goodsinfo);
                formData.append('barterCategoryid', _self.goodstype);
                formData.append('barterUserid', _self.uuid);
                formData.append('barterSeveralnew', _self.secondhand);

                //console.log(_self.photos);
                var _self = this;
                $.ajax({
                    type: 'POST',
                    url: port + 'goods/updateGoods',
                    dataType: "json",
                    data: formData,
                    traditional: true,
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
        }
    }
</script>

<style scoped>
    .topbox {
        width: 100%;
        height: 60px;
    }
    
    .startleft {
        display: flex;
        margin-bottom: 5px;
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
    
    .shopbox {
        width: 100%;
        max-width: 640px;
        background: #ccc;
        opacity: 0.9;
        position: fixed;
        z-index: 1;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
        height: 60px;
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
        overflow: hidden;
        border-bottom: medium none #ECEDED;
    }
    
    .shopicon {
        margin-left: 15px;
        width: 40px;
        height: 40px;
    }
    
    .shopname {
        margin-left: 15px;
        font-size: 16px;
        font-weight: bold;
    }
    
    .goodsbox {
        width: 100%;
        max-width: 640px;
        height: auto;
    }
    
    .messagebox {
        border: solid 1px #ccc;
        border-radius: 8px;
        margin: 15px;
        padding: 5px;
    }
    
    .namebox {
        width: 100%;
        max-width: 640px;
    }
    
    .formtitle {
        font-size: 18px;
        margin-top: 10px;
        margin-bottom: 5px;
    }
    
    .title {
        font-size: 16px;
        margin-left: 15px;
    }
    
    .noborder {
        font-size: 16px;
        border: none;
        border-bottom: solid 1px #ccc;
    }
    
    .goodstypebox {
        width: 100%;
        height: 40px;
        max-width: 640px;
    }
    
    .describebox {
        width: 100%;
        max-width: 640px;
    }
    
    .describeinfo {
        margin-top: 5px;
        width: 90%;
        height: 100px;
        resize: none;
        border: solid 1px #ccc;
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
    
    .deleteinfo {
        display: block;
        color: red;
        margin-left: 5px;
    }
    
    .imgadd {
        width: 180px;
        height: 180px;
    }
    
    .fileupload {
        position: absolute;
        left: 19%;
        top: 0;
        width: 180px;
        height: 180px;
        opacity: 0;
    }
    
    .bottombox {
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