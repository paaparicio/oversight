<template>
    <li>
        <div class="--image">
            <img :src="require(`@/assets/images/team/${person.image}`)" alt="Profile personne">
        </div>

        <h2>{{person.name}}</h2>

        <h3>
            {{person.speciality}}
            <span v-if="$store.state.width >= $store.state.breakpoint"></span>
        </h3>

        <p v-for="(paragraphe, i) in getTextParagraphe(person.text)"
           :key="i">
            {{paragraphe}}
        </p>

        <div class="--social">
            <a v-if="person.social.instagram"
               :href="person.social.instagram"
               target="_blank">

                <i class="fab fa-instagram"></i>
            </a>

            <a v-if="person.social.linkedin"
               :href="person.social.linkedin"
               target="_blank">

                <i class="fab fa-linkedin"></i>
            </a>

            <a v-if="person.social.twitter"
               :href="person.social.twitter"
               target="_blank">

                <i class="fab fa-twitter"></i>
            </a>

            <a v-if="person.social.website"
               :href="person.social.website"
               target="_blank">

                <i class="fas fa-globe"></i>
            </a>
        </div>
    </li>
</template>

<script>
    import {paragraphe} from "../../mixins/global";

    export default {
        props: {
            person: Object
        },
        mixins: [paragraphe]
    }
</script>

<style lang="scss" scoped>
    @import "./../../assets/scss/config";

    li {
        font-family: $team--font-family;
        color: $team--font_color;

        opacity: 0;
        transform: translateY(10px);

        .--image {
            padding-top: 20px;
            margin-bottom: 20px;

            border-top: $team--speciality-span_height solid $team--font_color;
            box-sizing: border-box;

            img {
                height: 100px;
                width: 100%;

                object-fit: contain;
                object-position: left;
            }
        }
        .--social {
            a {
                font-size: 20px;
                color: $team--font_color;

                margin-right: 10px;

                transition: .3s;

                &:hover {
                    color: $primary-color;
                    transition: .3s;
                }
            }
        }
        h2 {font-size: $team--name-font_size;}
        h3 {
            display: flex;
            align-items: center;

            margin-bottom: 20px;

            font-size: $team--speciality-font_size;
            text-transform: lowercase;
            color: $team--speciality-font_color;

            span {
                display: block;
                width: 100%;
                height: $team--speciality-span_height;

                margin-top: 2px;
                margin-left: 10px;

                background-color: $team--speciality-span_color;
            }
        }
        p {
            font-size: $team--text-font_size;
            margin-bottom: 15px;

            &:last-child {margin-bottom: 0}
        }

        @media (max-width: $breakpoint) {
            @import "./../../assets/scss/config";

            .--image img {height: 200px}
            h3, p {font-size: $team--text-font_size}
        }

        @media (min-width: $breakpoint--min) {
            .--image img {height: 150px}
        }
    }
</style>
