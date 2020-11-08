<template>
	<div class="container">
		<q-layout view="lHh lpr lFf" container style="height: 310px" class="shadow-2 rounded-borders">
			<q-page-container class="mainRow no-scroll">
				<q-page class="no-scroll">
					<q-linear-progress  :value="progress" class="q-a-none" style="color: #142A42" />
					<h5 class="mainHeader">2.Номер телефона</h5>
					<p class="mainText">Указанный номер будет использоваться для входа в системую. На него будет выслан код для верификации </p>
					<q-input mask="+7(###) ### - ####" class="mainInput" placeholder="+7 (916) 123-4567" outlined square v-model="tel" type="tel" color="orange" dense />
					<div class="buttonSubmit">
						<q-btn class="buttonSubmit" style="background: #FF6000; color: white" label="Выслать код" />
					</div>
				</q-page>
			</q-page-container>
		</q-layout>
	</div>
</template>

<script>
  import { colors } from 'quasar'
  export default {
    async mounted() {
      colors.setBrand('primary', '#142A42');
      colors.setBrand('orange', '#FF6000');
    },
    data(){
      return{
        tel:'',
        progress: 0.66,
      }
    },
    name: "pageRegistrationStep2"
  }
</script>

<style scoped>
	.mainInput{
		width: 380px;
		margin: 20px auto;
	}
	.mainText{
		margin: 0 auto;
		width: 380px;
		color: #142A42;
		font-size: 18px;
	}
	.mainHeader{
		font-weight: bold;
		width: 230px;
		margin: 20px auto;
		color: #142A42;
	}
	.container{
		width: 420px;
		margin: 20px auto;
	}
	.buttonSubmit{
		width: 380px;
		margin: 0 auto;
		height: 50px;
	}
</style>