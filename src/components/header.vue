<template>
   <el-menu class="header">
        <div class="user-info">
          <!-- <h2>{{$t('menu.survey')}}</h2> -->
          <el-button type="primary" v-text="$t('common.add')">添加</el-button>
          <el-button type="info" style="margin-left: 0;" v-text="$t('common.set')">设置</el-button>
          <!-- <el-button type="success" @click="changeLocale">中文/EN</el-button> -->
          <el-dropdown trigger="click" @command="handleSetLanguage">
            <el-button type="success">
              <span class="el-dropdown-link">
                {{$t('common.languagechange')}}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="zh" :disabled="language==='zh'">中文</el-dropdown-item>
              <el-dropdown-item command="en" :disabled="language==='en'">English</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-button type="warning" @click="quit" v-text="$t('common.exit')">退出</el-button>
          <span style="color:#000;float: right;">{{name}}</span>
          <img class="user-logo" src="../assets/images/people.png"> 
        </div>
    </el-menu>
</template>
<script>

export default {
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
  computed:{
    language() {
      // return this.$store.getters.language
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
    },
    // changeLocale () {
    //   let locale = this.$i18n.locale
    //   locale === 'zh' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'zh'
    // },
    handleSetLanguage(lang) {
      this.$i18n.locale = lang
      // this.$store.dispatch('setLanguage', lang)
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
