<template>
  <div class="classifypage">
      <p class="title">{{type}}</p>
      <div class="filltop"></div>
      <div class="items" > 
          <div v-for="item of items">
              <classifyitem :goodsimage='item.img' :goodstype='item.type' :goodsname='item.name' :price='item.price' :goodsid='item.id'></classifyitem>
          </div>
          <div  v-if="items.length==0">
                <img class="nodataimg" src="../../assets/nodata.png">
                <p class="nodatap">暂无数据</p>
          </div>
           <div class="fillbottom"></div>
      </div>
     
      <div class="bottombox" :style="{'top':(height-12) + 'px'}">
          <p class="backhome" @click="backhome()">返回首页</p>
      </div>         
        <div v-if="isloading" id="loadingToast" style="opacity: 1;">
      <div class="weui-mask_transparent"></div>
      <div class="weui-toast">
          <i class="weui-loading weui-icon_toast"></i>
          <p class="weui-toast__content">数据加载中</p>
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
    export default {
        name: 'classifypage',
        data() {
            return {
                isloading: false,
                height: window.clientHeight,
                type: '其他',
                page: 1,
                items: [],
            }
        },
        created() {
            this.initData();
            if (Number.parseInt(this.currenttype)) {
                switch (Number.parseInt(this.currenttype)) {
                    case 1:
                        this.type = "图书";
                        break;
                    case 2:
                        this.type = '卡券';
                        break;
                    case 3:
                        this.type = '服装';
                        break;
                    case 4:
                        this.type = '礼品';
                        break;
                    case 5:
                        this.type = '运动装备';
                        break;
                    case 6:
                        this.type = '电子设备';
                        break;
                    case 7:
                        this.type = '日用百货';
                        break;
                    case 8:
                        this.type = '其他';
                        break;
                }
            }
            console.log(this.type);
        },
        computed: mapGetters({
            currenttype: 'currenttype',
        }),
        methods: {
            loadDownFn: function(me) {
                var _self = this;
                $.ajax({
                    type: 'GET',
                    url: './static/json/goodsinfo.json',
                    dataType: 'json',
                    success: function(data) {
                        if (data.code == 200) {
                            console.log(data);
                            _self.items = data.data.recommendItems;
                        }
                    },
                    error: function(xhr, type) {
                        console.log('Ajax error!');
                    }
                });
            },
            initData() {
                this.isloading = true;
                var _self = this;
                $.ajax({
                    type: 'GET',
                    timeout: 1000,
                    url: port + 'goods/' + Number.parseInt(_self.currenttype) + '/categoryList/' + this.page,
                    success: function(data) {
                        console.log(data);
                        if (data.code == 200) {
                            for (var obj of data.data.record_list) {
                                var goods = {};
                                goods.img = obj.barter_showpictures;
                                goods.goodstype = obj.barter_severalnew;
                                goods.goodsname = obj.barter_commodityname;
                                goods.price = obj.barter_sellingprice;
                                goods.id = obj.barter_commoditynumber;
                                _self.items.push(goods);
                            }
                            console.log(data.data.record_list);
                            _self.isloading = false;
                        } else {
                            alert(data.message);
                        }
                    },
                    error: function(xhr, type) {
                        _self.isloading = false;
                        _self.loadDownFn();
                        console.log('Ajax error!');
                    }
                });
            },
            backhome: function() {
                console.log("OrderInfo-tabid:0");
                var thiz = this;
                this.$store.dispatch("saveTab", 0).then(() => {
                    console.log("保存数据成功！！！");
                }).catch(err => {
                    Toast('保存数据失败');
                });
                this.$router.replace("/");
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .classifypage {
        width: 100%;
        max-width: 640px;
        margin: 0 auto;
        clear: both;
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
    
    .items {
        background: white;
        padding-left: 5px;
        padding-right: 5px;
        margin-bottom: 5px;
        height: 100%;
        clear: both;
    }
    
    .fillbottom {
        height: 60px;
        width: 100%;
        max-width: 640px;
        clear: both;
    }
    
    .bottombox {
        height: 50px;
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
    
    .backhome {
        line-height: 50px;
        font-size: 18px;
    }
    
    .backhome:active {
        background: #2ad2c9;
        font-size: 20px;
        color: white;
    }
    
    .nodataimg {
        margin-top: 60px;
        margin-bottom: 40px;
        width: 160px;
        height: auto;
    }
    
    .nodatap {
        font-size: 16px;
    }
</style>