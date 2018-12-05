// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // 将store选项注册到跟实例中  该 store 实例会注入到根组件下的所有子组件中，且子组件能通过 this.$store 访问到
  components: { App },
  template: '<App/>'
})
