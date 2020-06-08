<template>
    <div id="galerie">
        <Pictures :images="$t('views.galerie')"/>
    </div>
</template>

<script>
    import Pictures from "../components/galerie/pictures";

    export default {
        name: "Galerie",
        components: {Pictures}
    }
</script>

<style lang="scss" scoped>
    @import "./../assets/scss/config";

    #galerie {height: 100%}
</style>
