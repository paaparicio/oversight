<template>
    <ul>
        <li>
            <router-link to="#">
                <i class="fab fa-instagram"></i>
                <span>Oversight_thegame</span>
            </router-link>
        </li>
        <li>
            <router-link to="#">
                <i class="fab fa-discord"></i>
                <span>discord/oversight</span>
            </router-link>
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

                i {font-size: $footer--icon-font_size;}

                span {
                    font-family: $footer--font_family;
                    font-size: $footer--font_size;
                    font-weight: $footer--font_weight;

                    margin-left: 10px;
                }
            }
        }
    }
</style>
