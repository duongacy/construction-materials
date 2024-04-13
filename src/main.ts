import { key, store } from '@/store';
import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import router from './router';

const app = createApp(App);
app.use(router);
app.use(store, key);
app.mount('#app');
