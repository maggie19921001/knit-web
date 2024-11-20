import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/admin/Login.vue'
import Dashboard from '../views/admin/Dashboard.vue'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      component: Dashboard,
      children:[
        {
          path:'',
          name: 'dashboard',
          component: () => import('../views/admin/Products.vue')
        },
        {
          path:'products',
          component: () => import('../views/admin/Products.vue')
        },
        {
          path:'orders',
          component: () => import('../views/admin/Orders.vue')
        },{
          path:'coupons',
          component: () => import('../views/admin/Coupons.vue')
        }
      ]
    },
    {
      path: '/user',
      component: () => import('../views/user/Userboard.vue'),
      children:[
        {
          path: '', // 這裡設置為空，代表當進入 /user 時顯示這個子路由
          name: 'user',
          component: () => import('../views/user/UserShop.vue'),
        },
        {
          path:'shop',
          component: () => import('../views/user/UserShop.vue')
        },        
        {
          path:'cart',
          component: () => import('../views/user/UserCart.vue')
        },
        {
          path:'product/:productId',
          component: () => import('../views/user/UserProduct.vue')
        },
        {
          path:'userform',
          component: () => import('../views/user/UserForm.vue')
        },
        {
          path:'checkout/:orderId',
          component: () => import('../views/user/UserCheckout.vue')
        }
      ]
    }
  ]
})

export default router
