<template>
    <header :class="{'--home' : $route.name === 'Home'}">
        <img v-if="$route.name === 'Home'"
             :src="require(`@/assets/images/${$t('header.logo-center')}`)"
             alt="">

        <img v-else
             :src="require(`@/assets/images/${$t('header.logo-left')}`)"
             alt="">
    </header>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
@import "../../assets/scss/config";

header {
    display: flex;
    align-items: flex-start;

    margin-bottom: 5vh;

    &.--home {
        justify-content: center;

        img {
            width: 20%;
            border-style:  none;
        }
    }

    img {
        width: 20%;

        padding-top: 10px;

        border-top: 1px solid $header--font_color;
    }

    p {
        height: 100%;

        font-family: $header--font_family;
        font-size: $header--font_size;
        font-weight: $header--font_weight;

        color: $header--font_color;

        margin-left: 50px;
        padding-top: 10px;

        border-top: 1px solid $header--font_color;
        box-sizing: border-box;
    }

    @media (max-width: $breakpoint) {
        flex-direction: column;

        img {width: 100%;}
        &.--home img {width: 100%}
    }
}
</style>
