<template>
    <li>
        <div class="--image">
            <div class="img"></div>
        </div>
        <h2>Emilien</h2>
        <h3>
            Developpeur
            <span v-if="$store.state.width >= $store.state.breakpoint"></span>
        </h3>
        <p v-for="(paragraphe, i) in getTextParagraphe(text)"
           :key="i">
            {{paragraphe}}
        </p>
    </li>
</template>

<script>
    export default {
        data() {
          return {
              text: "Dans une société totalitaire, les habitants sont observés par des caméras et notés sur leurs moindres faits et gestes. Vous découvrirez un trajet semé d'embuches et d'occasion de perdre ou gagner des points.\n \nDans une société totalitaire, les habitants sont observés par des caméras et notés sur leurs moindres faits et gestes.Vous découvrirez un trajet semé d'embuches et d'occasion de perdre ou gagner des points."
          }
        },
        methods: {
            getTextParagraphe: function(text) {
                return text.split('\n \n')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "./../../assets/scss/config";

    li {
        font-family: $primary-font;
        color: $white;

        .--image {
            padding-top: 20px;
            margin-bottom: 20px;

            border-top: 1px solid $white;
            box-sizing: border-box;

            .img {
                height: 100px;
                background-color: $primary-color;
            }
        }
        h2 {font-size: 20px;}
        h3 {
            display: flex;
            align-items: center;

            margin-bottom: 20px;

            font-size: 11px;
            text-transform: lowercase;
            color: $primary-color;

            span {
                display: block;
                width: 100%;
                height: 1px;

                margin-top: 2px;
                margin-left: 10px;

                background-color: grey;
            }
        }
        p {
            font-size: 11px;
            margin-bottom: 15px;

            &:last-child {margin-bottom: 0}
        }

        @media (max-width: $breakpoint) {
            .--image {width: 50%;}
            h2 {font-size: 20px}
            h3, p {font-size: 15px}
        }
    }
</style>
