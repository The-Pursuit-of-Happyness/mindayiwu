<template>
    <div id="upload">
        <div class="imgbox">
            <img class="goodsimg" src="../../assets/addimg.png">
            <input type="file" class="fileupload" accept="image/*" multiple capture="camera" @change="viewimg()"/>
        </div>
        <button class="weui-btn weui-btn_primary" @click="upload()">上传</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
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
                    var reader = new FileReader();
                    reader.readAsDataURL(file[i]);
                    reader.onload = function(e) {
                        _self.photos.push(e.target.result);
                    };
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
                var obj = {};
                obj.images = this.photos;
                console.log(this.photos);
                var _self = this;
                $.ajax({
                    type: 'POST',
                    url: 'http://10.145.0.15/goods/addGoods',
                    dataType: "json",
                    data: {
                        "uploadFile": _self.photos,
                    },
                    success: function(data) {
                        console.log(data);
                        if (data.code == 200) {
                            console.log("success!!");
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