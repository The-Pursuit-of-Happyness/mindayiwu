<!--推荐商品组件 -->
<!--
    goodsimage:商品图片
    type:商品类型
    goodsname:商品名称
    price:商品价格
-->
<template>
  <div class ="recommenditem">
    <div class="topbox">
        <img class="goodsimg" :src ="goodsimage">
    </div>
    <p class="name"><span class="type">[ {{goodtype}} ]</span> {{goodsname}}</p>
    <div class="bottom">
        <p class="price">$ {{price}}</p>
        <div class="button" @click="seeDetails">
            <p class="seemore">查看详情</p>
            <img class="nexticon" src="../../assets/next.png">
        </div>
    </div>   
  </div>
</template>
<script>
    import {
        mapGetters
    } from 'vuex';
    export default ({
        props: ['goodsimage', 'goodstype', 'goodsname', 'price', 'goodsid'],
        data: function() {
            return {
                goodtype: '',
            }
        },
        created() {
            switch (this.goodstype) {
                case 1:
                    this.goodtype = "全新";
                    break;
                case 2:
                    this.goodtype = "九九新";
                    break;
                case 3:
                    this.goodtype = "九五新";
                    break;
                case 4:
                    this.goodtype = "九成新";
                    break;
                case 5:
                    this.goodtype = "八成新";
                    break;
                case 6:
                    this.goodtype = "七成新";
                    break;
                case 7:
                    this.goodtype = "六成新";
                    break;
                default:
                    this.goodtype = "经典款";
            }
        },
        computed: mapGetters({
            currentgoodsid: 'currentgoodsid',
        }),
        mounted: function() {

        },
        methods: {
            seeDetails() {
                console.log("Recommend-goodsid:" + this.goodsid);
                var thiz = this;
                this.$store.dispatch("saveGoodsId", thiz.goodsid).then(() => {
                    console.log("保存数据成功！！！");
                }).catch(err => {
                    Toast('保存数据失败');
                });
                this.$router.push('/ProductDetailsPage');
            },
        }
    })
</script>
<style scoped>
    .recommenditem {
        background: white;
        width: 100%;
        max-width: 640px;
        height: 270px;
        user-select: none;
        -webkit-user-select: none;
        overflow: hidden;
        position: relative;
    }
    
    .topbox {
        border-top: solid 1px #e5e5e5;
        height: 200px;
        width: 100%;
        max-width: 640px;
    }
    
    .goodsimg {
        width: 100%;
        max-width: 640px;
        height: 200px;
    }
    
    .name {
        text-align: left;
        display: block;
        width: 100%;
        max-width: 640px;
        height: 30px;
        padding: 5px;
        margin-left: 10px;
        font-size: 16px;
    }
    
    .type {
        font-weight: bold;
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
        justify-content: space-between;
        /* android 4.4 */
    }
    
    .price {
        margin-left: 15px;
        font-size: 16px;
        color: red;
        font-weight: bold;
    }
    
    .button {
        font-weight: bold;
        color: white;
        width: 75px;
        height: 25px;
        font-size: 14px;
        line-height: 30px;
        border-radius: 5px;
        background: #2ad2c9;
        margin-right: 15px;
        margin-bottom: 13px;
        text-align: center;
        display: flex;
        -webkit-box-align: center;
        /* android 2.1-3.0, ios 3.2-4.3 */
        -webkit-align-items: center;
        /* Chrome 21+ */
        -ms-flex-align: center;
        /* WP IE 10 */
        align-items: center;
        /* android 4.4 */
    }
    
    .nexticon {
        margin-left: 5px;
        width: 6px;
        height: auto;
    }
    
    .seemore {
        display: block;
        margin-left: 5px;
    }
</style>