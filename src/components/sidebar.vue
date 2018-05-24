<template>
    <div class="sidebar">
      <el-menu router :default-active="$route.path" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
          <img src="../assets/images/logo.png" style="height:120px;width:100%;vertical-align:bottom">
          <el-menu-item index="/station">
            <i class="el-icon-menu"></i>
            <span slot="title">电站管理</span>
          </el-menu-item>
          <el-menu-item index="/situation" v-if="userType == 2 || userType == 5 || userType == 6">
            <i class="el-icon-document"></i>
            <span slot="title">概况</span>
          </el-menu-item>
          <el-menu-item index="/collector" v-if="userType == 5 || userType == 6">
            <i class="el-icon-setting"></i>
            <span slot="title">设备入库</span>
          </el-menu-item>
          <el-menu-item index="/collectorManage" v-if="userType == 2 || userType == 5 || userType == 6">
            <i class="el-icon-bell"></i>
            <span slot="title">设备管理</span>
          </el-menu-item>
          <el-menu-item index="/workOrder">
            <i class="el-icon-news"></i>
            <span slot="title">工单管理</span>
          </el-menu-item>
          <el-menu-item index="/stationAlarm">
            <i class="el-icon-edit"></i>
            <span slot="title">报警中心</span>
          </el-menu-item>
          <el-menu-item index="/notice">
            <i class="el-icon-upload"></i>
            <span slot="title">消息中心</span>
          </el-menu-item>
          <el-menu-item index="/collectorRenewal" v-if="userType == 1 || userType == 5 || userType == 6">
            <i class="el-icon-location"></i>
            <span slot="title">续费</span>
          </el-menu-item>
          <el-menu-item index="/user" v-if="userType == 5 || userType == 6">
            <i class="el-icon-view"></i>
            <span slot="title">用户管理</span>
          </el-menu-item>
          <el-menu-item index="/distCollector" v-if="userType == 2">
            <i class="el-icon-service"></i>
            <span slot="title">下级分销商</span>
          </el-menu-item>
          <el-menu-item index="/collectorException" v-if="userType == 5 || userType == 6">
            <i class="el-icon-bell"></i>
            <span slot="title">异常数据</span>
          </el-menu-item>
      </el-menu>
    </div>
</template>

<script>
export default {
  name: 'vSidebar',
  data(){
    return{
      userType:this.userType,
      isActive:this.isActive
    }
  },
  mounted(){
  /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
    let userType=window.localStorage.getItem("userType");
    this.userType=userType;
  },
  methods:{
    
  }
}
</script>

<style scoped>
    .sidebar{
        position: relative;
        width: 6%;
        left: 0;
        top: 0;
        float: left;
        /*background: #2E363F;*/
        height: 100%;
    }
    .sidebar  ul {
        height:100%;
        width: 100%;
    }
    .sidebar i{
      display: block;
      margin: 0 auto;
      padding: 10px 0;
      font-size: 40px;
      width: auto;
    }
    .sidebar li{
      height: 82.px;
      line-height: 10px;
    }
    a{
      display: block;
      text-decoration: none;
    }
    .main{
      height: 100%;
    }
    .active{
      color: rgb(255, 208, 75);
    }
    /*.sidebar li span{
      display: block;
    }*/
</style>
