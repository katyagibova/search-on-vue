import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import YmapPlugin from 'vue-yandex-maps'

Vue.config.productionTip = false

const settings = {
  apiKey: 'd1547931-4c0e-4766-8df1-36bd990919b7',
  lang: "ru_RU",
  coordorder: 'latlong',
  version: "2.1"
};
Vue.use(YmapPlugin, settings);
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
