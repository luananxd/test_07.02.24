import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import globalComponents from './components/UI/index';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
globalComponents.forEach((component) => {
  app.component(component.name, component.value);
});
app.mount('#app');
