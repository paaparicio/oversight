import Vue from 'vue'
import Vuex from 'vuex'

import * as THREE from 'three'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    breakpoint: 1024,
    width: 0,
    scene: new THREE.Scene(),
    camera: new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ),
    renderer: new THREE.WebGLRenderer()
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
