<template>
    <div id="about">
        <div class="--top">
            <p>{{ $t('views.about.text') }}</p>

            <div>
                <img :src="image" alt="">
            </div>
        </div>

        <div class="--apercu">
            <p>{{ $t('views.about.question') }}</p>

            <div>
                <Video :url="$t('views.about.url')"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Video from "../components/default/video";

    export default {
        name: "About",
        components: {Video},
        data() {
            return {
                image: require(`@/assets/images/about/${this.$i18n.messages[this.$i18n.locale].views.about.image}`)
            }
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

            p {width: 35%}

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
                width: 100%;

                margin-top: 25px;
            }
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
    }
</style>
