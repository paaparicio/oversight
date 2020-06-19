<template>
    <ul>
        <li v-for="(link, i) in $t('footer')"
            :key="i">

            <a :href="link.url">
                <i :class="link.icon"></i>
                <span>{{ link.name }}</span>
            </a>
        </li>
    </ul>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/config";

    ul {
        li {
            margin-top: 10px;

            a {
                display: flex;
                align-items: center;

                color: $footer--font_color;
                transition: .3s;

                i {font-size: $footer--icon-font_size;}

                span {
                    font-family: $footer--font_family;
                    font-size: $footer--font_size;
                    font-weight: $footer--font_weight;

                    margin-left: 10px;
                }

                &:hover {
                    color: $primary-color;
                    transition: .3s;
                }
            }
        }
    }
</style>
