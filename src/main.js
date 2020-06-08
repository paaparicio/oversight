import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from "vue-i18n";

import {TweenMax} from "gsap/all";

import FR from './assets/i18n/fr.json'

Vue.config.productionTip = false;
Vue.prototype.TweenMax = TweenMax;

Vue.use(VueI18n);

const messages = {
  fr: FR
};

const i18n = new VueI18n({
  locale: 'fr', // set locale
  messages, // set locale messages
});

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
