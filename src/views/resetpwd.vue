<template>
  <div>
    <h3>重置密码</h3>
    <!-- <p v-show="showTishi">{{tishi}}</p> -->
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
      <el-form-item label="手机/邮箱" prop="emailormobile">
        <el-input v-model="ruleForm.emailormobile" style="width: 89%;float: left"></el-input>
        <el-button v-bind="{'disabled':disabled}" type="success" v-on:click="sendCode" style="width: 10%;float: right;">{{btntxt}}</el-button>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input v-model="ruleForm.code"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" auto-complete="off"></el-input>
      </el-form-item>
    </el-form>
    <h3>
      <el-button type="success" v-on:click="reset('ruleForm')" class="btn">提交</el-button>
    </h3>
  </div>
</template>

<script>
import axios from 'axios'
export default{
  data(){
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    var validPhoneOrEmail=(rule, value,callback)=>{
      if(!value){
        callback(new Error('请输入手机号或邮箱'))
        this.disabled=true
      }else if (!this.isvalidPhone(value) && !this.isvalidEmail(value)){
        callback(new Error('请输入正确的手机号或邮箱'))
        this.disabled=true
      }else{
        callback()
        this.disabled=false
      }
    };
    return{
      emailOrMobile:'',
      Code:'',
      newPassword: '',
      disabled:false,
      time:0,
      btntxt:"获取验证码",
      ruleForm: {
        email:'',
        code:'',
        pass: '',
        checkPass: '',
      },
      rules: {
        emailormobile: [
          { required: true, validator: validPhoneOrEmail, trigger: 'blur' }
        ],
        code:[
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { min: 4, max: 6, message: '长度在 4 到 6 个字符', trigger: 'blur' }
        ],
        pass: [
          { required: true, validator: validatePass, trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ],
        checkPass: [
          { required: true, validator: validatePass2, trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ],
      }
    }
  },
  mounted(){
  /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
    if(window.localStorage.getItem("username")){
      this.$router.push('/station' )
    }
  },
  methods:{
    isvalidPhone(str) {
      const reg1 = /^1[3|4|5|7|8][0-9]\d{8}$/
      return reg1.test(str)
    },
    isvalidEmail(str) {
      const reg2 = /^\w+@([0-9a-zA-Z]+[.])+[a-z]{2,4}$/
      return reg2.test(str)
    },
    sendCode(){
      this.time=60;
      this.disabled=true;
      this.timer();
      let data = {"userInfo":this.ruleForm.emailormobile}
      axios.post("http://139.224.76.64:1111/register/sendCode",data).then(res=>{
        console.log(res);
        console.log(res.data);
        if(res.data.code == 0){
          this.$message({
            message: '发送成功',
            type: 'success'
          });
        }else{
          this.$message.error(res.data.msg)
        }
      })
    },
    timer(){
      if (this.time > 0) {
           this.time--;
           this.btntxt=this.time+"s后重新获取";
           setTimeout(this.timer, 1000);
           this.disabled=true;
      } else{
           this.time=0;
           this.btntxt="获取验证码";
           this.disabled=false;
      }
    },
    reset(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let data = {'userInfo':this.ruleForm.emailormobile,'code':this.ruleForm.code,'password':this.ruleForm.pass,}
          axios.post('http://139.224.76.64:1111/register/forgetPassword',data).then((res)=>{
              // console.log(res)
              if(res.data.code == "0"){
                this.$message({
                  message: '重置成功',
                  type: 'success'
                });
                this.$router.push('/' );
              }else{
                this.$message.error(res.data.msg);
              }
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      })
    }
  }
}
</script>

<style scoped>
.el-input__inner{
  float: left;
}
h3{
  text-align: center;
}
</style>
