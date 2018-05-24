<template>
<div class="login-wrap">
    <div class="ms-title">登录</div>
    <div class="ms-login">
        <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="0px" class="demo-ruleForm">
            <el-form-item prop="username">
                <el-input v-model="loginForm.username" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" placeholder="密码" v-model="loginForm.password" @keyup.enter.native="handleLogin"></el-input>
            </el-form-item>
            <!-- `checked` 为 true 或 false -->
            <!-- <el-checkbox v-model="checked">记住密码</el-checkbox> -->
    				<router-link to="/resetpwd">忘记密码</router-link>
            <div class="login-btn">
                <el-button  @click.native.prevent="handleLogin">登录</el-button>
                <el-button @click='register' style="margin-left: 0">注册</el-button>
            </div>
        </el-form>
    </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    const validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error('密码不能小于6位'))
      } else {
        callback()
      }
    }
    return {
      checked: true,
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        username: [{
          required: true,
          trigger: 'blur',
          validator: validateUsername
        }],
        password: [{
          required: true,
          trigger: 'blur',
          validator: validatePass
        }]
      },
      loading: true
    }
  },
  mounted(){
  /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
    if(window.localStorage.getItem("username")){
      this.$router.push('/station' )
    }
  },
  methods: {
    handleLogin() {
      // this.$refs.loginForm.validate(valid => {
      //   if (valid) {
	        let data = {'userInfo':this.loginForm.username,'passWord':this.loginForm.password}
	        /*接口请求*/
	        axios.post('http://139.224.76.64:1111/user/login1',data).then((res) => {
	          // console.log(res);
	          console.log(res.data.data);
	          if(res.data.code=="0"){
	            window.localStorage.setItem("token",res.data.data);
	            window.localStorage.setItem("username",this.loginForm.username);
	            axios({
							  method: 'post',
							  url: 'http://139.224.76.64:1111/user/find',
							  headers: {"token": res.data.data}
							}).then((res) => {
								console.log("userType："+res.data.data.userType);
                window.localStorage.setItem("userType",res.data.data.userType);
	            	this.$router.push('/station')
							})
	          }else{
	            this.$message.error(res.data.msg)
	          }
	        })
      //   } else {
      //     console.log('error submit!!')
      //     return false
      //   }
      // })
    },
    register(){
    	this.$router.push('/register')
    }
  }
}

</script>
<style>

.head-log {
    height: 200px;
}

.company-log {
    width: 100px;
}

.login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
}

.ms-title {
    text-align: center;
    font-size: 30px;
    color: #000;
}

.ms-login {
    width: 300px;
    height: 140px;
    padding: 40px;
    border-radius: 5px;
    background: #fff;
    margin: 0 auto;
}

.login-btn {
    text-align: center;
}

.login-btn button {
    width: 50%;
    height: 36px;
    color:#FFFFFF;
    background-color:#00d1b2;
    float: left;
}
.login-btn button:hover {
    color:#FFFFFF;
    background-color:#00d1b2;
}

.user-defined-style {
    top: 800px;
}

</style>