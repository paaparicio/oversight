<template>
  <div id="app">

    <div class="container"
         :class="{'--game' : $route.name === 'Game'}">

      <section class="container--left"
               v-if="$route.name !== 'Game'">

        <Navigation/>
        <Footer v-if="$store.state.width >= $store.state.breakpoint"/>
      </section>

      <section class="container--right">
        <Header v-if="$route.name !== 'Game'"/>
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
    mounted() {
      this.getViewportsUnit();
      this.$store.commit('getResponsiveSize');

      window.addEventListener('resize', () => {
        this.getViewportsUnit();
        this.$store.commit('getResponsiveSize')
      })
    }
  }
</script>

<style lang="scss">
  @import 'assets/scss/default';
  @import 'assets/scss/config';

  #app {

    .container {
      height: calc(var(--vh, 1vh) * 100);
      width: 100vw;

      display: flex;
      position: absolute;

      padding: 25px 50px;
      box-sizing: border-box;

      &--right {
        width: 100%;
        padding-left: 10vw;
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
