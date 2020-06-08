<template>
    <ul>
        <Person v-for="(person, i) in persons"
                :key="i"
                :person="person"/>
    </ul>
</template>

<script>
    import Person from "./person";

    export default {
        props: {
          persons: Array
        },
        components: {Person}
    }
</script>

<style lang="scss" scoped>
    @import "./../../assets/scss/config";

    ul {
        display: grid;
        grid-gap: $team--grid_gap;
        grid-template-columns: repeat(5, 1fr);

        padding-bottom: $team--grid_gap;

        @media (max-width: $breakpoint) {
            @import "./../../assets/scss/config";

            grid-gap: $team--grid_gap;
            grid-template-columns: repeat(1, 1fr);
        }
    }
</style>
