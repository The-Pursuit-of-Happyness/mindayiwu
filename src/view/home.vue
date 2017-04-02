<template>
  <div class="home">
        <div class="footer">
            <ul class="aui-bar-tab" id="parent">
                <li >
                    <a href="Home">
                    <div class="background-style mainpage"></div>
                        首页
                    </a>
                </li>
                <li>
                    <a href="Recordpage">
                    <div class="background-style recordpage"></div>
                        记录
                    </a>
                </li>
                <li>
                     <a href="Orderpage">
                    <div class="background-style orderpage"></div>
                        订单
                    </a>
                </li>
                <li >               
                 <a href="Mypage">
                    <div class="background-style mypage"></div>
                        我的
                    </a>
                </li>
            </ul>
        </div>
  </div>
</template>

<script>
    $('.footer ul li a').click(function(e){
        e.preventDefault();
        //修改li的active的位置
        $(this).parent().addClass('active').siblings('.active').removeClass('active');
        //修改右侧主体中的div的active的位置
        var id = $(this).attr('href');
        $(id).addClass('active').siblings('.active').removeClass('active');
    });
    export default {
        name: 'home',
        data() {
            return {
                msg: '',
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .home{
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
        margin:0 auto;
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
    .home a:active{
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

    .mainpage:active{
        background-position: center 0;
    }
    .recordpage{
        background-position: center -156px;
    }
    .recordpage:active{
        background-position: center -31px;
    }
    .orderpage{
        background-position: center -187px;
    }
    .orderpage:active{
        background-position: center -62px;
    }
    .mypage{
        background-position: center -218px;
    }
    .mypage:active{
        background-position: center -93px;
    }
    li{
        float: left;
        width: 25%;        
        height: 100%;
    }
</style>