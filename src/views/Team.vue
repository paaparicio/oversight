<template>
    <div id="team">
        <Persons />
        <Additional />
    </div>
</template>

<script>
    import Additional from "../components/team/additional";
    import Persons from "../components/team/persons";

    export default {
        name: "Team",
        components: {Persons, Additional}
    }
</script>

<style lang="scss" scoped>
    @import './../assets/scss/config';

    #team {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>
