<template>   
  <div class="footermenu" >
   <div v-if='currentpage ==0'>
        <home></home>
    </div>    
     <div v-if='currentpage ==1'>
        <recordpage></recordpage>
    </div>
     <div v-if='currentpage ==2'>
        <orderpage></orderpage>
    </div>
     <div v-if='currentpage ==3'>
        <mypage></mypage>
    </div>
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
        name: 'footermenu',
        data() {
            return {
                currentpage:0,
                height: window.innerHeight,
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
        left: 0;
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
    a{
        color:#777;
        height:100%;
        display:block;
        text-align:center;
    }
    .normalmenu{
        color:#777;
    }
    .activemenu{        
        color:#2ad2c9;
    }
    .background-style{
        background-image:url('../assets/footer-icon.png');
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
