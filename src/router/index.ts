import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/homeview.vue';
import Resume from '../views/resume.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume
    }
  ]
})

export default router