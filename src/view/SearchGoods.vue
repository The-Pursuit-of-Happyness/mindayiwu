<template>
    <div id="searchgoods">        
        <mt-search
            v-model="searchtext"
            cancel-text="取消"
            placeholder="搜索商品"
            style="height:6vh;">
            <mt-cell
                v-for="item in result"
                :title="item.title"
                :value="item.value">
            </mt-cell>
        </mt-search>
        <div v-if="isshowcontent" class="contentbox">
            <div class="leftbox">
                <div v-for="type of types">
                    <a class="typeitem" v-bind:class="[{ 'typeitem-active': currentitem ==  type.index  }, 'typeitem']" @click="currentitem=type.index;selectTab();">
                        <p class="typename">{{type.name}}</p>
                        <img :src="type.imgurl" class="typeicon">
                    </a>
                </div>
            </div>
            <div class="rightbox">
                <div v-for="type of types">
                    <p class="typesname">{{type.name}}</p>
                    <div v-for="item of items" class="items">
                        <div class="itembox">
                            <img :src="item.iconurl" class="itemicon">
                            <p>{{item.name}}</p>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottombox"></div>
    </div>
</template>

<script>
    import {
        WEB_SERVER as port
    } from '../config';
    import imgurl from './../assets/goods3.jpg';
    import book from './../assets/book.jpg';
    import card from './../assets/card.jpg';
    import cloth from './../assets/cloth.jpg';
    import gift from './../assets/gift.jpg';
    import sport from './../assets/sport.jpg';
    import electronics from './../assets/electronics.jpg';
    import commodity from './../assets/commodity.jpg';
    import other from './../assets/other.jpg';
    export default {
        name: "searchgoods",
        data() {
            return {
                searchtext: '',
                isshowcontent: true,
                height: window.clientHeight,
                types: [{
                    name: '图书',
                    imgurl: book,
                    index: 0,
                }, {
                    name: '卡卷',
                    imgurl: card,
                    index: 1,
                }, {
                    name: '服装',
                    imgurl: cloth,
                    index: 2,
                }, {
                    name: '礼品',
                    imgurl: gift,
                    index: 3,
                }, {
                    name: '运动装备',
                    imgurl: sport,
                    index: 4,
                }, {
                    name: '电子设备',
                    imgurl: electronics,
                    index: 5,
                }, {
                    name: '日用百货',
                    imgurl: commodity,
                    index: 6,
                }, {
                    name: '其他',
                    imgurl: other,
                    index: 7,
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
                result: [{
                    title: 'item1',
                    value: 'link1'
                }, {
                    title: 'item2',
                    value: 'link2'
                }, {
                    title: 'item3',
                    value: 'link3'
                }, {
                    title: 'item4',
                    value: 'link4'
                }, {
                    title: 'item5',
                    value: 'link5'
                }, ],
                page: 0,
                currentitem: 0,
            }
        },
        methods: {
            selectTab() {
                var _self = this;
                // $.ajax({
                //     type: 'GET',
                //     url: port + 'goods/' + Number.parseInt(_self.currenttype) + '/categoryList/' + this.page,
                //     success: function(data) {
                //         console.log(data);
                //         if (data.code == 200) {
                //             for (var i = 0; i < 16 && i < data.data.record_list.length; i++) {
                //                 var obj = data.data.record_list[i];
                //                 var goods = {};
                //                 goods.img = obj.barter_showpictures;                                
                //                 goods.goodsname = obj.barter_commodityname;                               
                //                 goods.id = obj.barter_commoditynumber;
                //                 _self.items.push(goods);
                //             }
                //         } else {
                //             alert(data.message);
                //         }
                //     },
                //     error: function(xhr, type) {
                //         console.log('Ajax error!');
                //     }
                // });
                console.log(this.currentitem);
            },
            search() {
                var _self = this;
                this.searchtext
                $.ajax({
                    type: 'GET',
                    url: port + 'goods/' + _self.searchtext + '/lookupList/' + _self.page,
                    dataType: 'json',
                    success: function(data) {
                        if (data.code == 200) {
                            _self.result = [];
                            console.log(data.data);
                            //_self.recommendItems = data.data.recommendItems;
                            var datas = data.data.record_list;
                            for (var data of datas) {
                                var obj = {};
                                obj.title = data.barter_commodityname;
                                obj.value = data.barter_descriptioninform;
                                if (obj.value.length > 15) {
                                    obj.value = obj.value.slice(0, 15) + '...';
                                }
                                _self.result.push(obj);
                            }

                        }
                    },
                    error: function(xhr, type) {
                        console.log('Ajax error!');
                    }
                });
            }
        },
        created() {

        },
        watch: {
            // 如果 question 发生改变，这个函数就会运行
            searchtext: function() {
                this.isshowcontent = this.searchtext.length == '' ? true : false;
                this.search();
            }
        },
    }
</script>

<style scoped>
    #searchgoods {
        margin: 0;
        padding: 0;
        min-height: 500px;
    }
    
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
    
    .contentbox {
        width: 100%;
        max-width: 640px;
        height: 100%;
    }
    
    .leftbox {
        float: left;
        background: #f1f1f1;
        width: 30%;
        height: auto;
        max-height: 80vh;
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
        color: black;
        padding-left: 15px;
        width: 100%;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    
    .typeitem-active {
        background: white;
        color: #2ad2c9;
    }
    
    .rightbox {
        width: 70%;
        height: 100%;
        max-height: 85vh;
        overflow-y: scroll;
        overflow-x: hidden;
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