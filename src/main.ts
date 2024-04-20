// import { key, store } from '@/store';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import router from './router';

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(VueQueryPlugin);
// app.use(store, key);
app.mount('#app');
