<template>
    <div id="trailer">
        <p v-if="$store.state.width <= $store.state.breakpoint">
            {{ $t('views.trailer.text') }}
        </p>

        <Video :url="$t('views.trailer.url')"/>
    </div>
</template>

<script>
    import Video from "../components/default/video";

    export default {
        name: "Trailer",
        components: {Video}
    }
</script>

<style lang="scss" scoped>
    @import './../assets/scss/_config.scss';

    #trailer {
        height: 100%;

        p, h2 {
            font-family: $trailer--font_family;
            font-size: $trailer--font_size;
            color: $trailer--font_color;
            margin: 0 0 25px 0;
        }

        h2 {margin: 50px 0 25px 0;}
    }


</style>
