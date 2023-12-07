import './styles/index.scss';
import './styles/base.css';
import './styles/main.css';
import 'primevue/resources/themes/lara-light-teal/theme.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';

import App from './App.vue';
import router from './router';
import Paginate from 'vuejs-paginate-next';
import VueFeather from 'vue-feather';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(PrimeVue);
app.component('paginate', Paginate);
app.component(VueFeather.name, VueFeather);
app.mount('#app');
