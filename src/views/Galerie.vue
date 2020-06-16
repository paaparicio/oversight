<template>
    <div id="galerie">
        <Pictures :images="$t('views.galerie')"
                  ref="pictures"/>
    </div>
</template>

<script>
    import Pictures from "../components/galerie/pictures";

    import {mapState} from 'vuex';

    export default {
        name: "Galerie",
        components: {Pictures},
        data() {
          return {
              show: false
          }
        },
        computed: {
            ...mapState(['width', 'breakpoint', 'camera', 'rotation'])
        },
        mounted() {
            const _ = this;
            const {pictures} = _.$refs;
            const tl = new _.TimelineLite();

            _.$store.commit('setRotation', (125 * Math.PI / 180));

            if(this.width < this.breakpoint) {
                tl
                    .to(_.camera.position, 1, {x: -15, y: 3, z: 1, ease: _.Sine.easeInOut})
                    .to(_.camera.rotation, 1, {y: _.rotation, ease: _.Sine.easeInOut})
            } else {
                tl
                    .to(_.camera.position, 1, {x: -16, y: 3, z: -1, ease: _.Sine.easeInOut})
                    .to(_.camera.rotation, 1, {y: _.rotation, ease: _.Sine.easeInOut})
            }

            tl.to(pictures.$el.childNodes, 1, {css: {alpha: 1, translateY: 0}, stagger: .1, ease: _.Sine.easeOut})
        },
        beforeRouteLeave(to, from, next) {
            const _ = this;
            const {pictures} = _.$refs;
            const picturesReverse = Array.from(pictures.$el.childNodes).reverse();

            const onNext = () => {
                _.$store.commit('setRotation', 0);
                next();
            }
            const tl = new _.TimelineLite({onComplete: onNext});

            tl
                .to(picturesReverse, 1, {css: {alpha: 0, translateY: 10}, stagger: .1, ease: _.Sine.easeOut})
                .to(_.camera.rotation, 1, {y: 0, ease: _.Sine.easeInOut}, "-=1");
        }
    }
</script>

<style lang="scss" scoped>
    @import "./../assets/scss/config";

    #galerie {height: 100%}
</style>
