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
            path: 'News',
            component: () => import('../components/Center.vue')
          },
          {
            path: 'Agenda',
            component: () => import('../components/Center.vue')
          },
          {
            path: 'More',
            component: () => import('../components/HelloWorld.vue')
          }
        ]
      },
      {
        path: 'MyLearning',
        name: 'MyLearning',
        component: () => import('../components/MyLearning.vue'),
        children: [
          {
            path: 'Library',
            component: () => import('../components/Center.vue')
          },
          {
            path: 'Booking',
            component: () => import('../components/Booking.vue')
          },
          {
            path: 'More',
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
