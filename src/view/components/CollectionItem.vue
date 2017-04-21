<!--收藏商品组件 -->
<!--
    goodsimage:商品图片
    goodsname:商品名称
    price:商品价格
-->
<template>
  <div class ="collectionitem">
    <div class="leftbox">
        <img class="goodsimg" :src ="goodsimage">
    </div>
    <div class ="rightbox">
        <p class="name">{{goodsname}}</p>
        <p class="price">$ {{price}}</p>
        <div class="bottom">
            <p class="button" @click="seeDetails">取消收藏</p>
            <p class="button" @click="seeDetails">查看详情</p>
        </div>
    </div>           
  </div>
</template>
<script>
  export default({
    props: ['goodsimage','goodsname','price'],
    data:function(){
      return{        
      }
    },
    mounted:function(){
     
    },
    methods:{    
        seeDetails(){
            this.$router.push('/ProductDetailsPage');
        },
    }
  })

</script>
<style scoped>
  .collectionitem{
      background:white;
      width:100%;
      max-width:640px;
      min-height:200px;
      height:auto;
      user-select: none;
      -webkit-user-select: none;
      overflow: hidden;
      position:relative;
      display:flex; 
      -webkit-box-align: center;/* android 2.1-3.0, ios 3.2-4.3 */
      -webkit-align-items: center;/* Chrome 21+ */
      -ms-flex-align: center;/* WP IE 10 */
      align-items: center;/* android 4.4 */   
      justify-content: space-between;/* android 4.4 */
  }
  .leftbox{
      height:auto;
      width:180px;
  }
  .goodsimg{
      height:auto;
      width:180px;
      min-height:180px;
  }
  .name{
      text-align:left;
      display:block;
      width:100%;
      height:60px;
      padding:5px;
      margin-left:10px;
      font-size:16px;
  }
  .rightbox{
      width:100%;
      height:100%; 
  }
  .price{
      text-align:left;
      margin-left:15px;
      margin-bottom:10px;
      font-size:18px;
      color:red;
      font-weight:bold;
  }
  .bottom{
      display:flex; 
      -webkit-box-align: center;/* android 2.1-3.0, ios 3.2-4.3 */
      -webkit-align-items: center;/* Chrome 21+ */
      -ms-flex-align: center;/* WP IE 10 */
      align-items: center;/* android 4.4 */   
      justify-content: space-between;/* android 4.4 */
      margin-left:15px;
      margin-right:15px;
  }
  .button{
      font-weight:bold;
      color:white;
      width:75px;
      height:25px;
      font-size:14px;
      line-height:25px;
      border-radius:5px;
      display:block;
      background:#2ad2c9;
      text-align:center;
  }

</style>