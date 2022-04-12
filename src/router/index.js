import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import RegisterForm from '../views/RegisterForm.vue'
import LoginForm from '../views/LoginForm.vue'

 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home' , component: Home},
    { path: '/register', name: 'register', component: RegisterForm},
    { path: '/login', name: 'login', component: LoginForm}
  ]
})


export default router
