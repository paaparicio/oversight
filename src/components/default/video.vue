<template>
    <iframe class="container--trailer"
            :src="url"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
    </iframe>
</template>

<script>
    export default {
        props: {
            url: String
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/config";

    .container--trailer {
        width: 100%;
        height: 100%;

        @media (max-width: $breakpoint) {
            height: auto;
        }
    }
</style>
