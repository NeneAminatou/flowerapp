import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.config.productionTip = false;
Vue.use(VueGoogleMaps, {
  load: {
      key: 'AIzaSyCi4oR8SgM7bx0yO9M15GwfHC2cXgjbUo4',
  },
})

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
