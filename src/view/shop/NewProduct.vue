<!-- 上架新品  -->
<template>
    <div class="newproduct">       
        <div class="topbox">
             <div class="shopbox">          
                <img class="shopicon" src="../../assets/head.jpg">
                <p class="shopname">开心就好的小店</p>
            </div>
        </div>
        <div class="goodsbox">
            <div class="startleft namebox">
                <label class="title">商品名称：</label><input class="noborder" v-model="goodsname" placeholder="请输入商品名称">
            </div>
            <div class="startleft goodstypebox">
                <label class="title">商品类型：</label>
                <select v-model="goodstype">
                    <option value="请选择">请选择</option>
                    <option value="图书">图书</option>
                    <option value="卡券">卡券</option>
                    <option value="服装">服装</option>
                    <option value="礼品">礼品</option>
                    <option value="运动装备">运动装备</option>
                    <option value="电子设备">电子设备</option>
                    <option value="日用百货">日用百货</option>
                    <option value="其他">其他</option>
                </select>
            </div>           
            <div class="startleft describebox">
                <label class="title">商品描述</label>              
            </div class="startleft">
             <textarea class="describeinfo" v-model="goodsinfo"></textarea>
            <div class="startleft">
                <label class="title">单价:</label>
                <input class="noborder" placeholder="请输入单价" v-model="price">
            </div>
            <div class="startleft">
                <label class="title">数量:</label>
                <input class="noborder" placeholder="请输入数量" v-model="number">
            </div>
            <div class="startleft">
                <label class="title">联系电话:</label>
                <input class="noborder" placeholder="请输入手机号" v-model="phone">
            </div>
            <div class="startleft">
                <label class="title">地址:</label>
                <input class="noborder" placeholder="请输入地址" v-model="address">
            </div>
            <div class="startleft">
                <label class="title">图片</label>                
            </div>
            <div class="addimg">
                <div class="imgbox">
                    <img class="goodsimg" src="../../assets/addimg.png">
                    <input type="file" class="fileupload" accept="image/*" capture="camera" @change="viewimg()"/>
                </div>
                <div class="imgbox">
                    <img class="goodsimg" src="../../assets/addimg.png">
                    <input type="file" class="fileupload" accept="image/*" capture="camera" @change="viewimg()"/>
                </div>
                <div class="imgbox">
                    <img class="goodsimg" src="../../assets/addimg.png">
                    <input type="file" class="fileupload" accept="image/*" capture="camera" @change="viewimg()"/>
                </div>
                <div class="imgbox">
                    <img class="goodsimg" src="../../assets/addimg.png">
                    <input type="file" class="fileupload" accept="image/*" capture="camera" @change="viewimg()"/>
                </div>
            </div>
        </div>
        <div class="bottombox" :style="{'top':(height-12) + 'px'}">
            <ul class="bottommenu">
                <li class="item" @click="backHome()">首页</li>
                <li class="item" @click="backShop()">返回货架</li>
                <li class="item border">放弃编辑</li>
                <li class="item" @click="upload()">上架</li>
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
                goodsname: '铅笔',
                goodstype: '1',
                goodsinfo: '啊啊啊啊',
                price: '14.20',
                number: '8',
                phone: '14443578878',
                address: '大连',
                photos: [],
            }
        },
        created() {},
        methods: {
            backHome: function() {
                this.$router.replace("/");
            },
            backShop: function() {
                this.$router.replace('MyShop');
            },
            viewimg($event) {
                var currentObj = event.currentTarget; //获取当前的input标签
                var img = currentObj.parentNode.children[0]; //找到要预览的图片img标签，亦可动态生成
                setImagePreview(currentObj, img);

                function setImagePreview(docObj, imgObjPreview) {
                    if (docObj.files && docObj.files[0]) {
                        imgObjPreview.style.display = 'block';
                        imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
                    }
                }
            },
            upload: function() {
                var inputs = $("input.fileupload");
                for (var i = 0; i < inputs.length; i++) {
                    this.photos.push(inputs[i].files[0]);
                }
                console.log(this.photos);
                var _self = this;
                $.ajax({
                    type: 'POST',
                    url: 'http://10.145.0.15/goods/addGoods',
                    data: {
                        "barterCommodityname": _self.goodsname,
                        "barterSellingprice": _self.price,
                        "barterContactinformation": _self.phone,
                        "barterCommodityquantity": _self.number,
                        "barterCommodityaddress": _self.address,
                        "multipartFile": _self.photos,
                        "barterDescriptioninform": _self.goodsinfo,
                        "barterCategoryid": _self.goodstype,
                    },
                    success: function(data) {
                        console.log(data);
                        if (data.code == 200) {
                            console.log("success!!");
                            // _self.$router.push('/');
                        } else {
                            alert(data.message);
                        }
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .newproduct {
        width: 100%;
        max-width: 640px;
    }
    
    .topbox {
        width: 100%;
        height: 60px;
    }
    
    .startleft {
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
    
    .namebox {
        width: 100%;
        height: 40px;
        max-width: 640px;
    }
    
    .title {
        font-size: 14px;
        margin-left: 15px;
    }
    
    .noborder {
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
        margin-top: 10px;
        width: 80%;
        height: 100px;
    }
    
    .addimg {
        width: 100%;
        max-width: 640px;
        height: auto;
        background: #f1f1f1;
        -webkit-column-count: 2;
        -moz-column-count: 2;
        column-count: 2;
        /*列数*/
    }
    
    .imgbox {
        border: solid 1px #ccc;
        position: relative;
        width: 90%;
        margin-left: 5%;
        margin-right: 5px;
        margin-bottom: 10px;
        height: auto;
    }
    
    .goodsimg {
        width: 100%;
        height: auto;
    }
    
    .fileupload {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: auto;
        min-height: 170px;
        opacity: 0;
    }
    
    .iconimg {
        width: 100%;
        height: auto;
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