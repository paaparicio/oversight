<template>
    <div class="--additional">
        <h2>Dadaoudidi</h2>
        <div>
            <h3>
                Sound design
                <span v-if="$store.state.width >= $store.state.breakpoint"></span>
            </h3>

            <p>Dans une société totalitaire ,les habitants sont observés par des caméras et notés sur leurs moindres faits et gestes. Vous découvrirez un trajet semé d'embuches et d'occasion de perdre ou gagner des points.</p>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    @import './../../assets/scss/config';

    .--additional {
        font-family: $primary-font;
        color: $white;

        h2 {font-size: 20px;}
        div {
            display: flex;
            flex-direction: row;

            h3 {
                display: flex;
                align-items: center;

                margin-bottom: 20px;

                font-size: 11px;

                text-transform: lowercase;
                white-space: nowrap;

                color: $primary-color;

                span {
                    display: block;
                    width: 50px;
                    height: 1px;

                    margin-top: 2px;
                    margin: 0 10px;

                    background-color: grey;
                }
            }
            p {
                font-size: 11px;
                margin-bottom: 15px;

                &:last-child {margin-bottom: 0}
            }
        }

        @media (max-width: $breakpoint) {
            margin-top: 40px;
            padding-top: 20px;

            border-top: 1px solid $white;

            h2 {font-size: 20px}

            div {
                flex-direction: column;
                margin-bottom: 20px;

                h3, p {font-size: 15px}
            }
        }
    }
</style>
