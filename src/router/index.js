import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Page2 from '../components/Comp.vue'
import mainPage from '../components/mainPage.vue'
import vCarte from '../components/v-carte.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/page2',
    name: 'Page2',
    component: Page2
  },
  {
    path: '/mainpage',
    name: 'mainPage',
    component: mainPage
  },
  {
    path: '/cart',
    name: 'carte',
    component: vCarte,
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
