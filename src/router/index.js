import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import Restaurants from '../views/Restaurants.vue'
import User from '../views/User.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'root',
    redirect: '/restaurants'
  },

  {
    path: '/signin',
    name: 'Sign-In',
    component: SignIn,
  },

  {
    path: '/signup',
    name: 'Sign-Up',
    component: SignUp,
  },

  {
    path: '/restaurants',
    name: 'restaurants',
    component: Restaurants,
  },

  {
    path: '/restaurants/feeds',
    name: 'restaurant-feeds',
    component: () => import('../views/RestaurantFeeds.vue')
  },

  {
    path: '/restaurants/top',
    name: 'restaurant-top',
    component: () => import('../views/RestaurantTop.vue')
  },

  {
    path: '/restaurants/:id',
    name: 'restaurant',
    component: () => import('../views/Restaurant.vue')
  },

  {
    path: '/user',
    name: 'user',
    component: User
  },



  {
    path: '/users/top',
    name: 'user-top',
    component: () => import('../views/UsersTop.vue')
  },

  {
    path: '*',
    name: 'not-found',
    component: NotFound,
  },

]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes
})

export default router
