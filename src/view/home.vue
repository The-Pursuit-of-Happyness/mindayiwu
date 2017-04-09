<template>
  <div class="home">
      <slider></slider>
      <div class="classifybox">
          <div class="classifyitem">
              <div>
                <img class="classifyimg" src="../assets/logo.png">
                <p class ="classifyname">图书</p>
              </div>
          </div>
         <div class="classifyitem">
              <div>
                <img class="classifyimg" src="../assets/logo.png">
                <p class ="classifyname">图书</p>
              </div>
          </div>
          <div class="classifyitem">
              <div>
                <img class="classifyimg" src="../assets/logo.png">
                <p class ="classifyname">图书</p>
              </div>
          </div>
         <div class="classifyitem">
              <div>
                <img class="classifyimg" src="../assets/logo.png">
                <p class ="classifyname">图书</p>
              </div>
          </div>
          <div class="classifyitem">
              <div>
                <img class="classifyimg" src="../assets/logo.png">
                <p class ="classifyname">图书</p>
              </div>
          </div>
          <div class="classifyitem">
              <div>
                <img class="classifyimg" src="../assets/logo.png">
                <p class ="classifyname">图书</p>
              </div>
          </div>
          <div class="classifyitem">
              <div>
                <img class="classifyimg" src="../assets/logo.png">
                <p class ="classifyname">图书</p>
              </div>
          </div>
          <div class="classifyitem">
              <div>
                <img class="classifyimg" src="../assets/logo.png">
                <p class ="classifyname">图书</p>
              </div>
          </div>
          
      </div>
      <space></space>
      <recommenitem></recommenitem>
      <space></space>
      <recommenitem></recommenitem>
      <space></space>
      <recommenitem></recommenitem>
      <space></space>
      <recommenitem></recommenitem>
      <div class="bottombox"></div>
  </div>
</template>

<script>
    export default {
        name: 'home',
        data() {
            return {
                msg: '',
            }
        },
        created() {

            //init 
            this.init();
        },
        methods: {
            //初始化页面
            init() {},
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .home {
        max-width: 640px;
        margin: 0 auto;
    }
    
    .classifybox {
        width: 100%;
        max-width: 640px;
        height: 120px;
    }
    
    .classifyitem {
        width: 25%;
        height: 60px;
        float: left;
        display: flex;
        -webkit-box-align: center;
        /* android 2.1-3.0, ios 3.2-4.3 */
        -webkit-align-items: center;
        /* Chrome 21+ */
        -ms-flex-align: center;
        /* WP IE 10 */
        align-items: center;
        /* android 4.4 */
        justify-content: center;
        /* android 4.4 */
    }
    
    .classifyimg {
        width: 30px;
        height: 30px;
    }
    
    .classifyname {
        font-size: 10px;
        color: #2ad2c9;
    }
    
    .bottombox {
        height: 60px;
        width: 100%;
        max-width: 640px;
        text-align: left;
    }
</style>