<template>
    <div id="three">
        <div ref="three"></div>
        <div class="--overlay"></div>
    </div>
</template>

<script>
    import * as THREE from 'three';
    import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';

    import {mapState} from 'vuex';

    export default {
        name: "three",
        data() {
          return {
              background: "#474747",
              mouse: new THREE.Vector2(),
          }
        },
        computed: {
            ...mapState(['camera', 'scene', 'renderer'])
        },
        methods: {
            init: function() {
                this.renderer.setSize(window.innerWidth, window.innerHeight);
                this.$refs.three.appendChild(this.renderer.domElement);

                this.scene['background'] = new THREE.Color(this.background);
                this.renderer.shadowMap.enabled = true;

                this.camera.position.set(0, 5, 1);
            },
            FPSControls: function() {
                this.TweenMax.to(this.camera.rotation, 0.5, {
                    x: this.mouse.y / 7,
                    y: -this.mouse.x / 2
                })
            },
            onMouseMove: function(event) {
                this.mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
                this.mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

                this.FPSControls();
            },
            onWindowResize: function() {
                this.camera['aspect'] = window.innerWidth / window.innerHeight;
                this.camera.updateProjectionMatrix();

                this.renderer.setSize(window.innerWidth, window.innerHeight);
            },
            setSceneLights: function() {
                let spotLight = new THREE.SpotLight( 0xffffff, 1 );
                    spotLight.position.set( 0, 100, 100 );
                    spotLight.castShadow = true;

                this.scene.add(spotLight);
            },
            getModel: function() {
               new GLTFLoader().load(
                    'assets/models/city.gltf',
                    gltf => {
                        const model = gltf.scene;
                        const scale = 3;

                        model.scale.set(scale, scale, scale);

                        this.scene.add(model)
                    }
                );
            },
            animate: function() {
              requestAnimationFrame(this.animate);
              this.renderer.render(this.scene, this.camera);
            }
        },
        mounted() {
            const _ = this;

            _.init();
            _.getModel();
            _.setSceneLights();
            _.animate();

            window.addEventListener('resize', _.onWindowResize);
            window.addEventListener('mousemove', e => _.onMouseMove(e));
        }
    }
</script>

<style lang="scss" scoped>
    @import'./../../assets/scss/config';

    #three {
        width: 100vw;
        height: 100vh;

        position: absolute;
        z-index: -1;

        .--overlay {
            width: 100%;
            height: 100%;

            position: absolute;
            top: 0;

            background-color: rgba(0, 0, 0, 0.5);
        }
    }
</style>
