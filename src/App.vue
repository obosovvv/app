<template>
	<div id="app">
		<canvas id="mycanvas">
		</canvas>
	</div>
</template>
<script>
  import * as PIXI from 'pixi.js';
  export default {
    mounted() {
      this.mainAction();
    },
    data() {
      return {}
    },
    computed: {},
    methods: {
      mainAction() {
        const canvas = document.getElementById('mycanvas');
        const app = new PIXI.Application({
          view: canvas,
          width: innerWidth,
          height: innerHeight
        });
        document.body.appendChild(app.view);
        let loader = new PIXI.Loader;
        loader
        .add("/img1.jpg")
        .add('/img2.jpg')
        .add('/img3.jpg')
        .add('/img4.jpg')
        .add('/img5.jpg')
        .add('/img6.jpg')
        .add('/img7.jpg')
        .add('/button.png')
        .load(setup);
        let getRand = (min, max) => {
          return Math.floor(Math.random() * (max - min) ) + min;
        };

        function setup() {
          console.log(getRand(1,8));
          let button = new PIXI.Sprite(loader.resources['/button.png'].texture);
          button.scale.x = 0.3;
          button.scale.y = 0.3;
          button.x = 800;
          button.y = 0;
          app.stage.addChild(button);
          button.interactive = true;
          button.on('mousedown', myFunc);
          function myFunc() {
            app.ticker.add(gameLoop);
            slot1.ifState = true;
            slot2.ifState = true;
            slot3.ifState = true;
            slot4.ifState = true;
            slot5.ifState = true;
            }
          class Create {
            constructor(options) {
              this.ifState = options.ifState;
              this.x = options.x;
              this.roulette = options.roulette;
              this.mainArray = options.mainArray;
              this.slotSpeed = options.slotSpeed;
              for (let i = 1; i < 8; i++) {
                let img = new PIXI.Sprite(loader.resources[`/img${i}.jpg`].texture);
                img.y = 150 * (i - 1) - 150;
                img.x = this.x;
                img.alpha = 0.991 + i;
                this.mainArray.push(img);
                this.roulette.addChild(img);
                app.stage.addChild(this.roulette);
              }
              console.log(this.roulette);
              console.log(this.mainArray)
            }
            play(slot, rand) {
              if (slot.ifState) {
                slot.roulette.children.forEach(checkY);
              }
              function checkY(element) {
                element.y += slot.slotSpeed;
                if (element.y > 900) {
                  slot.roulette.removeChild(element);
                }
                if (slot.roulette.children.length < 7 && slot.roulette.children.length > 5) {
                  element.y = -150;
                  slot.roulette.addChildAt(element, 0);
                  setTimeout(checkAlpha, slot.sec);
                }
              }
              function checkAlpha() {
                if (slot.roulette.children[3].alpha === slot.mainArray[rand - 1].alpha) {
                  slot.ifState = false;
                  slot.slotSpeed = 10
                }
              }
            }
          }
          let slot1 = new Create({
            x: 600,
            roulette: new PIXI.Container(),
            mainArray: [],
            ifState: false,
            sec: 9000,
            slotSpeed: 10
          });
          let slot2 = new Create({
            x: 450,
            roulette: new PIXI.Container(),
            mainArray: [],
            ifState: false,
            sec: 10000,
            slotSpeed: 10
          });
          let slot3 = new Create({
            x: 300,
            roulette: new PIXI.Container(),
            mainArray: [],
            ifState: false,
            sec: 11000,
            slotSpeed: 10
          });
          let slot4 = new Create({
            x: 0,
            roulette: new PIXI.Container(),
            mainArray: [],
            ifState: false,
            sec: 12000,
            slotSpeed: 10
          });
          let slot5 = new Create({
            x: 150,
            roulette: new PIXI.Container(),
            mainArray: [],
            ifState: false,
            sec: 13000,
            slotSpeed: 10
          });
          function gameLoop() {
            slot1.play(slot1, getRand(1,8));
            slot2.play(slot2, getRand(1,8));
            slot3.play(slot3, getRand(1,8));
            slot4.play(slot4, getRand(1,8));
            slot5.play(slot5, getRand(1,8));
            // console.log(slot2)
          }
        }
      },
    },
      components: {
        // navmenu,
        // modalWindow: modalWindow
      },
    }
	</script>
<style>
	body{
		margin: 0;
		padding: 0;
	}
	canvas{
		display: block;
		background: blue;
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
</style>
