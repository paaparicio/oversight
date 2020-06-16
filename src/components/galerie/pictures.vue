<template>
    <ul>
        <Picture v-for="(image, i) in images"
                 :key="i"
                 :image="image"/>
    </ul>
</template>

<script>
    import Picture from "./picture";

    export default {
        components: {Picture},
        props: {
            images: Array,
        }
    }
</script>

<style lang="scss" scoped>
    @import "./../../assets/scss/config";

    ul {
        column-gap: $galerie--grid_gap;
        column-count: $galerie--grid_col;


        @media (max-width: $breakpoint) {
            column-count: 1;
        }
    }
</style>
