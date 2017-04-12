<!--订单组件 -->

<template>
  <div class ="orderitem">
     <div class="topbox">
     <div class="shopbox">
        <img class="shopicon" src="../../assets/shopicon.jpg">
        <p class="shopname">猜猜我是谁小店</p>
        <img class="nexticon" src="../../assets/next.png">
        </div>
        <p class="status">交易成功</p>
     </div>
     <div class ="contentbox">
        <div class="goodsbox">
            <img class="goodsimg" src="../../assets/goods1.jpg">
            <div class="goodsinfobox">
                <p class="goodsname">精品收纳盒</p>
                <p class="goodsinfo">颜色：蓝色 型号：小号</p>
            </div>
        </div>
        <div class="goodsnumbox">
            <p>价格：￥20.5</p>
            <p>数量：x 1</p>
        </div>
     </div>
     <div class ="bottombox">
        <p class="sumbox">共1件商品 合计：￥20.50</p>
        <div class="operatebox">
            <p class="button">删除订单</p>
            <p class="button">评价</p>
        </div>
     </div>
  </div>
</template>
<script>
  export default({
    props: ['orderid'],
    data:function(){
      return{        
      }
    },
    mounted:function(){
     
    },
    methods:{    
     
    }
  })

</script>
<style scoped>
  .orderitem{
      width:100%;
      max-width:640px;
      height:212px;
      user-select: none;
      -webkit-user-select: none;
      overflow: hidden;
      position:relative;
  }
  .topbox{
      border-top:solid 1px #e5e5e5;
      height:40px;
      width:100%;
      max-width:640px;
      display:flex;
      -webkit-box-align: center;/* android 2.1-3.0, ios 3.2-4.3 */
      -webkit-align-items: center;/* Chrome 21+ */
      -ms-flex-align: center;/* WP IE 10 */
      align-items: center;/* android 4.4 */
      justify-content: space-between;/* android 4.4 */
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
  .nexticon{
      width:8px;
      height:auto;
  }
  .status{
      font-size:14px;
      color:#2ad2c9;
      float:right;
      margin-right:15px;
  }
  .contentbox{
      width:100%;
      max-width:640px;
      height:100px;
      background:#fafafa;
      display:flex;    
      justify-content: space-between;/* android 4.4 */
  }
 
  .goodsbox{
      background:#fafafa;
      text-align:left;
      padding-top:10px;
      display:flex;
  }
  .goodsimg{
      width:80px;
      height:auto;
      min-height:60px;
      max-height:80px;
      margin-left:15px;
  }
  .goodsinfobox{
      margin-left:5px;
      width:60%;
  }
  .goodsinfo{
      color:gray;
      font-size:12px;
  }
  .goodsname{
      font-size:16px;
  }
   .bottombox{
      width:100%;
      max-width:640px;
      height:50px;
  }
  .goodsnumbox{
      font-weight:bold;
      font-size:12px;
      padding-top:40px;
      text-align:right;
      margin-top:5px;
      margin-right:15px;
  }
  .sumbox{
      display:block;
      width:100%;
      max-width:640px;
      text-align:right;
      padding:5px;
      padding-right:15px;
      border-bottom:solid 1px #e5e5e5;
  }  
  .operatebox{
      height:40px; 
      width:100%;
      max-width:640px;     
      display:flex;
      -webkit-box-align: center;/* android 2.1-3.0, ios 3.2-4.3 */
      -webkit-align-items: center;/* Chrome 21+ */
      -ms-flex-align: center;/* WP IE 10 */
      align-items: center;/* android 4.4 */
      justify-content: flex-end;/* android 4.4 */      
  }
  .button{
      text-align:center;
      line-height:30px;
      width:80px;
      height:30px;
      border-radius:15px;
      border:solid 1px #e5e5e5;
      margin-right:15px;
  }
</style>