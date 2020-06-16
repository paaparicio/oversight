<template>
  <div id="app">
    <div class="container"
         :class="{'--game' : $route.name === 'Game'}">

      <section class="container--left"
               v-if="$route.name !== 'Introduction'">

        <Navigation/>
        <Footer v-if="$store.state.width > $store.state.breakpoint"/>
      </section>

      <section :class="[($route.name === 'Home' && $store.state.width >= $store.state.breakpoint)? 'container--right-home' : 'container--right']">
        <Header v-if="$route.name !== 'Game'&& $route.name !== 'Introduction'"/>
        <router-view class="--content"/>
      </section>
    </div>

    <Three />
  </div>
</template>

<script>
  import Header from "./components/header/header";
  import Navigation from "./components/navigation/navigation";
  import Footer from "./components/footer/footer";

  import Three from "./components/three/three";

  import {analytics} from "./mixins/analytics";

  export default {
    components: {
      Navigation,
      Header,
      Footer,
      Three
    },
    methods: {
      getViewportsUnit: function() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      }
    },
    mixins: [analytics],
    mounted() {
      this.getViewportsUnit();
      this.$store.commit('getResponsiveSize');

      window.addEventListener('resize', () => {
        this.getViewportsUnit();
        this.$store.commit('getResponsiveSize');
      });
    },
    beforeRouteEnter(to, from) {
      console.log(to, from)
    }
  }
</script>

<style lang="scss">
  @import 'assets/scss/default';
  @import 'assets/scss/config';

  #app {

    .container {
      //height: calc(var(--vh, 1vh) * 100);
      height: 100vh;
      width: 100vw;

      display: flex;
      position: absolute;

      padding: 25px 50px;
      box-sizing: border-box;

      &--left {z-index: 999}

      &--right {
        width: 100%;
        padding-left: 10vw;
      }

      &--right-home {
        height: calc(100vh - 50px);
        width: calc(100vw - 100px);

        position: absolute;
        top: 25px;
        left: 50px;
      }

      .--content {overflow-y: scroll}

      &.--game {
        padding: 0;

        section {padding: 0}
      }

      section {
        display: flex;
        flex-direction: column;
      }

      @media (max-width: $breakpoint) {
        padding: 25px 25px 0 0;

        &--right {padding-left: 25px}
      }
    }
  }
</style>
