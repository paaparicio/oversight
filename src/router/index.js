import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Galerie from "../views/Galerie";
import About from "../views/About";
import Team from "../views/Team";
import Download from "../views/Download";
import Trailer from "../views/Trailer";
import Game from "../views/Game";
import Introduction from "../views/Introduction";

Vue.use(VueRouter);

  const routes = [
  {path: '/', name: 'Introduction', component: Introduction},
  {path: '/home', name: 'Home', component: Home},
  {path: '/trailer', name: 'Trailer', component: Trailer},
  {path: '/download', name: 'Download', component: Download},
  {path: '/about', name: 'About', component: About},
  {path: '/galerie', name: 'Galerie', component: Galerie},
  {path: '/team', name: 'Team', component: Team},
  {path: '/game', name: 'Game', component: Game}
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router
