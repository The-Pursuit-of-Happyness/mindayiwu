<template>
  <div class="home">
  <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img class="productimage" src="../assets/lunbo1.jpg"></div>
                <div class="swiper-slide"><img class="productimage" src="../assets/lunbo2.jpg"></div>
                <div class="swiper-slide"><img class="productimage" src="../assets/lunbo3.jpg"></div>
                <div class="swiper-slide"><img class="productimage" src="../assets/lunbo4.jpg"></div>
                <div class="swiper-slide"><img class="productimage" src="../assets/lunbo5.jpg"></div>
                <div class="swiper-slide"><img class="productimage" src="../assets/lunbo6.jpg"></div>
            </div>
            <!-- 分页器 -->
            <div class="swiper-pagination"></div>
        </div>
  <!--
      <slider></slider>
  -->
      <div class="classifybox" >
          <div v-for="type of typeitems">
                <typeitem :typeimg="type.img" :typename="type.typename"></typeitem>
          </div>          
      </div>
      <div v-for="recommenditem of recommendItems">
            <recommenitem :goodsimage ="recommenditem.img" :goodstype="recommenditem.goodstype" :goodsname="recommenditem.goodsname" :price="recommenditem.price" :goodsid ="recommenditem.id"></recommenitem>
            <space></space>
      </div>
      <div class="bottombox"></div>
  </div>
</template>

<script>
    import imgurl from './../assets/goods3.jpg';
    import book from './../assets/book.jpg';
    import card from './../assets/card.jpg';
    import cloth from './../assets/cloth.jpg';
    import gift from './../assets/gift.jpg';
    import sport from './../assets/sport.jpg';
    import electronics from './../assets/electronics.jpg';
    import commodity from './../assets/commodity.jpg';
    import other from './../assets/other.jpg';
    import {
        WEB_SERVER as port
    } from '../config';
    export default {
        name: 'home',
        data() {
            return {
                msg: '',
                recommendItems: [],
                typeitems: [{
                    "img": book,
                    "typename": "图书"
                }, {
                    "img": card,
                    "typename": "卡券"
                }, {
                    "img": cloth,
                    "typename": "服装"
                }, {
                    "img": gift,
                    "typename": "礼品"
                }, {
                    "img": sport,
                    "typename": "运动装备"
                }, {
                    "img": electronics,
                    "typename": "电子设备"
                }, {
                    "img": commodity,
                    "typename": "日用百货"
                }, {
                    "img": other,
                    "typename": "其他"
                }],
            }
        },
        created() {
            this.getRecommend();
            this.loadDownFn();
        },
        methods: {
            loadDownFn: function(me) {
                var _self = this;
                $.ajax({
                    type: 'GET',
                    url: './static/json/goodsinfo.json',
                    dataType: 'json',
                    success: function(data) {
                        if (data.code == 200) {
                            _self.recommendItems = data.data.recommendItems;
                        }
                    },
                    error: function(xhr, type) {
                        console.log('Ajax error!');
                    }
                });
            },
            getRecommend: function() {
                var _self = this;
                $.ajax({
                    type: 'GET',
                    url: port + '/goods/diagramList',
                    dataType: 'json',
                    success: function(data) {
                        if (data.code == 200) {
                            for (var obj of data.data.record_list) {
                                var goods = {};
                                goods.img = obj.barter_showpictures;
                                goods.goodstype = obj.barter_severalnew;
                                goods.goodsname = obj.barter_commodityname;
                                goods.price = obj.barter_sellingprice;
                                goods.id = obj.barter_commoditynumber;
                                _self.recommendItems.push(goods);
                            }
                            console.log(data.data.record_list);
                        }
                    },
                    error: function(xhr, type) {
                        console.log('Ajax error!');
                    }
                });
            },
        },
        mounted() {
            var mySwiper = new Swiper('.swiper-container', {
                direction: 'horizontal',
                loop: true,
                pagination: '.swiper-pagination',
                paginationClickable: true,
                className: 'swiper-pagination-bullet',
                paginationBulletRender: function(swiper, index, className) {
                    return '<span  class="' + className + '" style="width:18px;height:18px;color:white;background:#2ad2c9;">' + (index + 1) + '</span>';
                },
                autoplay: 3000,
                autoplayDisableOnInteraction: false,
            })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .home {
        max-width: 640px;
        margin: 0 auto;
    }
    
    .classifybox {
        padding-top: 10px;
        width: 100%;
        max-width: 640px;
        height: 140px;
    }
    
    .bottombox {
        height: 55px;
        width: 100%;
        max-width: 640px;
        text-align: left;
    }
    
    .productimage {
        width: 100%;
        height: 150px;
        max-width: 640px;
    }
</style>