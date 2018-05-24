<template>
   <el-menu class="header">
        <div class="user-info">
          <el-button type="primary">添加</el-button>
          <el-button type="success">设置</el-button>
          <el-select v-model="value3" placeholder="请选择">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
          <el-button type="warning" @click="quit">退出</el-button>
          <span style="color:#000;float: right;">{{name}}</span>
          <img class="user-logo" src="../assets/images/people.png"> 
        </div>
    </el-menu>
</template>
<script>
export default {
  // props: {
  //   user: {
  //   }
  // },
  data() {
    return {
      name: '',
      options: [{
          value: '选项1',
          label: '简体中文'
        }, {
          value: '选项2',
          label: 'English'
        }],
        value3: ''
      }
  },
  mounted(){
    // /*页面挂载获取保存的cookie值，渲染到页面上*/
    let username = window.localStorage.getItem("username");
    console.log(username);
    this.name = username;
    /*如果用户名不存在，则跳转到登录页*/
    if(!username){
      this.$router.push('/')
    }
  },
  methods:{
    quit(){
      /*删除cookie*/
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      localStorage.removeItem('userType');
      this.$router.push('/')
    }
  }
}
</script>
<style>
body{
  margin: 0;
  padding: 0;
}
.header {
  position: relative;
  box-sizing: border-box;
  width: 94%;
  height: 70px;
  font-size: 22px;
  line-height: 70px;
  color: #fff;
  float: right;
  border-bottom: 1px solid #ddd;
}
.user-info {
  float: right;
  padding-right: 20px;
  font-size: 16px;
  color: #fff;
}
.user-logo{
  display: block;
  float: right;
  margin: 20px 10px;
}
.right-menu-item {
  display: inline-block;
  margin: 0 8px;
}
</style>
