<template>
    <div id="searchgoods">
        <div class="topbox">
            <input placeholder="搜索商品" class="searchinput"></intput>
        </div>
        <div class="contentbox">
            <div class="leftbox">
                <div v-for="type of types">
                    <a class="typeitem">
                        <p class="typename">{{type.name}}</p>
                        <img :src="type.imgurl" class="typeicon">
                    </a>
                </div>
            </div>
            <div class="rightbox" :style="{'height':(height-70) + 'px'}">
                <div v-for="type of types">
                    <p class="typesname">{{type.name}}</p>
                    <div v-for="item of items" class="items">
                        <div class="itembox">
                            <img :src="item.iconurl" class="itemicon">
                            <p>{{item.name}}</p>                            
                        <div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottombox"></div>
    </div>
</template>

<script>
    export default {
        name: "searchgoods",
        data() {
            return {
                height: window.clientHeight,
                types: [{
                    name: '日用百货',
                    imgurl: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1432781925,4087601980&fm=23&gp=0.jpg"
                }, {
                    name: '日用百货',
                    imgurl: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1432781925,4087601980&fm=23&gp=0.jpg"
                }, {
                    name: '日用百货',
                    imgurl: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1432781925,4087601980&fm=23&gp=0.jpg"
                }, {
                    name: '日用百货',
                    imgurl: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1432781925,4087601980&fm=23&gp=0.jpg"
                }, {
                    name: '日用百货',
                    imgurl: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1432781925,4087601980&fm=23&gp=0.jpg"
                }, {
                    name: '日用百货',
                    imgurl: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1432781925,4087601980&fm=23&gp=0.jpg"
                }],
                items: [{
                    name: '衣服',
                    iconurl: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1432781925,4087601980&fm=23&gp=0.jpg'
                }, {
                    name: '衣服',
                    iconurl: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1432781925,4087601980&fm=23&gp=0.jpg'
                }, {
                    name: '衣服',
                    iconurl: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1432781925,4087601980&fm=23&gp=0.jpg'
                }, {
                    name: '衣服',
                    iconurl: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1432781925,4087601980&fm=23&gp=0.jpg'
                }, {
                    name: '衣服',
                    iconurl: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1432781925,4087601980&fm=23&gp=0.jpg'
                }, {
                    name: '衣服',
                    iconurl: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1432781925,4087601980&fm=23&gp=0.jpg'
                }, {
                    name: '衣服',
                    iconurl: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1432781925,4087601980&fm=23&gp=0.jpg'
                }, ],
            }
        },
        methods: {

        }
    }
</script>

<style scoped>
    .topbox {
        width: 100%;
        max-width: 640px;
        background: #f1f1f1;
        height: 50px;
        display: flex;
        -webkit-box-align: center;
        /* android 2.1-3.0, ios 3.2-4.3 */
        -webkit-align-items: center;
        /* Chrome 21+ */
        -ms-flex-align: center;
        /* WP IE 10 */
        align-items: center;
    }
    
    .searchinput {
        width: 100%;
        height: 40px;
        max-width: 620px;
        margin-left: 10px;
        margin-right: 10px;
        text-align: center;
        background: white;
        border-radius: 5px;
        border-style: none;
    }
    
    .leftbox {
        float: left;
        background: #f1f1f1;
        width: 30%;
        height: auto;
    }
    
    .typename {
        font-size: 15px;
        padding-right: 10px;
    }
    
    .typeicon {
        width: 15px;
        height: 15px;
    }
    
    .typeitem {
        padding-left: 15px;
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    
    .typeitem:active {
        background: white;
        color: #2ad2c9;
    }
    
    .rightbox {
        float: left;
        width: 70%;
        overflow: scroll;
        background: pink;
    }
    
    .typesname {
        font-size: 15px;
        padding-left: 15px;
        text-align: left;
        display: block;
        width: 100%;
        height: 40px;
        clear: both;
    }
    
    .items {
        width: 25%;
        float: left;
    }
    
    .itembox {
        height: 80px;
        display: flex;
        justify-content: center;
        -webkit-box-align: center;
        /* android 2.1-3.0, ios 3.2-4.3 */
        -webkit-align-items: center;
        /* Chrome 21+ */
        -ms-flex-align: center;
        /* WP IE 10 */
        align-items: center;
        display: inline-block;
    }
    
    .itemicon {
        width: 40px;
        height: 40px;
    }
    
    .bottombox {
        clear: both;
        height: 60px;
        width: 100%;
        max-width: 640px;
    }
</style>