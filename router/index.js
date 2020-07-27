import Vue from 'vue'
import VueRouter from 'vue-router'

import AddItem from '../components/AddItem.vue'
import EditItem from '../components/EditItem.vue'
import ListItem from '../components/ListItem.vue'
import Home from '../components/Home.vue'
import Api from '../components/Api.vue'
import NProgress from 'nprogress';
import "nprogress/nprogress.css";


Vue.use(VueRouter)

  const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'Add',
    path: '/tambah',
    component: AddItem
  },
  {
    name: 'Edit',
    path: '/edit/:id',
    component: EditItem
  },
  {
    name: 'List',
    path: '/list',
    component: ListItem
  },
  {
    name: 'Api',
    path: '/api',
    component: Api
  },
]

const router = new VueRouter({
  routes,
  linkExactActiveClass: "active"
})
router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})
export default router
