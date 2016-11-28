import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Monthly from '../components/Monthly.vue'
import Yearly from '../components/Yearly.vue'

Vue.use(Router)
export const routes = [
  {path: '/', component: Home},
  {path: '/monthly',component: Monthly},
  {path: '/yearly',component: Yearly},
  {path: '*', redirect: '/'}
]

export const router = new Router({
  mode: 'history',
  routes
})
