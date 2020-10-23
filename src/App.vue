<template>
	<div id="app">
		<!--		<div>-->
<!--			<navmenu-->
<!--			/>-->
<!--		</div>-->
<!--		<router-view/>-->
		<canvas id="mycanvas">
		</canvas>
<!--		<el-button :onclick="moveGO" type="primary">action</el-button>-->
	</div>
</template>
<script>
      // import modalWindow from './components/modalWindow'
      // import navmenu from "./components/navmenu";
  import * as PIXI from 'pixi.js';
  export default {
    mounted() {
      this.mainAction();
    },
    data() {
      return{
      }
    },
    computed: {
    },
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
        let roulette = new PIXI.Container();
        let random = 7;
        let mainArray = [];
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
        let ifState = false;

        let state = play;
        function setup() {
          let button = new PIXI.Sprite(loader.resources['/button.png'].texture);
          button.scale.x = 0.3;
          button.scale.y = 0.3;
          button.x = 800;
          button.y = 0;
          app.stage.addChild(button);
          button.interactive = true;
          button.on('mousedown', myFunc);
          function myFunc() {
            ifState = true;
          }
          for (let i = 1; i < 8; i++) {
            let img = new PIXI.Sprite(loader.resources[`/img${i}.jpg`].texture);
            img.y = 150 * (i - 1) - 150;
            // console.log(img.y);
            img.alpha = 0.991 + i;
            mainArray.push(img);
            roulette.addChild(img);
          }
          console.log(roulette.children);
          console.log(mainArray);
          app.stage.addChild(roulette);
          app.ticker.add(gameLoop);
        }
        function gameLoop(delta) {
          state(delta);
        }
        function play() {
          if (ifState){
            roulette.children.forEach(checkY);
          }
          function checkY(element) {
            element.y += 15;
                // console.log(roulette.children[random-1].y);
            if(element.y > 900){
              roulette.removeChild(element);
            }
            if(roulette.children.length < 7 && roulette.children.length > 5){
              element.x = 0;
              element.y = -150;
              roulette.addChildAt(element, 0)
            }
            setTimeout(checkAlpha, 8000);
            function checkAlpha(){
              if (roulette.children[3].alpha === mainArray[random - 1].alpha){
                console.log(roulette.children[3]);
                console.log(mainArray[random - 1]);
                ifState = false
              }
            }
            
            // if(roulette.children[3].alpha === mainArray[3].alpha){
            //   console.log('false');
              // console.log(roulet;te.children);
              // console.log(chosenPic);
              // console.log(roulette.children[random]);
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
