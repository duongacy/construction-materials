import { store } from '@/store';
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    redirect: '/coaches',
  },
  {
    path: '/design-pattern/content',
    name: 'designPatternContent',
    component: () => import('@/pages/design-pattern/content/TheContent.vue'),
  },
  {
    path: '/design-pattern/forms',
    name: 'designPatternForm',
    component: () => import('@/pages/design-pattern/forms/TheForms.vue'),
  },
  {
    path: '/design-pattern/layouts',
    name: 'designPatternLayout',
    component: () => import('@/pages/design-pattern/layouts/TheLayouts.vue'),
  },
  {
    path: '/design-pattern/components',
    name: 'designPatternComponents',
    component: () => import('@/pages/design-pattern/components/TheComponents.vue'),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/pages/profile/TheProfile.vue'),
  },
  {
    path: '/public-projects',
    name: 'publicProjects',
    component: () => import('@/pages/public-projects/PublicProject.vue'),
  },
  {
    path: '/coaches',
    name: 'coaches',
    component: () => import('@/pages/coaches/CoachesList.vue'),
  },
  {
    path: '/coaches/:coachId',
    name: 'coachDetails',
    props: true,
    component: () => import('@/pages/coaches/CoachDetails.vue'),
    children: [
      {
        path: '/coaches/:coachId/request',
        name: 'requestForm',
        props: true,
        component: () => import('@/pages/requests/RequestForm.vue'),
      },
    ],
  },
  {
    path: '/coaches/add',
    name: 'coachesAdd',
    component: () => import('@/pages/coaches/CoachAdd.vue'),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/requests-received',
    name: 'requestsReceived',
    component: () => import('@/pages/requests/RequestsReceived.vue'),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/auth',
    name: 'authen',
    component: () => import('@/pages/auth/TheAuthentication.vue'),
    meta: {
      requireUnauth: true,
    },
  },
  {
    path: '/not-found',
    name: 'notFound',
    component: () => import('@/pages/NotFound.vue'),
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/not-found',
  },
];

export const getRoute = (
  name:
    | 'home'
    | 'designPatternContent'
    | 'designPatternForm'
    | 'designPatternLayout'
    | 'designPatternComponents'
    | 'profile'
    | 'publicProjects'
    | 'coaches'
    | 'requestsReceived'
    | 'coachDetails'
    | 'requestForm'
    | 'coachesAdd'
    | 'authen'
    | 'notFound',
) => {
  return routes.find((item) => item.name === name) as RouteRecordRaw;
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters['AUTHEN/isAuthenticated'];
  if (to.meta.requireAuth && !isAuthenticated) {
    next('/auth');
  } else if (to.meta.requireUnauth && isAuthenticated) {
    next(from || '/coaches');
  } else {
    next();
  }
});

export default router;
