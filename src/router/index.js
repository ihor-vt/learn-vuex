import { createRouter, createWebHistory } from 'vue-router';

import CoachesList from '../pages/coaches/CoachesList.vue';
import CoachesDetail from '../pages/coaches/CoachesDetail.vue';
import CoachRegistration from '../pages/coaches/CoachRegistration.vue';
import ContactCoach from '../pages/requests/ContactCoach.vue';
import RequestReceived from '../pages/requests/RequestReceived.vue';
import NotFound from '../pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    {
      path: '/coaches',
      name: 'coaches',
      component: CoachesList
    },
    {
      path: '/coaches/:id',
      name: 'coaches',
      component: CoachesDetail ,
      children: [
        {path: 'contact', component: ContactCoach }
      ]
    },
    {
      path: '/register',
      name: 'register',
      component: CoachRegistration
    },
    {
      path: '/request',
      name: 'request',
      component: RequestReceived
    },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router;
