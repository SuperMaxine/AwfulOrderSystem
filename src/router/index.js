import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'MyHome',
        name: 'MyHome',
        component: () => import('../components/MyHome.vue'),
        children: [
          {
            path: 'news',
            component: () => import('../components/Center.vue')
          },
          {
            path: 'agenda',
            component: () => import('../components/Center.vue')
          },
          {
            path: 'more',
            component: () => import('../components/Center.vue')
          }
        ]
      },
      {
        path: 'MyLearning',
        name: 'MyLearning',
        component: () => import('../components/MyLearning.vue'),
        children: [
          {
            path: 'library',
            component: () => import('../components/Center.vue')
          },
          {
            path: 'booking',
            component: () => import('../components/Center.vue')
          },
          {
            path: 'more',
            component: () => import('../components/Center.vue')
          }
        ]
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
