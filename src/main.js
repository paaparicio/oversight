import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from "vue-i18n";
import VueAnalytics from "vue-analytics";

import {TweenMax, TimelineLite, Sine} from "gsap";

import FR from './assets/i18n/fr.json'

import './assets/scss/tarteaucitron/tarteaucitron.scss';

Vue.config.productionTip = false;
Vue.prototype.Sine = Sine;
Vue.prototype.TweenMax = TweenMax;
Vue.prototype.TimelineLite = TimelineLite;

Vue.use(VueI18n);
Vue.use(VueAnalytics, {
  id: process.env.VUE_APP_ANALYTICS_UUID,
  disabled: true,
  router
});

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
}).$mount('#app');
