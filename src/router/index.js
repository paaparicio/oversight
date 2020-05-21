import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Galerie from "../views/Galerie";
import About from "../views/About";
import Team from "../views/Team";
import Download from "../views/Download";

Vue.use(VueRouter);

  const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/download', name: 'Download', component: Download},
  {path: '/about', name: 'About', component: About},
  {path: '/galerie', name: 'Galerie', component: Galerie},
  {path: '/team', name: 'Team', component: Team}
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router
