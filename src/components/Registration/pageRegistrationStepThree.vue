<template>
	<div class="container">
		<q-layout view="lHh lpr lFf" container class="mainDialog shadow-2 rounded-borders">
			<q-page-container class="mainRow no-scroll">
				<q-page class="no-scroll">
					<q-linear-progress  :value="progress" class="linearProgress q-a-none"/>
					<h5 class="mainHeader">3.Данные о компании</h5>
					<div>
					
					</div>
				</q-page>
			</q-page-container>
		</q-layout>
	</div>
</template>

<script>
  export default {
    async mounted() {
    },
    data(){
      return{
        tel:'',
        progress: 1,
      }
    },
    name: "pageRegistrationStepThree"
  }
</script>

<style scoped>
	.mainDialog{
		height: 310px;
	}
	.linearProgress{
		color: #142A42;
	}
	.mainInput{
		width: 380px;
		margin: 20px auto;
	}
	.mainText{
		margin: 0 auto;
		width: 380px;
		color: #142A42;
		font-size: 16px;
	}
	.mainHeader{
		font-weight: bold;
		width: 270px;
		margin: 20px auto;
		color: #142A42;
	}
	.container{
		width: 420px;
		margin: 20px auto;
	}
	.buttonSubmit{
		font-size: 17px;
		width: 380px;
		margin: 0 auto;
		height: 50px;
	}
</style>