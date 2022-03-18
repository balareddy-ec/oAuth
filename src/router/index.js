import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/components/pages/Home.vue'
import Auth from '@/components/pages/Auth.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

function hasQueryParams(route) {
  return !!Object.keys(route.query).length
}

router.beforeEach((to, from, next) => {
  if(!hasQueryParams(to) && hasQueryParams(from)){
    next({name: to.name, query: from.query});
  } else {
    next()
  }
})

export default router
