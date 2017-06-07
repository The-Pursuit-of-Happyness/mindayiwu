<!--商家商品分类组件 -->

<template>
  <div class ="myshopgoodsitem" v-if="isshow">
    <div class="topbox">
        <p class="name"> {{goodsitem.name}}</p>
        <p class="editbutton" @click="edit()">编辑</p>
    </div>
    <div class="contentbox">
        <img class="goodsimg" :src="goodsitem.img">
        <div class="messagebox">
            <p>类型：{{goodsitem.type}}</p>
            <p class="info">描述：{{goodsitem.info}}</p>
            <p>单价：$ {{goodsitem.price}}</p>
            <p>数量：{{goodsitem.number}}件</p>
        </div>
    </div>    
    <div class="bottom">
       <p class="button"@click="showdialog = true;">下架商品</p>
       <p class="button" @click="seeDetails()">查看详情</p>
    </div> 
    <space></space>
    <div class="weui-dialog weui-skin_android" v-if="showdialog">
            <div class="weui-dialog__bd">                
                   确定下架商品？                
            </div>
            <div class="weui-dialog__ft">
                <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="deleteGoods()">确定</a>
                <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary" @click="showdialog = false;">取消</a>
            </div>
        </div>
  </div>
</template>
<script>
    import {
        WEB_SERVER as port
    } from '../../config';
    import {
        mapGetters
    } from 'vuex';
    export default ({
        props: ['goodsitem'],
        data: function() {
            return {
                isshow: true,
                showdialog: false,
            }
        },
        mounted: function() {},
        methods: {
            deleteGoods() {
                var _self = this;
                $.ajax({
                    type: 'GET',
                    url: port + 'goods/' + _self.goodsitem.id + '/deleteGoods',
                    success: function(data) {
                        console.log(data);
                        if (data.code == 200) {
                            _self.isshow = false;
                            console.log("delete success");
                        } else {
                            alert(data.message);
                        }
                    }
                });
            },
            seeDetails() {
                var thiz = this;
                console.log("------" + this.goodsitem.id);
                this.$store.dispatch("saveGoodsId", thiz.goodsitem.id).then(() => {
                    console.log("保存数据成功！！！");
                }).catch(err => {
                    console.log("数据保存失败");
                    Toast('保存数据失败');
                });
                this.$router.push('/ProductDetailsPage');
            },
            edit() {
                var thiz = this;
                console.log("------" + this.goodsitem.id);
                this.$store.dispatch("saveGoodsId", thiz.goodsitem.id).then(() => {
                    console.log("保存数据成功！！！");
                }).catch(err => {
                    console.log("数据保存失败");
                    Toast('保存数据失败');
                });
                this.$router.push('/EditGoods');
            },
        }
    })
</script>
<style scoped>
    .myshopgoodsitem {
        background: white;
        margin-bottom: 10px;
        width: 100%;
        max-width: 640px;
        height: 230px;
        user-select: none;
        -webkit-user-select: none;
        overflow: hidden;
        position: relative;
        border-bottom: solid 1px #ccc;
    }
    
    .topbox {
        width: 100%;
        max-width: 640px;
        height: 50px;
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
    
    .editbutton {
        width: 80px;
        border-radius: 30px;
        border: solid 1px #ccc;
        height: 30px;
        line-height: 30px;
        margin-right: 15px;
    }
    
    .name {
        text-align: left;
        display: block;
        width: 100%;
        max-width: 320px;
        height: 30px;
        padding: 5px;
        margin-left: 10px;
        font-size: 16px;
    }
    
    .contentbox {
        background: #fafafa;
        height: 140px;
        width: 100%;
        max-width: 640px;
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
    
    .messagebox {
        text-align: left;
        padding-left: 15px;
    }
    
    .goodsimg {
        width: 120px;
        height: 120px;
        margin-left: 15px;
    }
    
    .info {
        width: 200px;
    }
    
    .bottom {
        width: 100%;
        max-width: 640px;
        height: 40px;
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
        width: 100px;
        border-radius: 30px;
        border: solid 1px #ccc;
        height: 30px;
        line-height: 30px;
        margin-right: 15px;
    }
</style>