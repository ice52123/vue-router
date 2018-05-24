import Vue from 'vue'
import Router from 'vue-router'
import App from '../App';
// import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: '登录',
    component: resolve => require(['../views/login.vue'], resolve)
  },
  {
    path: '/register',
    name: '注册',
    component: resolve => require(['../views/register.vue'], resolve)
  },
  {
    path: '/resetpwd',
    name: '重置密码',
    component: resolve => require(['../views/resetpwd.vue'], resolve)
  },
  {
    path: '/station',
    component: resolve => require(['../components/home.vue'], resolve),
    children: [
      {
        path: '/',
        component: resolve => require(['../views/station.vue'], resolve)
      }
    ]
  },
  {
    path: '/situation',
    component: resolve => require(['../components/home.vue'], resolve),
    children: [
      {
        path: '/',
        component: resolve => require(['../views/situation.vue'], resolve)
      }
    ]
  },
  {
    path: '/workOrder',
    component: resolve => require(['../components/home.vue'], resolve),
    children: [
      {
        path: '/',
        component: resolve => require(['../views/workOrder.vue'], resolve)
      }
    ]
  },
  {
    path: '/stationAlarm',
    component: resolve => require(['../components/home.vue'], resolve),
    children: [
      {
        path: '/',
        component: resolve => require(['../views/stationAlarm.vue'], resolve)
      }
    ]
  },
  {
    path: '/collector',
    component: resolve => require(['../components/home.vue'], resolve),
    children: [
      {
        path: '/',
        component: resolve => require(['../views/collector.vue'], resolve)
      }
    ]
  },
  {
    path: '/user',
    component: resolve => require(['../components/home.vue'], resolve),
    children: [
      {
        path: '/',
        component: resolve => require(['../views/user.vue'], resolve)
      }
    ]
  },
  {
    path: '/distCollector',
    component: resolve => require(['../components/home.vue'], resolve),
    children: [
      {
        path: '/',
        component: resolve => require(['../views/distCollector.vue'], resolve)
      }
    ]
  },
  {
    path: '/collectorException',
    component: resolve => require(['../components/home.vue'], resolve),
    children: [
      {
        path: '/',
        component: resolve => require(['../views/collectorException.vue'], resolve)
      }
    ]
  },
  {
    path: '/notice',
    component: resolve => require(['../components/home.vue'], resolve),
    children: [
      {
        path: '/',
        component: resolve => require(['../views/notice.vue'], resolve)
      }
    ]
  },
  {
    path: '/collectorRenewal',
    component: resolve => require(['../components/home.vue'], resolve),
    children: [
      {
        path: '/',
        component: resolve => require(['../views/collectorRenewal.vue'], resolve)
      }
    ]
  },
  {
    path: '/collectorManage',
    component: resolve => require(['../components/home.vue'], resolve),
    children: [
      {
        path: '/',
        component: resolve => require(['../views/collectorManage.vue'], resolve)
      }
    ]
  }],
  mode: 'history',
})