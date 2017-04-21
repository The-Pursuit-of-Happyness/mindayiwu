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
      <div class="classifybox">
          <div class="classifyitem" @click="seeClassify()">
              <div>
                <img class="classifyimg" src="../assets/book.jpg">
                <p class ="classifyname">图书</p>
              </div>
          </div>         
          <div class="classifyitem"  @click="seeClassify()">
              <div>
                <img class="classifyimg" src="../assets/card.jpg">
                <p class ="classifyname">卡券</p>
              </div>
          </div>
          <div class="classifyitem"  @click="seeClassify()">
              <div>
                <img class="classifyimg" src="../assets/cloth.jpg">
                <p class ="classifyname">服装</p>
              </div>
          </div>
          <div class="classifyitem"  @click="seeClassify()">
              <div>
                <img class="classifyimg" src="../assets/gift.jpg">
                <p class ="classifyname">礼品</p>
              </div>
          </div>
          <div class="classifyitem"  @click="seeClassify()">
              <div>
                <img class="classifyimg" src="../assets/sport.jpg">
                <p class ="classifyname">运动装备</p>
              </div>
          </div>
          <div class="classifyitem"  @click="seeClassify()">
              <div>
                <img class="classifyimg" src="../assets/electronics.jpg">
                <p class ="classifyname">电子设备</p>
              </div>
          </div>
         <div class="classifyitem"  @click="seeClassify()">
              <div>
                <img class="classifyimg" src="../assets/commodity.jpg">
                <p class ="classifyname">日用百货</p>
              </div>
          </div>
          <div class="classifyitem"  @click="seeClassify()">
              <div>
                <img class="classifyimg" src="../assets/other.jpg">
                <p class ="classifyname">其他</p>
              </div>
          </div>
          
      </div>
      <div v-for="recommenditem of recommendItems">
            <recommenitem :goodsimage ="recommenditem.img" :type="recommenditem.type" :goodsname="recommenditem.goodsname" :price="recommenditem.price"></recommenitem>
            <space></space>
      </div>
      <div class="bottombox"></div>
  </div>
</template>

<script>
    import imgurl from './../assets/goods3.jpg';
    export default {
        name: 'home',
        data() {
            return {
                msg: '',
                recommendItems:[]
            }
        },
        created() {
            this.loadDownFn();
        },
        methods: {
            seeClassify(){
                this.$router.push('/ClassifyPage');
            },
            loadDownFn : function(me){
                var _self = this;
                $.ajax({
                    type: 'GET',
                    url: '../../static/json/goodsinfo.json',
                    dataType: 'json',
                    success: function(data){
                        if(data.code == 200){
                            _self.recommendItems = data.data.recommendItems;
                        }
                    },
                    error: function(xhr, type){
                        console.log('Ajax error!');
                    }
                });
            }
        },
        mounted () {
            var mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            className:'swiper-pagination-bullet',
            paginationBulletRender: function (swiper, index, className) {
                return '<span  class="' + className + '" style="width:18px;height:18px;color:white;background:#2ad2c9;">' + (index + 1) + '</span>';
            },
            autoplay:3000,
            autoplayDisableOnInteraction : false,
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
        padding-top:10px;
        width: 100%;
        max-width: 640px;
        height: 140px;
    }
    
    .classifyitem {
        width: 25%;
        height: 60px;
        float: left;
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
   
    .classifyimg {
        width: 35px;
        height: 35px;
    }
    
    .classifyname {
        font-size: 12px;
        color: #2ad2c9;
    }
    
    .bottombox {
        height: 55px;
        width: 100%;
        max-width: 640px;
        text-align: left;
    }
    .productimage{
        width:100%;
        height:150px;
        max-width:640px;
    } 
</style>