<template>
  <div id="app">

    <div class="container">
      <div class="container--left">
        <Navigation/>
        <Footer v-if="$store.state.width >= $store.state.breakpoint"/>
        <p style="color: white;">{{$store.width}}</p>
      </div>


      <div class="container--right">
        <Header/>
        <router-view class="--content"/>
      </div>
    </div>

  </div>
</template>

<script>
  import Header from "./components/header/header";
  import Navigation from "./components/navigation/navigation";
  import Footer from "./components/footer/footer";

  export default {
    components: {
      Navigation,
      Header,
      Footer
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
      height: calc(var(--vh, 1vh) * 100);;

      display: flex;

      padding: 25px 50px;
      box-sizing: border-box;

      &--right {padding-left: 10vw;}
      .--content {overflow-y: scroll}
      div {
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
