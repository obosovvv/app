<template>
	<div id="app">
		<pageRegistrationStep2one/>
		<pageRegistrationStep2/>
		<pageRegistration/>
	</div>
</template>
<script>
	import pageRegistrationStep2one from "./components/pageRegistrationStep2one";
  import pageRegistrationStep2 from "./components/pageRegistrationStep2";
  import pageRegistration from "./components/pageResitration";
  export default {
    async mounted() {
    },
    data() {
      return {
      }
    },
    computed: {},
    methods: {
    },
    components: {
      pageRegistrationStep2one,
      pageRegistrationStep2,
      pageRegistration
    },
  }
</script>
<style>
	#app{
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale
		
	}
	
	
</style>
