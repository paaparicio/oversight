<template>
    <header>
        <img src="./../../assets/images/logo.png" alt="">
        <p v-if="$store.state.width >= $store.state.breakpoint">Dans une société totalitaire , habitants sont observés par des caméras et notés sur leurs moindres faits et gestes.
            Vous découvrirez un trajet semé d'embuches et d'occasion de perdre ou gagner des points.</p>
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

    img {
        width: 35%;

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
    }
}
</style>
