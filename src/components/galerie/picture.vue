<template>
    <li :class="{'--fullscreen': fullscreen}"
        ref="picture">

        <i v-if="fullscreen"
           @click="onClick"
           class="fas fa-times icon-close">
        </i>

        <img :src="require(`@/assets/images/galerie/${image.url}`)"
             :alt="image.alt"
             @click="onClick" >
    </li>
</template>

<script>
    export default {
        props: {
            image: Object
        },
        data() {
          return {
              fullscreen: false
          }
        },
        methods: {
            onClick: function() {
                this.fullscreen = !this.fullscreen;
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "./../../assets/scss/config";

    li {
        width: auto;
        margin-bottom: $galerie--grid_gap;

        opacity: 0;
        transform: translateY(10px);

        &.--fullscreen {
            display: flex;
            justify-content: center;

            position: absolute;
            top: 0;
            left: 0;
            z-index: 999;

            width: 100vw;
            height: 100vh;

            background: $black;

            .icon-close {
                position: absolute;
                right: 50px;
                top: 25px;
                z-index: 9999;

                font-size: 35px;
                color: $primary-color;

                &:hover {cursor: pointer}
            }

            img {
                width: 80%;
                object-fit: contain;
            }
        }

        img {
            width: 100%;

            object-fit: cover;

            &:hover {cursor: pointer}
        }

        @media (max-width: $breakpoint) {
            &.--fullscreen img {width: 100%}
        }
    }
</style>
