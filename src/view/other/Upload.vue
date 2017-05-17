<template>
    <div id="upload">
        <div class="imgbox">
            <form id="uploadForm" enctype="multipart/form-data">
                <img class="goodsimg" src="../../assets/addimg.png">
                <input id="file" type="file" class="fileupload" accept="image/*" multiple capture="camera" @change="viewimg()"/>
            </form>
        </div>
        <img id="img1">
        <button class="weui-btn weui-btn_primary" @click="upload()">上传</button>
    </div>
</template>

<script>
    import {
        WEB_SERVER as port
    } from '../../config';
    export default {
        data() {
            return {
                height: window.clientHeight,
                goodsname: '铅笔',
                goodstype: '1',
                goodsinfo: '啊啊啊啊',
                price: 14.05,
                number: '8',
                phone: '14443578878',
                address: '大连',
                photos: [],
            }
        },
        methods: {
            viewimg($event) {
                var currentObj = event.currentTarget; //获取当前的input标签
                var img = currentObj.parentNode.children[0]; //找到要预览的图片img标签，亦可动态生成
                setImagePreview(currentObj, img);
                var _self = this;
                var file = event.target.files || event.dataTransfer.files;
                var leng = file.length;
                for (var i = 0; i < leng; i++) {
                    // var reader = new FileReader();
                    // reader.readAsDataURL(file[i]);
                    // reader.onload = function(e) {
                    //     _self.photos.push(e.target.result);
                    // };
                    _self.photos.push(file[i]);
                }

                function setImagePreview(docObj, imgObjPreview) {
                    if (docObj.files && docObj.files[0]) {
                        imgObjPreview.style.display = 'block';
                        imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
                    }
                }
            },
            upload: function() {
                var _self = this;
                var files = $('#file')[0];
                console.log(files); 
                var formData = new FormData();
                formData.append('file', $('#file')[0].files[0]);

                var obj = {};
                obj.barterCommodityname = _self.goodsname;
                obj.barterSellingprice = _self.price;
                obj.barterContactinformation = _self.phone;
                obj.barterCommodityquantity = _self.number;
                obj.barterCommodityaddress = _self.address;
                obj.barterDescriptioninform = _self.goodsinfo;
                obj.barterCategoryid = _self.goodstype;

                // formData.append('barterGoodsVo', JSON.stringify(obj));
                // formData.append('barterGoodsVo', $.param(obj));
                // formData.append('name', '1234567');

                formData.append('barterCommodityname', _self.goodsname);
                formData.append('barterSellingprice', _self.price);
                formData.append('barterContactinformation', _self.phone);
                formData.append('barterCommodityquantity', _self.number);
                formData.append('barterCommodityaddress', _self.address);
                formData.append('barterDescriptioninform', _self.goodsinfo);
                formData.append('barterCategoryid', _self.goodstype);

                console.log(formData);
                console.log(obj);
                $.ajax({
                    url: port + 'goods/addGoods',
                    type: 'POST',
                    data: formData,
                    // data: {
                    //     "barterCommodityname": _self.goodsname,
                    //     "barterSellingprice": _self.price,
                    //     "barterContactinformation": _self.phone,
                    //     "barterCommodityquantity": _self.number,
                    //     "barterCommodityaddress": _self.address,
                    //     formData,
                    //     "barterDescriptioninform": _self.goodsinfo,
                    //     "barterCategoryid": _self.goodstype,
                    // },

                    processData: false,
                    contentType: false,
                    success: function(data) {
                        console.log(data);
                    }
                }).done(function(res) {}).fail(function(res) {});
                var _self = this;
                // var inputs = $("input.fileupload");
                // for (var i = 0; i < inputs.length; i++) {
                //     //图片转base64上传
                //     var file = inputs[i].files;
                //     var leng = file.length;
                //     for (var i = 0; i < leng; i++) {
                //         var reader = new FileReader();
                //         reader.readAsDataURL(file[i]);
                //         reader.onload = function(e) {
                //             _self.photos.push(this.result);
                //         }
                //     }
                // }
                // var obj = {};
                // obj.images = this.photos;
                // console.log(this.photos);
                // var _self = this;
                // $.ajax({
                //     type: 'POST',
                //     url: port + 'goods/addGoods',
                //     contentType: false,
                //     processData: false,
                //     data: uploadFile,
                //     success: function(data) {
                //         console.log(data);
                //         if (data.code == 200) {
                //             console.log("success!!");
                //         } else {
                //             alert(data.message);
                //         }
                //     }
                // });
            }
        }
    }
</script>

<style scoped>
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
</style>