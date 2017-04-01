<template>
  <div class="home">
        <div class="aui-nav">
            <ul class="aui-bar-tab" id="parent">
                <li >
                    <img src="../assets/home-active.png" />
                    <p class="aui-text-danger">
                        首页
                    </p>
                </li>
                <li>
                    <img src="../assets/home-active.png" />
                    <p>
                        发现
                    </p>
                </li>
                <li>
                    <img src="../assets/home-active.png" />
                    <p>
                        收藏
                    </p>
                </li>
                <li >
                    <img src="../assets/home-active.png"/>
                    <p>
                        我的
                    </p>
                </li>
            </ul>
        </div>
  </div>
</template>

<script>
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
    .aui-nav{
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
    img{
        margin:0;
        padding:0;
        width:40px;
    }
    li{
        float: left;
        width: 25%;
        text-align: center;
        height: 100%;
    }
</style>