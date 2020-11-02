<template>
	<div id="app">
<!--		<el-button :onclick="initServ" type="primary">Primary</el-button>-->
	</div>
</template>
<script>
  import server from '../src/components/server'
  export default {
    async mounted() {
      this.initServ()
    },
    data() {
      return {
        mainData: server,
        lastId:'',
        result:'',
        mainArray:[],
        index: 0,
        lastHash:''
      }
    },
    computed: {
    },
    methods: {
      //  {

      // https://my-json-server.typicode.com/obosovvv/server/db
      async initServ(){
        let getObj = (element) => {
          console.log(this.lastId);
          if(this.lastId === element.data.hash){
            return element
          }
        };
        this.mainArray = Object.values(this.mainData);
        this.lastId = this.mainArray[this.index].data.hash;
        this.result = this.mainArray.find(getObj);
        console.log(this.result);
        const getData = () => {
          this.lastHash = this.mainArray[this.index].data.hash;
          let result = this.mainArray.find(getObjByHash);
          console.log(result);
          this.index += 1;
          // const httpRequest = new XMLHttpRequest();
          // httpRequest.open('GET', url);
          // httpRequest.send();
          // httpRequest.onload = () => {
          //   const mainData = JSON.parse(httpRequest.response);
          //   console.log(mainData);
          //   let lastId = mainData.posts;
          //   console.log(server)
          // };
        };
        const getObjByHash = (element) => {
          if(this.lastHash === element.data.precedingHash){
            return element
          }
        };
        setInterval(getData, 10000);
      },
    },
    components: {},
  }
</script>
<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
</style>
