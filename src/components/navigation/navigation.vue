<template>
    <ul>
        <li v-for="(link, i) in links"
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
        name: "navigation",
        data() {
            return {
                links: ['Home', 'Download', 'About', 'Galerie', 'Team']
            }
        }
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
    }
}
</style>
