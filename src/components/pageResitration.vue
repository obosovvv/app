<template>
	<div class="container">
		<q-layout view="lHh lpr lFf" container style="height: 670px" class="shadow-2 rounded-borders">
			<q-page-container>
				<q-page class="no-scroll">
					<q-tabs
						v-model="tab"
						active-color="primary"
						align="justify"
						class="lineTab"
						switch-indicator
						:breakpoint="200"
					>
						<q-tab name="registrationStep1"/>
						<q-tab name="registrationStep2"/>
						<q-tab name="registrationStep3"/>
					
					</q-tabs>
					<!--						<q-linear-progress rounded="true" :value="progress" class="q-a-none" style="color: #142A42" />-->
					<h4 class="mainHeader">1.Регистрация</h4>
					<div class="selecter">
						<p class="selectHeader">Тип профиля</p>
						<q-select  dense outlined v-model="model" :options="options" class="selectReg allInputStyle" color="orange" />
					</div>
					<div class="inputName">
						<p class="inputNameHeader">Имя</p>
						<q-input class="allInputStyle" dense outlined v-model="textName" color="orange">
							<q-tooltip anchor="center right" self="center left" max-width="240px" content-class="bg-primary" content-style="font-size: 14px ">
								Имя будет отображаться вашим контрагентам
							</q-tooltip>
						</q-input>
					</div>
					<div class="inputName">
						<p class="inputNameHeader">Фамилия</p>
						<q-input class="allInputStyle" dense outlined v-model="textSecName" color="orange">
							<q-tooltip anchor="center right" self="center left" max-width="240px" content-class="bg-primary" content-style="font-size: 14px ">
								Фамилия будет отображаться
								вашим контрагентам
							</q-tooltip>
						</q-input>
					</div>
					<div class="inputName">
						<p class="inputNameHeader">Придумайте пароль</p>
						<q-input class="allInputStyle" dense outlined color="orange" v-model="password"  :type="isPwd ? 'password' : 'text'" >
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
						<p class="licenseText">Нажимая «Продолжить», я подтверждаю, что я согласен c <a href="#" class="licenseLink">
							пользовательским соглашением
						</a>
						</p>
					</div>
					<div class="buttonSubmit">
						<q-btn class="buttonSubmit" style="background: #FF6000; color: white" label="Продолжить" />
					</div>
				</q-page>
			</q-page-container>
		</q-layout>
		<p class="signIn">У вас уже есть аккаунт?    <a href="#" class="signInLink">Войти</a></p>
	</div>
</template>

<script>
  import { colors } from 'quasar'
  export default {
    async mounted() {
      colors.setBrand('primary', '#142A42');
      colors.setBrand('orange', '#FF6000');
      const { getPaletteColor } = colors;
      console.log(getPaletteColor('orange'));
    },
    data() {
      return {
        tab: 'registrationStep1',
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
    },
    components: {},
  }
</script>
<style scoped>
	.signInLink{
		color: #142A42;
		font-weight: bold;
	}
	.signIn{
		width: 240px;
		color: #142A42;
		
		margin: 30px auto;
	}
	.buttonSubmit{
		width: 400px;
		margin: 20px auto;
		height: 50px;
	}
	.licenseLink{
		color: #FF6000;
		font-weight: bold;
	}
	.license{
		width: 400px;
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
	.allInputStyle:hover{
		border-color: #FF6000;
	}
	.inputName{
		margin: 20px auto;
		width: 400px;
	}
	.selecter{
		margin: 0 auto;
		width: 400px;
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
	.lineTab{
		height: 2px;
		background-color: lightgray;
	}
	.container{
		width: 420px;
		margin: 20px auto
		
	}
	.mainHeader{
		font-weight: bold;
		width: 250px;
		margin: 20px auto;
		color: #142A42;
	}
</style>
