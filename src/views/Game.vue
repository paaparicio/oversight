<template>
    <div id="game">
        <h2>{{ $t('views.game.question') }}</h2>
        <img :src="image" alt="Inscription de Oversight">

        <router-link v-for="(button, i) in $t('views.game.buttons')"
                     :key="i"
                     :to="{name: button.url}">
            {{button.name}}
        </router-link>

        <p>{{ $t("views.game.instructions") }}</p>

        <hr>
    </div>
</template>

<script>
    export default {
        name: "Game",
        data() {
            return {
                image: require(`@/assets/images/icons/${this.$i18n.messages[this.$i18n.locale].views.game.image}`)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import './../assets/scss/config';

    #game {
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        padding: 50px;

        font-family: $game--font-family;
        text-align: center;
        color: $game--font-color;

        h2 {font-size: $game--introduction-font_size}
        img {margin: 15px 0 50px 0;}

        a {
            display: block;
            width: 100%;

            padding: 15px 0;
            margin-bottom: 25px;

            font-size: $game--buttons-font_size;
            letter-spacing: $game--buttons-letters_spacing;
            text-transform: uppercase;
            color: $game--buttons-blue;

            border-style: solid;
            border-width: 1px;

            &:last-of-type {
                color: $game--buttons-pink;
                margin-bottom: 0;
            }
        }

        p {
            font-size: $game--description-font_size;
            margin: 50px 0 25px 0;
        }

        hr {
            display: block;

            width: 25%;
            height: 1px;

            border: none;
            background-color: $game--font-color;
        }
    }
</style>
