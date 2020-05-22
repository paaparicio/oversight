import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    breakpoint: 1024,
    width: 0
  },
  mutations: {
    getResponsiveSize: function() {
      this.state.width = window.innerWidth;
    }
  },
  actions: {
  },
  modules: {
  }
})
