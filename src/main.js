import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import YmapPlugin from 'vue-yandex-maps'

Vue.config.productionTip = false

const settings = {
  lang: "ru_RU",
  version: "2.1"
};
Vue.use(YmapPlugin, settings);
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
