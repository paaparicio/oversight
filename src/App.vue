<template>
  <div id="app">

    <div class="container">
      <div class="container--left">
        <Navigation/>
        <Footer/>
      </div>


      <div class="container--right">
        <Header/>
        <router-view class="container-content"/>
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
    }
  }
</script>

<style lang="scss">
  @import 'assets/scss/default';
  @import 'assets/scss/config';

  #app {

    .container {
      height: 100vh;

      display: flex;

      padding: 25px 50px;
      box-sizing: border-box;

      &--right {padding-left: 15vw;}

      div {
        display: flex;
        flex-direction: column;
      }
    }
  }
</style>
