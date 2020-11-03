import Vue from 'vue'
import VueRouter from 'vue-router'
import users from '../App'

Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    name: 'Users',
    component: users
  },
  // {
  //   path: '/license',
  //   name: 'License',
  //   component: ''
  // }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router
