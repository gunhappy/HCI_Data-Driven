import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'

Vue.use(Router)
export const routes = [
  {path: '/', component: Home},
  {path: '*', redirect: '/'}
]

export const router = new Router({
  mode: 'history',
  routes
})
