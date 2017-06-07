<template>
    <div class="mycollection">
        <div class="topbox"></div>
        <p class="title">我的收藏夹</p> 
        <space></space>       
        <div v-for="collectionItem of collectionItems">
             <collectionitem :item = "collectionItem"></collectionitem>
             <smallspace></smallspace>
        </div>
        <div v-if="collectionItems.length==0">
            <img class="nodataimg"  src="../../assets/nodata.png">
            <p class="nodatap">暂无数据</p>
          </div>
        <div class="bottombox" :style="{'top':(height-12) + 'px'}">
            <ul class="bottommenu">
                <li class="item border" @click="backhome()">返回首页</li>
                <li class="item" @click="backme()">返回我的</li>
            </ul>
        </div>        
        <div class="fillbottom"></div>
    </div>
</template>

<script>
    import {
        WEB_SERVER as port
    } from '../../config';
    export default {
        data: function() {
            return {
                collectionItems: [],
                page: 1,
                height: window.clientHeight,
            }
        },
        created() {
            this.getDate();
            //this.loadCollection();
        },
        components: {},
        methods: {
            getDate() {
                var _self = this;
                $.ajax({
                    headers: {
                        'X-Token': $.cookie("token"),
                    },
                    //timeout: 1000,
                    type: 'GET',
                    url: port + 'shopping/' + $.cookie("username") + '/getShopping/' + _self.page + '/6',
                    success: function(data) {
                        console.log(data);
                        if (data.code == 200) {
                            _self.collectionItems = [];
                            for (var datas of data.data.record_list) {
                                var obj = {};
                                obj.goodsimg = datas.barter_showpictures;
                                obj.goodsname = datas.barter_commodityname;
                                obj.price = datas.barter_sellingprice;
                                obj.id = datas.barter_commoditynumber;
                                obj.shoppingid = datas.barter_shoppingid;
                                _self.collectionItems.push(obj);
                            }
                        } else {
                            _self.loadCollection();
                            console.log(data.message);
                        }
                    },
                    error: function() {
                        console.log("error");
                    }
                });
            },
            seeClassify() {
                this.$router.push('/ClassifyPage');
            },
            backhome() {
                var thiz = this;
                this.$store.dispatch("saveTab", 0).then(() => {
                    console.log("保存数据成功！！！");
                }).catch(err => {
                    Toast('保存数据失败');
                });
                this.$router.replace("/");
            },
            backme() {
                var thiz = this;
                this.$store.dispatch("saveTab", 3).then(() => {
                    console.log("保存数据成功！！！");
                }).catch(err => {
                    Toast('保存数据失败');
                });
                this.$router.replace("/");
            },
            loadCollection: function(me) {
                var _self = this;
                $.ajax({
                    type: 'GET',
                    url: '../../static/json/goodsinfo.json',
                    dataType: 'json',
                    success: function(data) {
                        if (data.code == 200) {
                            _self.collectionItems = data.data.recommendItems;
                        }
                    },
                    error: function(xhr, type) {
                        console.log('Ajax error!');
                    }
                });
            }
        },
    }
</script>

<style scoped>
    .mycollection {
        width: 100%;
        max-width: 640px;
    }
    
    .topbox {
        width: 100%;
        max-width: 640px;
        height: 40px;
    }
    
    .title {
        position: fixed;
        top: 0;
        z-index: 10;
        display: block;
        width: 100%;
        max-width: 640px;
        height: 40px;
        font-size: 18px;
        line-height: 40px;
        background: white;
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
    
    .nodataimg {
        margin-top: 60px;
        margin-bottom: 40px;
        width: 180px;
        height: auto;
    }
    
    .nodatap {
        font-size: 16px;
    }
</style>