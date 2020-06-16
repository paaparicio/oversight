<template>
    <div id="team">
        <Persons :persons="$t('views.team.persons')"
                 ref="persons"/>

        <Additional :person="$t('views.team.additional')"
                    ref="additional"/>
    </div>
</template>

<script>
    import Additional from "../components/team/additional";
    import Persons from "../components/team/persons";

    import {mapState} from 'vuex';

    export default {
        name: "Team",
        components: {Persons, Additional},
        computed: {
            ...mapState(['width', 'breakpoint', 'camera'])
        },
        mounted() {
            const _ = this;
            const {persons, additional} = _.$refs;
            const tl = new _.TimelineLite();

            if(this.width < this.breakpoint) {
                tl.to(_.camera.position, 1, {x: 13, y: 2, z: -10, ease: _.Sine.easeInOut})
            } else {
                tl.to(_.camera.position, 1, {x: 12, y: 2, z: -14, ease: _.Sine.easeInOut})
            }

            tl
                .to(persons.$el.childNodes, 1, {css: {alpha: 1, translateY: 0}, stagger: .1, ease: _.Sine.easeOut})
                .to(additional.$el, 1, {css: {alpha: 1, translateX: 0}, ease: _.Sine.easeOut}, "-=.5")
        },
        beforeRouteLeave(to, from, next) {
            const _ = this;
            const {persons, additional} = _.$refs;
            const personsReverse = Array.from(persons.$el.childNodes).reverse();
            const tl = new _.TimelineLite({onComplete: next});

            tl
                .to(additional.$el, 1, {css: {alpha: 0, translateX: -10}, ease: _.Sine.easeOut}, "-=.5")
                .to(personsReverse, 1, {css: {alpha: 0, translateY: 10}, stagger: .1, ease: _.Sine.easeOut})
        }
    }
</script>

<style lang="scss" scoped>
    @import './../assets/scss/config';

    #team {
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>
