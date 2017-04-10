<template>   
  <div class="productdetailspage">
        <div>
            <img class="productimage" src="../../assets/goods3.jpg">
        </div>
        <p class="name">精品签字笔，七彩炫酷，秀出时尚</p>
        <div class="pricebox">
            <p class="price">$ 3.50</p>
            <p class="address">地址：金石滩校区</p>
            <P class="number">共 2件</P>
        </div>
        <space></space>
        <p class="titlebox">评价/留言</p>
        <evaluate></evaluate>
        <space></space>
        <p class="titlebox">详情</p>
        <div class="detialbox">           
            <p class="detialmessage">这是一款不错的签字笔，来自的德国的先进工艺生产。。。。。</p>
            <img class="detialimg" src="../../assets/goods3.jpg">
        </div>
        <space></space>
        <p class="titlebox">店家信息</p>
        <div class="shop">
            <div class="shopbox">
                <img class="shopicon" src="../../assets/shopicon.jpg">
                <p class="shopname">萌仔家的小商店</p>
            </div>
            <p class="left">全部物品：5</p>
            <p class="right">已售物品：2</p>
            <p class="left">待售物品：3</p>
            <p class="right">信用评分:5.0分</p>
            <p class="tel">联系电话:1582343434242</p>
            <p class="tel">地址:金石滩校区</p>            
        </div>
        <div class="footer" :style="{'top':(height-12) + 'px'}">
            <div class="backhomebox" @click="backHome">            
                <div class="backhome" ></div>
                <p>首页</p> 
            </div>
            <div>
                <div class="note"></div>
                <p>留言</p>
            </div>
            <div>
                <div class="save"></div>
                <p>收藏</p>
            </div> 
            <p class="buy">立即购买</p>
        </div>
        <div class="bottombox"></div>
  </div>
</template>

<script>
    export default {
        name: 'productdetailspage',
        data() {
            return {
                currentpage:0,
                height: window.clientHeight,
            }
        },
        methods: {
            backHome(){
                this.$router.replace('/');
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .productimage{
        width:100%;
        max-width:640px;
        height:250px;
    }
    .pricebox{
        width:100%;
        max-width:640px;
        padding-bottom:5px;
        display:flex;
        height:25px;
        -webkit-box-align: center;/* android 2.1-3.0, ios 3.2-4.3 */
        -webkit-align-items: center;/* Chrome 21+ */
        -ms-flex-align: center;/* WP IE 10 */
        align-items: center;/* android 4.4 */
        justify-content: space-between;/* android 4.4 */
    }
    .name{
        text-align:left;
        width:100%;
        max-width:640px;
        height:30px;
        font-size:16px;
        padding-left:15px;
    }
    .price{   
        font-size:18px;
        padding-left:15px;
        color:red;
        font-weight:bold;
    }
    .address{
        font-size:12px;
        color:gray;
    }
    .number{
        font-size:12px;
        color:gray;
        padding-right:15px;
    }
    .detialmessage{
        width:100%;
        height:auto;
        display:block;
        text-align:left;
        text-indent:30px;
        font-size:15px;
        padding-left:15px;
        padding-right:15px;
        margin-bottom:5px;
    }
    .detialbox{
        background:#fafafa;
        height:330px;
        margin:0;
        padding:0;
    }
    .detialimg{
        width:100%;
        height:auto;
    }
    .shop{
        padding-top:5px;
        padding-bottom:5px;
    }
     .shopbox{
       display:flex;
      -webkit-box-align: center;/* android 2.1-3.0, ios 3.2-4.3 */
      -webkit-align-items: center;/* Chrome 21+ */
      -ms-flex-align: center;/* WP IE 10 */
      align-items: center;/* android 4.4 */
    }
    .shopicon{
        margin-left:15px;
        width:30px;
        height:30px;
    }
    .shopname{
        display:inline-block;
        font-size:14px;
        margin-left:10px;
        margin-right:10px;
    }
    .left{
        float:left;
        width:50%;
    }
    .right{
        float:right;
        width:50%;
    }
    .tel{
        font-size:16px;
        color:gray;
    }
    .footer{
        width: 100%;
        max-width: 640px;
        height: 50px;
        position: fixed;
        bottom: 0;
        overflow: hidden;
        background-color: #FFF;
        border-top: medium none #ECEDED;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
        z-index: 10;
         display:flex; 
        -webkit-box-align: center;/* android 2.1-3.0, ios 3.2-4.3 */
        -webkit-align-items: center;/* Chrome 21+ */
        -ms-flex-align: center;/* WP IE 10 */
        align-items: center;/* android 4.4 */   
        justify-content: space-between;/* android 4.4 */
    }
    .backhomebox{
        margin-left:15px;
    }
    .backhome{
        background-image:url('../../assets/backhome.png');
        background-repeat:no-repeat;
        background-size:25px auto;
        height:25px;
        margin-top:5px;
    }
    .save{
         background-image:url('../../assets/save.png');
        background-repeat:no-repeat;
        background-size:25px auto;
         height:25px;
        margin-top:5px;
    }
    .note{
         background-image:url('../../assets/note.png');
        background-repeat:no-repeat;
        background-size:25px auto;
         height:25px;
        margin-top:5px;
    }
    .titlebox{
        font-size:16px;
        font-weight:bold;
        display:block;
        width:100%;
        max-width:640px;
        height:25px;
        border-bottom:solid 1px #e5e5e5;
    }
     .bottombox{
        height:50px;
        width:100%;
        max-width:640px;
    }
    .buy{
        height:100%;
        display:block;
        width:120px;
        text-align:center;
        font-size:18px;
        background:#2ad2c9;
         display:flex; 
        -webkit-box-align: center;/* android 2.1-3.0, ios 3.2-4.3 */
        -webkit-align-items: center;/* Chrome 21+ */
        -ms-flex-align: center;/* WP IE 10 */
        align-items: center;/* android 4.4 */   
        justify-content: center;/* android 4.4 */
    }
</style>
