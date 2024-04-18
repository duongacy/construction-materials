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
    path: '/promotion/have',
    name: 'PromotionHave',
    component: () => import('@/pages/promotion/PromotionHave.vue'),
    meta: {
      title: 'Sản phẩm/Dịch vụ chúng tôi có',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      icon: ChartPieIcon,
    },
  },
  {
    path: '/promotion/need',
    name: 'PromotionNeed',
    component: () => import('@/pages/promotion/PromotionNeed.vue'),
    meta: {
      title: 'Sản phẩm/Dịch vụ chúng tôi cần',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      icon: ChartPieIcon,
    },
  },
  {
    path: '/investment/have',
    name: 'InvestmentHave',
    component: () => import('@/pages/investment/InvestmentHave.vue'),
    meta: {
      title: 'Cơ hội đầu tư chúng tôi có',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      icon: ChartPieIcon,
    },
  },
  {
    path: '/investment/need',
    name: 'InvestmentNeed',
    component: () => import('@/pages/investment/InvestmentNeed.vue'),
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

export type RouterLinkItem = {
  path: string;
  title: string;
  description: string;
  icon: Component;
};

export const getRoute = (
  name:
    | 'home'
    | 'aboutUs'
    | 'PromotionHave'
    | 'PromotionNeed'
    | 'InvestmentHave'
    | 'InvestmentNeed'
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
  } as RouterLinkItem;
};

export const promotionRoutes = [getRoute('PromotionHave'), getRoute('PromotionNeed')];
export const investmentRoutes = [getRoute('InvestmentHave'), getRoute('InvestmentNeed')];
export const learningRoutes = [
  getRoute('learningFinance'),
  getRoute('learningLegal'),
  getRoute('learningMarTech'),
  getRoute('learningCasestudy'),
  getRoute('learningDownload'),
];
export const contactRoute = getRoute('contact');
export const aboutRoute = getRoute('aboutUs');

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
});

export default router;
