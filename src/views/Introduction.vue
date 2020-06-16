<template>
    <div id="introduction">
        <img :src="require(`@/assets/images/${$t('header.logo-center')}`)"
             alt="Logo Oversight">

        <router-link @click.native="onClick"
                     :to="{name: 'Home'}">
            Commencer
        </router-link>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: "Introduction",
        computed: {
          ...mapState(['width', 'breakpoint', 'camera', 'gyroscope'])
        },
        methods: {
          onClick: function() {
              (this.width < this.breakpoint) ? this.$store.commit('setGyroscope') : this.$store.commit('setMouseMove')
          }
        },
        mounted() {
            this.TweenMax.to(this.camera.position, 1, {x: 0, y: 50, z: 1, ease: this.Sine.easeInOut})
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/scss/config";

    #introduction {
        position: absolute;
        left: 0;
        top: 0;
        z-index: 999;

        width: 100vw;
        height: 100vh;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {width: 300px}

        a {
            margin-top: 25px;
            padding: 5px 20px;

            font-family: $primary-font;
            font-size: 20px;
            color: $primary-color;

            background-color: transparent;
            border: 1px solid $primary-color;

            text-transform: uppercase;
            text-decoration: none;

            transform: translateX(-10px);

            &:hover {cursor: pointer}
        }
    }
</style>
