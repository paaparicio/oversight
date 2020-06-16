import Vue from 'vue'
import Vuex from 'vuex'

import * as THREE from 'three'
import {DeviceOrientationControls} from "three/examples/jsm/controls/DeviceOrientationControls";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    breakpoint: 1024,
    width: window.innerWidth,
    scene: new THREE.Scene(),
    camera: new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 ),
    renderer: new THREE.WebGLRenderer(),
    rotation: 0,
    controller: {},
    move: false,
    gyroscope: false
  },
  mutations: {
    getResponsiveSize: function(state) {
      state.width = window.innerWidth;
    },
    setRotation: function(state, value) {
      state.rotation = value;
    },
    setGyroscope: function(state) {
      state.gyroscope = true;
      state.controller = new DeviceOrientationControls(state.camera);
      state.controller.connect();

      console.log(state.controller)
    },
    setMouseMove: function(state) {
      state.move = true;
    }
  },
  actions: {
  },
  modules: {
  }
})
