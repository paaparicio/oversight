<template>
    <div id="download">
        <TextComponent class="--left"
                       :introduction="$t('views.download.introduction')"
                       :title="$t('views.download.title')"
                       :description="$t('views.download.description')"/>

        <div class="--right">
            <GameDownload v-for="(game, i) in $t('views.download.games')"
                          :key="i"
                          :name="game.name"
                          :logo="game.logo"
                          :file="game.file"/>
        </div>
    </div>
</template>

<script>
    import GameDownload from "../components/default/game";
    import TextComponent from "../components/download/text";

    export default {
        name: "Download",
        components: {GameDownload, TextComponent}
    }
</script>

<style lang="scss" scoped>
    @import './../assets/scss/config';

    #download {
        height: auto;
        display: flex;

        .--left {width: 35%;}

        .--right {
            width: 65%;

            display: flex;
            justify-content: space-between;

            padding-left: 50px;
            box-sizing: border-box;
        }
    }


</style>
