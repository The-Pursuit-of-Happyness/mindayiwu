<!--轮播组件 -->

<template>
  <div class ="slider" ref="root">
     <div class="dianzui">
            <div class="dian"></div>
     </div>
    <div  class="sliderPanel" :class="{transitionAni:ani}" :style="{transform:translateX}">
      <div v-for="item in itemList" class="picbox" :style="{left:item.x+'px'}">
        <img  class ="imgstyle" :src="item.url">
      </div>            
    </div>
    <ul class="list-li" v-for="item of imgArray">
            <li>{{item.indexs}}</li>
    </ul> 
  </div>
</template>
<script>
    import image1 from '../../assets/lunbo1.jpg';
    import image2 from '../../assets/lunbo2.jpg';
    import image3 from '../../assets/lunbo3.jpg';
    import image4 from '../../assets/lunbo4.jpg';
    import image5 from '../../assets/lunbo5.jpg';
    import image6 from '../../assets/lunbo6.jpg';
  const SCREEN_WIDTH=document.body.clientWidth
  const SCREEN_HEIGHT=document.body.scrollHeight
  var left,center,right
  var selectIndex=0
  var count=0
  var second=4//slider 时间间隔
  var timer=null
  var ani=null
  var debugScale=1.0//测试用可调整为小于1
  var Direction={left:'left',right:'right'};
  var autoDirection=Direction.right
  var canClick=true
  export default({
    data:function(){
      return{
        ani:true,
        translateX:'scale('+debugScale+') translateX(0px)',
        imgArray:[
          {
            x:0,
            indexs:1,
            click_url:'#',
            url:image1,
            selected:false,
          },
          {
            x:0,
            indexs:2,
            click_url:'#',
            url:image2,
          },
          {
            x:0,
            indexs:3,
            click_url:'#',
            url:image3,
          },
          {
            x:0,
            indexs:4,
            click_url:'#',
            url:image4,

          },
          { 
            x:0,
            indexs:5,
            click_url:'#',
            url:image5,
          },
          {
            x:0,
            indexs:6,
            click_url:'#',
            url:image6,
          },
          {
            x:0,
            indexs:7,
            click_url:'#',
            url:image3,
          },
          {
            x:0,
            indexs:8,
            click_url:'#',
            url:image4,
          }
        ],
        itemList:[]
      }
    },
    mounted:function(){
      ani=this.$refs.root.querySelector('.sliderPanel')
      count=this.imgArray.length
      this.setIndex(selectIndex)
      //自动滚动切换图片
      this.slideAuto(second) 
    },
    methods:{
      slideRight:function () {
        selectIndex++
        if(selectIndex+1>count){
          selectIndex=0
        }else if(selectIndex<0){
          selectIndex=count-1
        }
        this.setIndex(selectIndex)
      },
      slideLeft:function () {
        selectIndex--
        if(selectIndex+1>count){
          selectIndex=0
        }else if(selectIndex<0){
          selectIndex=count-1
        }
        this.setIndex(selectIndex)
      },
      clickSliderCircle:function (index) {
        this.slideAuto(second)
        this.setIndexPre(index)
      },
      setIndexPre:function (index) {
        if(!canClick) return false
        canClick=false
        if(index==selectIndex)return
        var leftIndex=index
        var centerIndex=selectIndex
        var rightIndex=index
        for(var i=0;i<count;i++){
          if(i==selectIndex){
            this.imgArray[i].selected=true
          }else{
            this.imgArray[i].selected=false
          }
        }
        left=this.imgArray[leftIndex]
        center=this.imgArray[centerIndex]
        right=this.imgArray[rightIndex]
        left=JSON.parse(JSON.stringify(left))
        right=JSON.parse(JSON.stringify(right))
        left.x=-SCREEN_WIDTH
        center.x=0
        right.x=SCREEN_WIDTH
        left.index=leftIndex
        center.index=centerIndex
        right.index=rightIndex
        this.itemList=[left,center,right]
        if(index>selectIndex){
          autoDirection=Direction.right;
            +function(obj){
            obj.anicompted(
              'scale('+debugScale+') translateX('+0+'px)',
              'scale('+debugScale+') translateX('+-SCREEN_WIDTH+'px)',
              function(){
                obj.setIndex(index)
              })
          }(this)
          //右移
        }else if(index<selectIndex){
          //左移
          autoDirection=Direction.left;
          +function(obj){
            obj.anicompted(
              'scale('+debugScale+') translateX('+0+'px)',
              'scale('+debugScale+') translateX('+SCREEN_WIDTH+'px)',
              function(){
                obj.setIndex(index)
              })
          }(this)
        }
      },
      setIndex:function (index) {    
        var leftIndex=index-1
        var centerIndex=index
        var rightIndex=index+1
        $('.list-li>li').css({'background-color':'#F9263E'})
        $('.list-li>li').eq(index).css({'background-color':'orange'})
        $('.dian').animate({'width':SCREEN_WIDTH+'px'},1000)
        $('.dian').animate({'width':0+'px'},100)
        if(index<=0){
          index=0
          leftIndex=count-1
          centerIndex=index
          rightIndex=index+1
        }else if(index>=count-1){
          index=count-1
          leftIndex=index-1
          centerIndex=index
          rightIndex=0
        }
        selectIndex=index
        for(var i=0;i<count;i++){
            if(i==selectIndex){
              this.imgArray[i].selected=true
            }else{
              this.imgArray[i].selected=false
            }
        }
        left=this.imgArray[leftIndex]
        center=this.imgArray[centerIndex]
        right=this.imgArray[rightIndex]
        left.x=-SCREEN_WIDTH
        center.x=0
        right.x=SCREEN_WIDTH
        left.index=leftIndex
        center.index=centerIndex
        right.index=rightIndex
        this.itemList=[left,center,right]
      },
      slideAuto:function () {
          clearInterval(timer);
          +function (obj) {
            timer=setInterval(function () {
              if(autoDirection==Direction.left){
                obj.moveLeftAni()
              }else{
                obj.moveRightAni()
              }
            },second*2000)
          }(this)
      },
      moveLeftAni:function(){
          +function(obj){
            obj.anicompted(
              'scale('+debugScale+') translateX('+0+'px)',
              'scale('+debugScale+') translateX('+SCREEN_WIDTH+'px)',
              function(){
                obj.slideLeft()
              })
          }(this)
      },
      moveRightAni:function(){
        +function(obj){
            obj.anicompted(
              'scale('+debugScale+') translateX('+0+'px)',
              'scale('+debugScale+') translateX('+-SCREEN_WIDTH+'px)',
              function(){
                obj.slideRight()
              })
          }(this)
      },
      anicompted:function(fromStr,toStr,callBack){
        var handler=null,obj=this
        handler=function(){
          ani.removeEventListener('webkitTransitionEnd',handler,false)
          callBack()
          obj.ani=false
          obj.translateX=fromStr
          canClick=true
        }
        ani.removeEventListener('webkitTransitionEnd',handler,false)
        ani.addEventListener('webkitTransitionEnd',handler,false)
        this.ani=true
        this.translateX=toStr
      }
    }
  })

