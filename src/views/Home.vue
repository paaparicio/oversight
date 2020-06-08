<template>
  <div class="home">
    <router-link :to="{name: $t('views.home.'+ device +'.button.url')}">
      {{ $t('views.home.'+ device +'.button.name') }}
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState} from 'vuex';

export default {
  name: 'Home',
  data() {
    return {
      device: "desktop"
    }
  },
  computed: {
    ...mapState(['width', 'breakpoint'])
  },
  methods: {
    getDevice: function(val) {
      val <= this.breakpoint ? this.device = "mobile" : this.device = "desktop";
    }
  },
  created() {
    this.getDevice(this.width);
  },
  watch: {
    width: function(val) {
      this.getDevice(val)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import './../assets/scss/config';

  .home {
    height: 100%;

    position: relative;

    display: flex;
    justify-content: center;

    a {
      position: absolute;

      font-family: $primary-font;
      font-size: 16px;

      color: $primary-color;

      border: 1px solid $primary-color;
      padding: 5px 50px;

      text-transform: uppercase;

      &:after {
        content: '';

        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;

        width: 100%;
        height: 100%;

        filter: blur(2px);
      }
    }
  }
</style>
