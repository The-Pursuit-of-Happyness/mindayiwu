<template>
 <div class="linkitem">
    <div class="iconandtitle">
        <img class="itemicon" :src = imgurl>
        <p class="title">{{title}}</p>
    </div>
    <img class="nexticon" src="../../assets/next.png">
 </div>
</template>

<script>
    export default({
        props:['title','imgurl'],
        data:function(){
            return {}
        },
        methods:{

        }
    })
</script>

<style scoped>
    .linkitem{
        width:100%;
        max-width:640px;
        height:50px;
        display:flex;
        -webkit-box-align: center;/* android 2.1-3.0, ios 3.2-4.3 */
        -webkit-align-items: center;/* Chrome 21+ */
        -ms-flex-align: center;/* WP IE 10 */
        align-items: center;/* android 4.4 */
        justify-content: space-between;/* android 4.4 */
        border-bottom:solid 1px #ccc;
    }
    .iconandtitle{
        display:flex;
        -webkit-box-align:center;
        -webkit-align-items:center;
        -ms-flex-align:center;
        align-items:center;
    }
    .itemicon{
        margin-left:15px;
        width:20px;
        height:20px;
    }
    .title{
        font-size:14px;
        margin-left:15px;
    }
    .nexticon{
        width:8px;
        height:auto;
        margin-right:15px;
    }
</style>