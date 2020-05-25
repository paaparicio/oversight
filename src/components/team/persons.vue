<template>
    <ul>
        <Person v-for="i in 5"
                :key="i"/>
    </ul>
</template>

<script>
    import Person from "./person";

    export default {
        components: {Person}
    }
</script>

<style lang="scss" scoped>
    @import "./../../assets/scss/config";

    ul {
        display: grid;
        grid-gap: 25px;
        grid-template-columns: repeat(5, 1fr);

        @media (max-width: $breakpoint) {
            grid-gap: 40px;
            grid-template-columns: repeat(1, 1fr);
        }
    }
</style>
