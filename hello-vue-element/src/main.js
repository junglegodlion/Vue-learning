// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 导入 ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'
// 原型链
Vue.prototype.axios = axios;

import Vuex from 'vuex'

import store from './store'

Vue.config.productionTip = false

// 安装 ElementUI
Vue.use(ElementUI);

Vue.use(Vuex);

// 在跳转前执行
router.beforeEach((to, form, next) => {
  // 获取用户登录状态
  let isLogin = sessionStorage.getItem('isLogin');
  // 注销
  if (to.path == '/logout') {
    // 清空
    sessionStorage.clear();
    // 跳转到登录
    next({path: '/login'});
  }

  // 如果请求的是登录页
  else if (to.path == '/login') {
    if (isLogin == 'true') {
      // 跳转到首页
      console.log()

      next({path : '/main'});
    }
  }

  else if (isLogin == null) {
    next({path: "/login"})
  }

  // 下一个路由
  next();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store,
  // 启用 ElementUI
  render: h => h(App)
})
