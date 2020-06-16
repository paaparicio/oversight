<template>
  <div class="home">
    <router-link :to="{name: $t('views.home.'+ device +'.button.url')}">
      {{ $t('views.home.'+ device +'.button.name') }}
    </router-link>

    <p ref="description">{{ $t('header.description') }}</p>
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
    ...mapState(['width', 'breakpoint', 'camera'])
  },
  methods: {
    getDevice: function(val) {
      val <= this.breakpoint ? this.device = "mobile" : this.device = "desktop";
    }
  },
  mounted() {
    let _ = this;
    let {description} = _.$refs;

    let tl = new _.TimelineLite();

    tl.to(_.camera.position, 1, {x: 0, y: 5, z: 1, ease: _.Sine.easeInOut})
    tl.to(description, .5, {css: {alpha: 1, translateY: 0}, ease: _.Sine.easeInOut})
  },
  created() {
    this.getDevice(this.width);
  },
  beforeRouteLeave(to, from, next) {
    let _ = this;
    let {description} = _.$refs;

    _.TweenMax.to(description, .5, {css: {alpha: 0, translateY: 10}, ease: _.Sine.easeInOut, onComplete: next})
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
      transform: translateX(-5px);

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

    p {
      width: 50%;

      position: absolute;
      bottom: 0;
      right: 0;

      font-family: $primary-font;
      font-size: 16px;

      color: $white;

      text-align: right;
      padding-bottom: 20px;

      border-bottom: 2px solid $white;

      transform: translateY(10px);
      opacity: 0;
    }

    @media (max-width: $breakpoint) {
      flex-direction: column;
      justify-content: flex-start;

      a {
        position: inherit;
        margin: 0 auto;

        margin-bottom: 50px;
      }

      p {
        width: 80%;

        position: inherit;
        text-align: center;
        border: none;

        margin: 0 auto;
      }
    }
  }
</style>
