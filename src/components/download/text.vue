<template>
    <div>
        <p>{{introduction}}</p>
        <h2>{{title}}</h2>

        <p v-for="(paragraphe, i) in getTextParagraphe(description)"
           :key="i">

            {{paragraphe}}
        </p>
    </div>
</template>

<script>
    import {paragraphe} from "../../mixins/global";

    export default {
        props: {
            introduction: String,
            title: String,
            description: String
        },
        mixins: [paragraphe]
    }
</script>

<style lang="scss" scoped>
    @import './../../assets/scss/config';

    div {
        font-family: $download--font_family;

        p {
            font-size: $download--text-font_size;
            color: $download--text-font_color;

            margin-bottom: 15px;

            &:last-child {margin-bottom: 0;}
        }

        h2 {
            font-size: $download--title-font_size;
            color: $download--title-font_color;

            margin: 25px 0;
        }
    }
</style>
