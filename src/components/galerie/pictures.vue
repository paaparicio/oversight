<template>
    <ul>
        <Picture v-for="i in 10"
                 :key="i"/>
    </ul>
</template>

<script>
    import Picture from "./picture";

    export default {
        components: {Picture}
    }
</script>

<style lang="scss" scoped>
    @import "./../../assets/scss/config";

    ul {
        display: grid;
        grid-gap: 25px;
        grid-template-columns: repeat(3, 1fr);

        @media (max-width: $breakpoint) {
            grid-template-columns: repeat(1, 1fr);
        }
    }
</style>
