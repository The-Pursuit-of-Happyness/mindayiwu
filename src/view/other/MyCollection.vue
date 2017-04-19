<template>
    <div class="mycollection">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
                <div class="swiper-slide">Slide 4</div>
                <div class="swiper-slide">Slide 5</div>
                <div class="swiper-slide">Slide 6</div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
            
            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            
            <!-- 如果需要滚动条 -->
            <div class="swiper-scrollbar"></div>
        </div>
    </div>
</template>

<script>  
//   import Swiper from '../../../static/js/swiper-3.4.2.jquery.min.js'
//  require('../../../static/css/swiper-3.4.2.min.css')  
    export default{
        data:function(){
            return{

            }
        },
         created() {
        },
       
        methods:{
            init:function(){
            },
        },
        components: {},
        mounted () {
            console.log('挂载好了')
            var mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            loop: true,
            pagination: '.swiper-pagination',
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
                // 如果需要滚动条
            scrollbar: '.swiper-scrollbar',
            autoplay:2000,
            })
            console.log(mySwiper)
        }
    }
</script>

<style scoped>
    .swiper-container {
        width:100%;
        max-width: 640px;
        height: 300px;
    }  
</style>