</script>
<style scoped>
  .slider{
      width:100%;
      max-width:640px;
      height:152px;
      user-select: none;
      -webkit-user-select: none;
      overflow: hidden;
      position:relative;
  }
  .sliderPanel{
      width:100%;
      max-width:640px;
      height:150px;
  }
  .transitionAni{
    transition: all 1s ease-in-out;
    /*transition: transform 1s;*/
  }
  .sliderBar{
    width:100%;
    height: auto;
    position: absolute;
  }
  .picbox{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    overflow: hidden;
    /*transform: scale(0.9);*/
    /*opacity: 0.2;*/
    transition: all 0.45s ease;
  }
  .imgstyle{
      width:100%;
      height:150px;
  }
  .list-li{
    position: relative;
    bottom: 20px;
    left:25%;
}
.list-li li{
    float:left;
    width: 15px;
    height: 15px;
    background-color: #F9263E;
    line-height: 12px;
    text-align: center;
    border-radius: 50%;
    margin-left: 10px;
    color: #fff;
    font-size: 12px;
    padding-top:2px;
}
  /* 	点缀 */
.dianzui{
    width: 100%;
    height: 2px;
    background-color: #ccc;
    position: absolute;
    bottom: 0px;
}
.dian{
    width: 1px;
    height:2px;
    background-color: red;
}
  /*@keyframes arrowOut-animation {*/
    /*from{*/
      /*transform: translateY(0px);*/
    /*}*/
    /*to{*/
      /*transform: translateY(15px);*/
      /*!*width:200px;*!*/
    /*}*/
  /*}*/
  /*@keyframes arrowIn-animation {*/
    /*from{*/
      /*transform: translateY(15px);*/
    /*}*/
    /*to{*/
      /*transform: translateY(0px);*/
      /*!*height: 200px;*!*/
    /*}*/
  /*}*/
  /*.arrowOut{*/
    /*animation: arrowOut-animation;*/
    /*animation-duration: 0.5s;*/
    /*animation-timing-function: ease-out;*/
    /*animation-fill-mode:forwards;*/
  /*}*/
  /*.arrowIn{*/
    /*animation: arrowIn-animation;*/
    /*animation-duration: 0.5s;*/
    /*animation-timing-function:ease-out;*/
    /*animation-fill-mode:forwards;*/

  /*}*/
</style>