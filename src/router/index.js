import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Manu from '../components/Manu.vue'
import Manc from '../components/Manc.vue'
import Liverpool from '../components/Liverpool.vue'
import Arsenal from '../components/Arsenal.vue'
import Chelsea from '../components/Chelsea.vue'
import Spur from '../components/Spur.vue'

Vue.use(Router)
export const routes = [
  {path: '/', component: Home},
  {path: '/manu', component: Manu},
  {path: '/mancity', component: Manc},
  {path: '/liv', component: Liverpool},
  {path: '/arsenal', component: Arsenal},
  {path: '/chelsea', component: Chelsea},
  {path: '/spur', component: Spur},
  {path: '*', redirect: '/'}
]

export const router = new Router({
  mode: 'history',
  routes
})
