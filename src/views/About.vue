<template>
    <div id="about">
        <div class="--top">
            <p class="--opacity">{{ $t('views.about.text') }}</p>

            <div class="--opacity">
                <img :src="image" alt="">
            </div>
        </div>

        <div class="--apercu">
            <p class="--opacity">{{ $t('views.about.question') }}</p>

            <div ref="iframe">
                <Video :url="$t('views.about.url')"/>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    import Video from "../components/default/video";

    export default {
        name: "About",
        components: {Video},
        data() {
            return {
                image: require(`@/assets/images/about/${this.$i18n.messages[this.$i18n.locale].views.about.image}`)
            }
        },
        computed: {
            ...mapState(['width', 'breakpoint','camera'])
        },
        mounted() {
            const _ = this;
            const opacity = document.querySelectorAll('#about .--opacity');
            const {iframe} = _.$refs;
            const tl = new _.TimelineLite();

            if(this.width < this.breakpoint) {
                tl.to(this.camera.position, 1, {x: -7, y: 15, z: -8, ease: _.Sine.easeInOut})
            } else {
                tl.to(this.camera.position, 1, {x: -6, y: 15, z: -10, ease: _.Sine.easeInOut})
            }

            tl
                .to(opacity, 1, {css: {alpha: 1, translateY: 0}, stagger: .1, ease: _.Sine.easeInOut})
                .to(iframe, .5, {css: {width: '100%'}, ease: _.Sine.easeOut}, "-=.8")
        },
        beforeRouteLeave(to, from, next) {
            const _ = this;
            const opacity = document.querySelectorAll('#about .--opacity');
            const {iframe} = _.$refs;
            const tl = new _.TimelineLite({onComplete: next});

            tl
                .to(iframe, .5, {css: {width: '0%'}, ease: _.Sine.easeOut})
                .to(opacity, .5, {css: {alpha: 0, translateY: 10}, stagger: .1, ease: _.Sine.easeInOut})
        }
    }
</script>

<style lang="scss" scoped>
    @import "./../assets/scss/config";

    #about {
        display: flex;
        flex-direction: column;

        font-family: $about--font_family;
        color: white;

        .--top {
            display: flex;
            font-size: $about--explication-font_size;

            p {
                width: 35%;
                padding-right: 20px;
            }

            div {
                width: 65%;

                img {
                    width: 100%;
                    object-fit: cover;
                    object-position: center;
                }
            }
        }

        .--apercu {
            width: 50%;

            margin-top: -15%;

            font-size: $about--apercu-font_size;
            color: $about--apercu-font_color;

            div {
                height: 300px;
                width: 0%;

                margin-top: 25px;
            }
        }

        .--opacity {
            opacity: 0;
            transform: translateY(10px);
        }

        @media (max-width: $breakpoint) {
            @import "./../assets/scss/config";

            .--top {
                flex-direction: column;

                p, div {width: 100%;}

                div {
                    border: {
                        top: 1px solid $white;
                        bottom: 1px solid $white;
                    };

                    margin-top: 25px;
                    padding: 25px 0;
                }
            }
            .--apercu {
                width: 100%;
                margin-top: 25px;

                div {
                    height: auto;
                    margin: 15px 0;
                }
            }
        }
        @media (min-width: $breakpoint--min) {
            .--apercu {
                div {height: 500px;}
            }
        }
    }
</style>
