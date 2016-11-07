import VueRouter from 'vue-router'
import login from '../pages/login'
import logout from '../pages/logout'
import home from '../pages/home'


const router = new VueRouter({
  base:   '/',
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
    }
  ]
});

export default router;