<!--购物车单条商品组件 -->

<template>
  <div class ="cartitem">   
    <input class="reaio" type="radio"></input>
    <img class="goodsimg" src="../../assets/goods4.png">    
    <div class="goodsmessagebox">
        <p class="name">大号创意萌物豌豆荚抱枕毛绒玩具靠垫长枕头儿童布娃娃生日礼物</p>
        <p class="type">颜色分类:灰色 龙猫</p>
        <div class="pricebox">
            <p class="price">￥45</p>
            <p class="number">X 1</p>
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
  .cartitem{
      background:white;
      width:100%;
      max-width:640px;
      height:160px;
      user-select: none;
      -webkit-user-select: none;
      overflow: hidden;
      position:relative;
      display:flex;
      -webkit-box-align: center;/* android 2.1-3.0, ios 3.2-4.3 */
      -webkit-align-items: center;/* Chrome 21+ */
      -ms-flex-align: center;/* WP IE 10 */
      align-items: center;/* android 4.4 */
      justify-content: flex-start;/* android 4.4 */
  }
  .reaio{
      margin-left:15px;
  }  
  .goodsimg{
      width:130px;
      height:130px;
      margin-left:15px;
  }
  .goodsmessagebox{
      width:200px;
      text-align:left;
      margin-left:10px;
  }
  
  .name{
      width:200px;
  }
  .type{
      color:#ccc;
  }
  .pricebox{
      margin-top:5px;
       display:flex;
      -webkit-box-align: center;/* android 2.1-3.0, ios 3.2-4.3 */
      -webkit-align-items: center;/* Chrome 21+ */
      -ms-flex-align: center;/* WP IE 10 */
      align-items: center;/* android 4.4 */
      justify-content: space-between;/* android 4.4 */
  }
  .price{
      color:red;
      font-weight:bold;
  }
  .number{
      margin-right:5px;
      font-size:16px;
  }
</style>