<!--定义类型项目模板-->
<template id="typeitem-template">
    <div class="classifyitem" @click="gotoTypepage()">
    <div>
        <img class="classifyimg" :src="typeimg">
        <p class ="classifyname">{{typename}}</p>
    </div>
    </div>
</template>
<script type="text/javascript">
    import {
        mapGetters
    } from 'vuex';
    export default {
        name: 'space',
        template: '#typeitem',
        props: ['typeimg', 'typename'],
        data: function() {
            return {
                type: '',
            }
        },
        computed: mapGetters({
            currenttype: 'currenttype',
        }),
        methods: {
            gotoTypepage() {
                switch (this.typename) {
                    case "图书":
                        this.type = '1';
                        break;
                    case "卡券":
                        this.type = '2';
                        break;
                    case "服装":
                        this.type = '3';
                        break;
                    case "礼品":
                        this.type = '4';
                        break;
                    case "运动装备":
                        this.type = '5';
                        break;
                    case "电子设备":
                        this.type = '6';
                        break;
                    case "日用百货":
                        this.type = '7';
                        break;
                    case "其他":
                        this.type = '8';
                        break;
                }
                console.log(this.type);
                var thiz = this;
                this.$store.dispatch("saveType", thiz.type).then(() => {
                    console.log("保存数据成功！！！");
                }).catch(err => {
                    Toast('保存数据失败');
                });
                this.$router.push('/ClassifyPage');
            },
        }
    };
</script>
<style scoped>
    div {
        margin: 0;
        padding: 0;
    }
    
    .classifyitem {
        width: 25%;
        height: 60px;
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
        width: 35px;
        height: 35px;
    }
    
    .classifyname {
        font-size: 12px;
        color: #2ad2c9;
    }
</style>