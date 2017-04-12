<!--分类商品组件 -->

<template>
  <div class ="shopgoodsitem" @click="seeDetails()">
    <div class="topbox">
        <img class="goodsimg" src="../../assets/goods3.jpg">
    </div>
    <p class="name"> 彩色荧光笔</p>
    <div class="bottom">
        <p class="price">$ 3.50</p>
        <div class="button">
            <img class="nexticon" src="../../assets/shopcar.png">
        </div>
    </div>   
  </div>
</template>
<script>
  export default({
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
  .shopgoodsitem{
      background:white;
      margin-bottom:5px;
      width:100%;
      max-width:320px;
      height:270px;
      user-select: none;
      -webkit-user-select: none;
      overflow: hidden;
      position:relative;
  }
  .topbox{
      border-top:solid 1px #e5e5e5;
      height:200px;
      width:100%;
      max-width:320px;
  }
  .goodsimg{
      width:100%;
      max-width:320px;
      height:200px;
  }
  .name{
      text-align:left;
      display:block;
      width:100%;
      max-width:320px;
      height:30px;
      padding:5px;
      margin-left:10px;
      font-size:16px;
  }
  .bottom{
      width:100%;
      max-width:320px;
      height:40px;
      display:flex; 
       -webkit-box-align: center;/* android 2.1-3.0, ios 3.2-4.3 */
      -webkit-align-items: center;/* Chrome 21+ */
      -ms-flex-align: center;/* WP IE 10 */
      align-items: center;/* android 4.4 */   
      justify-content: space-between;/* android 4.4 */
  }
  .price{
      margin-left:15px;
      font-size:16px;
      color:red;
      font-weight:bold;
  }
  .button{     
      margin-right:15px;
      margin-bottom:10px;
      text-align:center;
      display:flex; 
      -webkit-box-align: center;/* android 2.1-3.0, ios 3.2-4.3 */
      -webkit-align-items: center;/* Chrome 21+ */
      -ms-flex-align: center;/* WP IE 10 */
      align-items: center;/* android 4.4 */
  }
  .nexticon{
      margin-left:5px;
      width:25px;
      height:auto;
  }
</style>