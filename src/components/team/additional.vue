<template>
    <div class="--additional">
        <h2>{{person.name}}</h2>
        <div>
            <h3>
                {{person.speciality}}
                <span v-if="$store.state.width >= $store.state.breakpoint"></span>
            </h3>

            <p>{{person.text}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            person: Object
        }
    }
</script>

<style lang="scss" scoped>
    @import './../../assets/scss/config';

    .--additional {
        font-family: $team--font-family;
        color: $team--font_color;

        opacity: 0;
        transform: translateX(-10px);

        h2 {font-size: 20px;}
        div {
            display: flex;
            flex-direction: row;

            h3 {
                display: flex;
                align-items: center;

                margin-bottom: 20px;

                font-size: $team--speciality-font_size;

                text-transform: lowercase;
                white-space: nowrap;

                color: $team--speciality-font_color;

                span {
                    display: block;
                    width: 50px;
                    height: $team--speciality-span_height;

                    margin-top: 2px;
                    margin: 0 10px;

                    background-color: $team--speciality-span_color;
                }
            }
            p {
                font-size: $team--text-font_size;
                margin-bottom: 15px;

                &:last-child {margin-bottom: 0}
            }
        }

        @media (max-width: $breakpoint) {
            @import './../../assets/scss/config';

            margin-top: 40px;
            padding-top: 20px;

            border-top: 1px solid $white;

            div {
                flex-direction: column;
                margin-bottom: 20px;

                h3, p {font-size: $team--text-font_size}
            }
        }
    }
</style>
