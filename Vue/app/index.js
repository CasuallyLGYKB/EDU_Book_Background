import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import app from './app'
import router from './router/router'


Vue.use(Vuex) 
Vue.use(VueRouter) 
Vue.use(VueResource)

new Vue({
  router,
  render: h => h(app) 
}).$mount('#app') 