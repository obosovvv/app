<template>
	<div class="container">
		<q-layout view="lHh lpr lFf" container class="shadow-2 rounded-borders mainDialog">
			<q-page-container>
				<q-page class="no-scroll">
					<q-linear-progress  :value="progress" class="q-a-none linearProgress" />
					<h5 class="mainHeader">1.Регистрация</h5>
					<div class="select">
						<p class="selectHeader">Тип профиля</p>
						<q-select  dense outlined v-model="model" :options="options" class="selectReg allInputStyle" color="orange" />
					</div>
					<div class="inputName">
						<p class="inputNameHeader">Имя</p>
						<q-input @focusin="showingName = true" @focusout="showingName = false"  class="allInputStyle" dense outlined v-model="textName" color="orange">
							<div class="inInput">
								<q-tooltip v-model="showingName" anchor="top right" self="top left" max-width="110px" content-class="bg-primary" content-style="font-size: 14px ">
									Имя будет отображаться вашим контрагентам
								</q-tooltip>
							</div>
						</q-input>
					</div>
					<div class="inputName">
						<p class="inputNameHeader">Фамилия</p>
						<q-input @focusin="showing = true" @focusout="showing = false" ref="input" class="allInputStyle" dense outlined v-model="textSecName" color="orange">
							<div class="inInput">
								<q-tooltip ref="tooltip" v-model="showing" anchor="center right" self="center left" max-width="110px" class="tooltipMain" content-class="bg-primary" content-style="font-size: 14px">
									Фамилия будет отображаться
									вашим контрагентам
								</q-tooltip>
							</div>
						</q-input>
					</div>
					<div class="inputName">
						<p class="inputNameHeader">Придумайте пароль</p>
						<q-input class="allInputStyle" dense outlined color="orange" v-model="password" :type="isPwd ? 'password' : 'text'" >
							<template v-slot:append>
								<q-icon
									:name="isPwd ? 'visibility_off' : 'visibility'"
									class="cursor-pointer"
									@click="isPwd = !isPwd"
								/>
							</template>
						</q-input>
					</div>
					<div class="license">
						<p class="licenseText">Нажимая «Продолжить», я подтверждаю, что я согласен c
							<a href="#" class="licenseLink">
								пользовательским соглашением
							</a>
						</p>
					</div>
					<div class="buttonSubmit">
						<q-btn no-caps class="buttonSubmit" to="/registration/steptwo" label="Продолжить" />
					</div>
				</q-page>
			</q-page-container>
		</q-layout>
		<p class="signIn">У вас уже есть аккаунт?<a href="#" class="signInLink">Войти</a></p>
		<router-view/>
	</div>
</template>

<script>
  import { colors } from 'quasar'
  export default {
    async mounted() {
      this.colorLoad();
    },
    data() {
      return {
        showingName: false,
        showing: false,
        progress: 0.33,
        model: null,
        options: [
          'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
        ],
        textName:'',
        textSecName:'',
        password: '',
        isPwd: true,
      }
    },
    computed: {},
    methods: {
      colorLoad(){
        colors.setBrand('primary', '#142A42');
        colors.setBrand('orange', '#FF6000');
      },
    },
    components: {

    },
  }
</script>
<style scoped>
	.linearProgress{
		color: #142A42;
	}
	.inInput{
		position: relative;
		left: 25px;
		width: 1px;
		height: 1px;
	}
	.signInLink{
		padding: 0 5px;
		color: #142A42;
		font-weight: bold;
	}
	.signIn{
		width: 240px;
		color: #142A42;
		margin: 30px auto;
	}
	.buttonSubmit{
		font-size: 17px;
		color: white;
		background-color: #FF6000;
		width: 380px;
		margin: 0 auto;
		height: 50px;
	}
	.licenseLink{
		color: #FF6000;
		font-weight: bold;
	}
	.license{
		width: 380px;
		margin: 40px auto;
	}
	.licenseText{
		color: #142A42;
		font-size: 17px;
	}
	.inputNameHeader{
		margin-bottom: 5px;
		margin-top: 30px;
		color: #142A42;
		font-weight: bold;
	}
	.inputName{
		margin: 20px auto;
		width: 380px;
	}
	.select{
		margin: 0 auto;
		width: 380px;
	}
	.selectHeader{
		margin-bottom: 5px;
		margin-top: 30px;
		color: #142A42;
		font-weight: bold;
	}
	.selectReg{
		color: #142A42;
	}
	.container{
		width: 420px;
		margin: 20px auto
		
	}
	.mainDialog{
		height: 650px;
	}
	.mainHeader{
		font-weight: bold;
		width: 150px;
		margin: 20px auto;
		color: #142A42;
	}
</style>
