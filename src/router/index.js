import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/dashboard',
      component: () => import('../views/Dashboard.vue'),
      children:[
        {
          path:'',
          name: 'dashboard',
          component: () => import('../views/Products.vue')
        },
        {
          path:'products',
          component: () => import('../views/Products.vue')
        },
        {
          path:'orders',
          component: () => import('../views/Orders.vue')
        },{
          path:'coupons',
          component: () => import('../views/Coupons.vue')
        }
      ]
    },
    {
      path: '/user',
      component: () => import('../views/Userboard.vue'),
      children:[
        {
          path: '', // 這裡設置為空，代表當進入 /user 時顯示這個子路由
          name: 'user',
          component: () => import('../views/UserShop.vue'),
        },
        {
          path:'shop',
          component: () => import('../views/UserShop.vue')
        },
        {
          path:'product/:productId',
          component: () => import('../views/UserProduct.vue')
        },
        {
          path:'checkout/:orderId',
          component: () => import('../views/UserCheckout.vue')
        }
      ]
    }
  ]
})

export default router
