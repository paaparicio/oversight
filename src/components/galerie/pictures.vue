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
            images: Array
        }
    }
</script>

<style lang="scss" scoped>
    @import "./../../assets/scss/config";

    ul {
        display: grid;
        grid-gap: $galerie--grid_gap;
        grid-template-columns: repeat($galerie--grid_col, 1fr);

        @media (max-width: $breakpoint) {
            @import "./../../assets/scss/config";

            grid-template-columns: repeat($galerie--grid_col, 1fr);
        }
    }
</style>
