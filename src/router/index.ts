import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Resume from '../views/Resume.vue';
import HomeViewMobi from '../views/HomeViewMobi.vue'


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

  ],
})

export default router