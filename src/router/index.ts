import { ChartPieIcon } from '@heroicons/vue/24/outline';
import type { Component } from 'vue';
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    redirect: '/about-us',
  },
  {
    path: '/about-us',
    name: 'aboutUs',
    component: () => import('@/pages/about-us/AboutUs.vue'),
    meta: {
      title: 'About us',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  },
  {
    path: '/s-trade-promotion/have',
    name: 'sTradePromotionHave',
    component: () => import('@/pages/s-trade-promotion/STradePromotionHave.vue'),
    meta: {
      title: 'Sản phẩm/Dịch vụ chúng tôi có',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      icon: ChartPieIcon,
    },
  },
  {
    path: '/s-trade-promotion/need',
    name: 'sTradePromotionNeed',
    component: () => import('@/pages/s-trade-promotion/STradePromotionNeed.vue'),
    meta: {
      title: 'Sản phẩm/Dịch vụ chúng tôi cần',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      icon: ChartPieIcon,
    },
  },
  {
    path: '/s-investment/have',
    name: 'sInvestmentHave',
    component: () => import('@/pages/s-investment/SInvestmentHave.vue'),
    meta: {
      title: 'Cơ hội đầu tư chúng tôi có',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      icon: ChartPieIcon,
    },
  },
  {
    path: '/s-investment/need',
    name: 'sInvestmentNeed',
    component: () => import('@/pages/s-investment/SInvestmentNeed.vue'),
    meta: {
      title: 'Cơ hội đầu tư chúng tôi cần',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      icon: ChartPieIcon,
    },
  },

  {
    path: '/learning/finance',
    name: 'learningFinance',
    component: () => import('@/pages/learning-center/Finance.vue'),
    meta: {
      title: 'Tài chính',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      icon: ChartPieIcon,
    },
  },
  {
    path: '/learning/legal',
    name: 'learningLegal',
    component: () => import('@/pages/learning-center/Legal.vue'),
    meta: {
      title: 'Pháp lý',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      icon: ChartPieIcon,
    },
  },
  {
    path: '/learning/mar-tech',
    name: 'learningMarTech',
    component: () => () => import('@/pages/learning-center/MarTech.vue'),
    meta: {
      title: 'Mar-tech',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      icon: ChartPieIcon,
    },
  },
  {
    path: '/learning/download',
    name: 'learningDownload',
    component: () => import('@/pages/learning-center/DocumentDownload.vue'),
    meta: {
      title: 'Tải tài liệu',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      icon: ChartPieIcon,
    },
  },
  {
    path: '/learning/caseStudy',
    name: 'learningCasestudy',
    component: () => import('@/pages/learning-center/CaseStudy.vue'),
    meta: {
      title: 'Casestudy',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      icon: ChartPieIcon,
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/pages/contact/Contact.vue'),
    meta: {
      title: 'Liên hệ',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  },
  {
    path: '/not-found',
    name: 'notFound',
    component: () => import('@/pages/NotFound.vue'),
    meta: {
      title: '',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/not-found',
  },
];

export const getRoute = (
  name:
    | 'home'
    | 'aboutUs'
    | 'sTradePromotionHave'
    | 'sTradePromotionNeed'
    | 'sInvestmentHave'
    | 'sInvestmentNeed'
    | 'learningFinance'
    | 'learningLegal'
    | 'learningMarTech'
    | 'learningDownload'
    | 'learningCasestudy'
    | 'contact'
    | 'notFound',
) => {
  const rs = routes.find((item) => item.name === name);
  return {
    path: rs?.path || '',
    title: rs?.meta?.title || '',
    description: rs?.meta?.description || '',
    icon: rs?.meta?.icon || null,
  } as {
    path: string;
    title: string;
    description: string;
    icon: Component;
  };
};

export const stradePromotionRoutes = [
  getRoute('sTradePromotionHave'),
  getRoute('sTradePromotionNeed'),
];
export const sInvestmentRoutes = [getRoute('sInvestmentHave'), getRoute('sInvestmentNeed')];
export const learningCenterRoutes = [
  getRoute('learningFinance'),
  getRoute('learningLegal'),
  getRoute('learningMarTech'),
  getRoute('learningCasestudy'),
  getRoute('learningDownload'),
];
export const contactRoute = getRoute('contact');
export const aboutRoute = getRoute('aboutUs');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
