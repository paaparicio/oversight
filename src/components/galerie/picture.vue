<template>
    <li>
        <img :src="require(`@/assets/images/galerie/${image.url}`)" :alt="image.alt">
    </li>
</template>

<script>
    export default {
        props: {
            image: Object
        }
    }
</script>

<style lang="scss" scoped>
    @import "./../../assets/scss/config";

    li {
        height: 150px;

        background-color: $primary-color;

        img {
            width: 100%;
            height: 100%;

            object-fit: cover;
        }
    }
</style>
