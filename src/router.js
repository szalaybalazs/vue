import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: process.env.NODE_ENV === 'development' ? '/' : '/vue/',
      name: 'main',
      component: Main
    },
    {
      path: process.env.NODE_ENV === 'development' ? '/archives' : '/vue/',
      name: 'archives',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('./views/Archives.vue')
    }
  ]
})
