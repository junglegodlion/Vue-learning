import Vue from 'vue'
import Router from 'vue-router'

import Login from "../views/Login"
import Main from '../views/Main'

import UserAdd from '@/views/user/Add'
import UserList from '@/views/user/List'

import NotFound from '@/views/404'


Vue.use(Router);
export default new Router({
  mode: 'history',
  routes: [
    {
      // 登录页
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      // 首页
      path: '/main',
      name: 'Main',
      component: Main,
      // 配置嵌套路由
      children: [
        {name: 'UserAdd',path: '/user/add/:id',component: UserAdd},
        {name: 'UserList',path: '/user/list/:id',component: UserList,props: true},
      ]
    },
    {
      path: '/home',
      redirect: '/main'
    },
    {
      path: '*',
      component: NotFound
    }
  ]
});
