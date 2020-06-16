<template>
    <div id="trailer">
        <p v-if="$store.state.width < $store.state.breakpoint">
            {{ $t('views.trailer.text') }}
        </p>

        <div ref="iframe">
            <Video :url="$t('views.trailer.url')"/>
        </div>
    </div>
</template>

<script>
    import Video from "../components/default/video";

    import {mapState} from 'vuex';

    export default {
        name: "Trailer",
        components: {Video},
        computed: {
            ...mapState(['width', 'breakpoint', 'camera'])
        },
        mounted() {
            let _ = this;
            let {iframe} = _.$refs;

            let tl = new _.TimelineLite();

            if(this.width < this.breakpoint) {
                tl.to(_.camera.position, 1, {x: -10, y: 2, z: -8, ease: _.Sine.easeInOut})
            } else {
                tl.to(_.camera.position, 1, {x: -10, y: 2, z: -10, ease: _.Sine.easeInOut})
            }

            tl.to(iframe, .5, {css: {width: '100%'}, ease: _.Sine.easeInOut})
        },
        beforeRouteLeave(to, from, next) {
            let _ = this;
            let {iframe} = _.$refs;

            _.TweenMax.to(iframe, .5, {css: {width: '0%'}, ease: _.Sine.easeOut, onComplete: () => next()})
        }
    }
</script>

<style lang="scss" scoped>
    @import './../assets/scss/_config.scss';

    #trailer {
        height: 100%;

        div {
            height: 500px;
            width: 0;
        }

        p, h2 {
            font-family: $trailer--font_family;
            font-size: $trailer--font_size;
            color: $trailer--font_color;
            margin: 0 0 25px 0;
        }

        h2 {margin: 50px 0 25px 0;}

        @media (min-width: $breakpoint--min) {
            div {height: 700px;}
        }
    }


</style>
