<template>
    <div id="galerie">
        <Pictures />
    </div>
</template>

<script>
    import Pictures from "../components/galerie/pictures";

    export default {
        name: "Galerie",
        components: {
            Pictures
        }
    }
</script>

<style lang="scss" scoped>
    @import "./../assets/scss/config";
</style>
