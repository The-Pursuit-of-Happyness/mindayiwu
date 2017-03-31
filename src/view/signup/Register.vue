<template>
	<div class="loginbox">
        <img  class ="logobox" src="../../assets/logo.png">
        <p class ="title">欢迎注册</p>
        <div>
            <input class ="nameinput" placeholder ="请输入邮箱" v-model="username" maxlength="20"></input>
        </div>
        <div>
             <input class ="nameinput" type ="password" placeholder ="请输入密码" v-model="password" maxlength="20" minlength="6">
        </div>
         <div>
             <input class ="nameinput" type ="password" placeholder ="请再次输入密码" v-model="password" maxlength="20" minlength="6">
        </div>
        <div class="qrbox">
            <input class ="qrinput" placeholder="图片验证码" v-model ="piccode" maxlength ="4" minlength ="4">
            <button class="qrcodeimg"  id="code" @click="createCode()">{{code}}</button>
        </div>
         <button class="regbut" @click ="register()">注册</button>
	</div>
</template>

<script>
    import {mapGetters} from 'vuex';
	export default {
        data (){
			return {                
                action_option1: '否', 
                code :"",
                username:'',
                password:'',
                piccode:'',
                message:'',
			}
		},
        created () {
           this.createCode();
         },
         methods: {
            createCode(){  
                this.code = "";   
                var codeLength = 4;//验证码的长度  
                var checkCode = document.getElementById("code");   
                var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',  
                'S','T','U','V','W','X','Y','Z');//随机数  
                for(var i = 0; i < codeLength; i++) {//循环操作  
                    var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）  
                    this.code += random[index];//根据索引取得随机数加到code上  
                } 
            },
            //校验验证码  
            register(){
                var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/;
                var email = "example@qq.com";
                console.log(reg.test(email)); // true
                var inputCode = this.piccode.toUpperCase(); //取得输入的验证码并转化为大写        
                if(inputCode.length <= 0) { //若输入的验证码长度为0  
                    alert("请输入验证码！"); //则弹出请输入验证码  
                }         
                else if(inputCode != this.code ) { //若输入的验证码与产生的验证码不一致时  
                    alert("验证码输入错误！@_@"); //则弹出验证码输入错误  
                    this.createCode();//刷新验证码  
                    this.piccode ='';
                }
                else { //输入正确时  
                    var _self = this;
                    $.ajax({
                        type: 'POST',
                        url: 'http://xxxx/login/register',
                        data:{'username': _self.username,'password':_self.password},
                        success:function(data) {
                            _self.message = JSON.stringify(data);
                            sessionStorage.setItem('accessToken', data.access_token)
                            sessionStorage.setItem('userName',_self.username)
                            console.log("hello !!!!!!!");
                            console.log(_self.message);
                            alert("^-^"); //弹出^-^  
                        }
                    });
                }             
            }, 
        },
	}
</script>

<style lang="scss" scoped>
    .loginbox
    {
        text-align:center;
        margin:auto;
        padding:0;
          /* 水平布局下的子元素 水平居中 */
        -webkit-box-pack: center;/* android 2.1-3.0, ios 3.2-4.3 */
        -webkit-justify-content: center;/* Chrome 21+ */
        -ms-flex-pack: center;/* WP IE 10 */
        justify-content: center;/* android 4.4 */
    }
    .logobox{
        text-align:center;
        margin:20px auto 20px;
        padding:0;
        width:150px;
        height:150px;
        
    }
    .title{
        font-size:20px;
    }
    .nameinput{
        margin-top:15px;
        font-size:20px;
        width:360px;
        height:44px;
        border-radius:5px;
    }
    .qrbox{
        margin-top:15px;
        height:44px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .qrinput{
        margin:0;
        padding:0;
        height:44px;
        width:230px;
        font-size:20px;
        border-radius:5px;
    }
    .qrcodeimg{
        font-size:20px;
        height:44px;
        width:120px;
        margin-left:10px;
        background:#eeeeee;
    }       
    .regbut{
        text-align:center;
        font-size:16px;
        margin-top:20px;
        width:360px;
        height:44px;
        border:solid 1px black;
    }
</style>
