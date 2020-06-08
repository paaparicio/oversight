<template>
    <ul>
        <li v-for="(link, i) in $t('navigation')"
            :key="i">

            <router-link :to="{name: link}">
                0{{i + 1}}
            </router-link>

            <span v-if="$route.name === link"></span>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "navigation"
    }
</script>

<style lang="scss" scoped>
@import "../../assets/scss/config";

ul {
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    li{
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-bottom: 40px;

        a {
            font-family: $navigation--font_family;
            font-size: $navigation--font_size;
            font-weight: $navigation--font_weight;
            color: $navigation--font_color;

            &.router-link-exact-active {color: $navigation--font_color--active}
        }
        span {
             display: block;
             width: 80px;
             height: 3px;

             margin-left: 20px;

             background-color: $navigation--font_color--active;
         }

        @media (max-width: $breakpoint) {
            flex-direction: row-reverse;

            span {
                width: 30px;

                margin-left: 0;
                margin-right: 20px;
            }
        }
    }
}
</style>
