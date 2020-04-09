import Vue from 'vue';
import ResolveSvgPlugin from '@/plugins/resolve-svg';
import App from './App.vue';

Vue.use(ResolveSvgPlugin);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
