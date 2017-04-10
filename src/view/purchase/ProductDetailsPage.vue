<template>   
  <div class="productdetailspage" >
        <div>
            <img class="productimage" src="../../assets/goods3.jpg">
        </div>
        <div class="pricebox">
            <p class="price">$ 3.50</p>
            <P class="number">共 2件</P>
        </div>
        <p></p>
        <div class="footer" :style="{'top':(height-12) + 'px'}">
            <ul>
                <li @click="currentpage = 0;" v-bind:class="[{ 'activemenu': currentpage ==0  }, 'normalmenu']">
                   <div class="background-style mainpage" v-bind:class="[{ 'mainpage-active': currentpage ==0  }, 'normalmenu']"></div>
                        首页
                </li>
                <li  @click="currentpage = 1;" v-bind:class="[{ 'activemenu': currentpage ==1 }, 'normalmenu']">
                <div class="background-style recordpage" v-bind:class="[{ 'recordpage-active': currentpage ==1  }, 'normalmenu']"></div>
                       记录
                </li>
                <li  @click="currentpage = 2;" v-bind:class="[{ 'activemenu': currentpage ==2  }, 'normalmenu']">
                <div class="background-style orderpage" v-bind:class="[{ 'orderpage-active': currentpage ==2  }, 'normalmenu']"></div>
                       订单
                </li>
                <li  @click="currentpage = 3;" v-bind:class="[{ 'activemenu': currentpage ==3 }, 'normalmenu']">
                 <div class="background-style mypage" v-bind:class="[{ 'mypage-active': currentpage ==3  }, 'normalmenu']"></div>
                       我的
                </li>
            </ul>
        </div>
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
        display:flex;
        height:18px;
        -webkit-box-align: center;/* android 2.1-3.0, ios 3.2-4.3 */
        -webkit-align-items: center;/* Chrome 21+ */
        -ms-flex-align: center;/* WP IE 10 */
        align-items: center;/* android 4.4 */
        justify-content: space-between;/* android 4.4 */
    }
    .price{   
        font-size:14px;
        padding-left:15px;
        color:red;
        font-weight:bold;
    }
    .number{
        font-size:12px;
        color:gray;
        padding-right:15px;
    }
    .footermenu{
        width: 100%;
        max-width: 640px;
        margin:0 auto;
    }
    .footer{
        width: 100%;
        max-width: 640px;
        height: 60px;
        position: fixed;
        bottom: 0;
        overflow: hidden;
        background-color: #FFF;
        border-top: medium none #ECEDED;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
        z-index: 10;
    }
    ul{
		height:80px;
		margin:0;
		list-style-type:none;
	}
    .normalmenu{
        color:#777;
    }
    .activemenu{        
        color:#2ad2c9;
    }
    .background-style{
        background-image:url('../../assets/footer-icon.png');
        background-repeat:no-repeat;
        background-size:30px auto;
        height:31px;
        margin:5px auto auto;
    }
    .mainpage{        
        background-position: center -124px;
    }
     .mainpage-active{
        background-position: center 0;
    }
    .recordpage{
        background-position: center -156px;
    }
    .recordpage-active{
        background-position: center -31px;
    }
    .orderpage{
        background-position: center -187px;
    }
    .orderpage-active{
        background-position: center -62px;
    }
    .mypage{
        background-position: center -218px;
    }
    .mypage-active{
        background-position: center -93px;
    }
    li{
        float: left;
        width: 25%;        
        height: 100%;
    }
</style>
