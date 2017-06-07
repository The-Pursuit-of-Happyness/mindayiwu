<!--分类商品组件 -->

<template>
  <div class ="classifyitem">
      <div class="content">
    <div class="topbox">
        <img class="goodsimg" :src ="goodsimage">
    </div>
    <p class="name"><span class="type">[ {{goodtype}} ]</span> {{goodsname}}</p>
    <div class="bottom">
        <p class="price">$ {{price}}</p>
        <div class="button" @click="seeDetails">
            <p class="seemore">查看详情</p>
        </div>
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
    .classifyitem {
        margin-bottom: 5px;
        float: left;
        margin-bottom: 5px;
        width: 50%;
        max-width: 320px;
        height: auto;
        user-select: none;
        -webkit-user-select: none;
        overflow: hidden;
        position: relative;
    }
    
    .content {
        float: left;
        margin-left: 3px;
        margin-right: 3px;
        background: #f1f1f1;
    }
    
    .topbox {
        border-top: solid 1px #e5e5e5;
        height: auto;
        width: 100%;
        max-width: 320px;
    }
    
    .goodsimg {
        width: 100%;
        max-width: 320px;
        min-height: 120px;
    }
    
    .name {
        text-align: left;
        display: block;
        width: 100%;
        max-width: 320px;
        height: 30px;
        padding: 5px;
        font-size: 16px;
    }
    
    .type {
        font-weight: bold;
    }
    
    .bottom {
        width: 100%;
        max-width: 320px;
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
        font-size: 14px;
        color: red;
        font-weight: bold;
    }
    
    .button {
        font-weight: bold;
        color: white;
        width: 60px;
        height: 25px;
        font-size: 12px;
        line-height: 30px;
        border-radius: 5px;
        background: #2ad2c9;
        margin-left: 10px;
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
        justify-content: center;
    }
</style>