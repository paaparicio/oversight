<template>
    <div id="team">
        <Persons :persons="$t('views.team.persons')"/>
        <Additional :person="$t('views.team.additional')"/>
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
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>
