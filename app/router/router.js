import VueRouter from 'vue-router'
import login from '../pages/login'
import logout from '../pages/logout'
import home from '../pages/home'
import regist from '../pages/regist'


const router = new VueRouter({
  base:   'edubook/',
  routes: [
    {
      name: 'home',
      path: '/',
      component: home
    },
    {
      name: 'login',
      path: '/login',
      component: login
    },
    {
      name: 'logout',
      path: '/logout',
      component: logout
    },
    {
      name: 'regist',
      path: '/regist',
      component: regist
    }
  ]
});

export default router;