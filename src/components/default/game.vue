<template>
    <div class="container--download">
        <div class="--image">
            <img :src="source"
                 :alt="'Icon '+ name">
        </div>

        <p>{{name}}</p>

        <a @click="onSendAnalyticsEvent"
           :href="file"
           download>

            Télécharger
        </a>
    </div>
</template>

<script>
    export default {
        props: {
            name: String,
            logo: String,
            file: String
        },
        methods: {
          onSendAnalyticsEvent: function() {
              this.$ga.event('Download', 'Click', this.name)
          }
        },
        data() {
            return {
                source: require(`@/assets/images/icons/${this.logo}`)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import './../../assets/scss/config';

    .container--download {
        display: flex;
        flex-direction: column;
        align-items: center;

        border: 1px solid $primary-color;
        padding: 25px;
        box-sizing: border-box;

        margin-left: 25px;

        &:first-child {margin-left: 0;}

        .--image {
            width: 75%;

            img {
                width: 100%;
                object-fit: cover;
                object-position: center;
            }
        }

        p {
            font-family: $primary-font;
            font-size: 15px;
            color: $primary-color;
            margin-bottom: 50px;
            margin-top: 15px;
            text-align: center;
        }

        a {
            width: 100%;
            display: block;
            padding: 5px 0;
            font-family: $primary-font;
            font-size: 12px;
            color: $white;
            text-align: center;
            border: 1px solid $white;
        }
    }
</style>
