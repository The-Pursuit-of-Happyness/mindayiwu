<!--分类商品组件 -->

<template>
  <div class ="classifyitem">
    <div class="topbox">
        <img class="goodsimg" src="../../assets/goods3.jpg">
    </div>
    <p class="name"><span class="type">[ 经典款 ]</span> 彩色荧光笔</p>
    <div class="bottom">
        <p class="price">$ 3.50</p>
        <div class="button">
            <p class="seemore" @click="seeDetails()">查看详情</p>
            <img class="nexticon" src="../../assets/next.png">
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
  .classifyitem{
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
  .type{
      font-weight:bold;
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
      font-weight:bold;
      color:white;
      width:75px;
      height:25px;
      font-size:14px;
      line-height:30px;
      border-radius:5px;
      background:#2ad2c9;
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
      width:6px;
      height:auto;
  }
  .seemore{
      display:block;
      margin-left:5px;
  }
</style>