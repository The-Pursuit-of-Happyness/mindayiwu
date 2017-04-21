<template>
    <div class="mycollection">
        <div class="topbox"></div>
        <p class="title">我的收藏夹</p> 
        <space></space>       
        <div v-for="collectionItem of collectionItems">
             <collectionitem :goodsimage = "collectionItem.img" :goodsname = "collectionItem.goodsname" :price = "collectionItem.price"></collectionitem>
        </div>
    </div>
</template>

<script>  
    export default{
        data:function(){
            return{
                collectionItems:[],
            }
        },
         created() {
             this.loadCollection();
        },
        components: {},
        methods: {
            seeClassify(){
                this.$router.push('/ClassifyPage');
            },
            loadCollection : function(me){
                var _self = this;
                $.ajax({
                    type: 'GET',
                    url: '../../static/json/goodsinfo.json',
                    dataType: 'json',
                    success: function(data){
                        if(data.code == 200){
                            _self.collectionItems = data.data.recommendItems;
                        }
                    },
                    error: function(xhr, type){
                        console.log('Ajax error!');
                    }
                });
            }
        },
    }
</script>

<style scoped>
    .mycollection {
        width:100%;
        max-width: 640px;
    }
    .topbox{
        width:100%;
        max-width:640px;
        height:40px;
    }
    .title{
        position: fixed;
        top:0;
        z-index:10;
        display:block;
        width:100%;
        max-width:640px;
        height:40px;
        font-size:18px;
        line-height:40px;
        background:white;
    }
</style>