<template>
	<div class="container">
		<q-layout view="lHh lpr lFf" container class="mainDialog shadow-2 rounded-borders">
			<q-page-container class="mainRow no-scroll">
				<q-page class="no-scroll">
					<q-linear-progress  :value="progress" class="q-a-none linearProgress"/>
					<h5 class="mainHeader">2.Код подтверждения</h5>
					<p class="mainText">Введите код подтверждения из SMS-сообщения отправленного на номер</p>
					<p class="mainText"> {{this.tel}}</p>
					<div class="SMS">
						<q-input input-style="padding: 0 15px" class="mainInput" mask="#" outlined square v-model="codeOne" type="tel" color="orange" dense/>
						<q-input input-style="padding: 0 15px" class="mainInput"  mask="#" outlined square v-model="codeTwo" type="tel" color="orange" dense/>
						<q-input input-style="padding: 0 15px" class="mainInput"  mask="#" outlined square v-model="codeThree" type="tel" color="orange" dense/>
						<q-input input-style="padding: 0 15px" class="mainInput"  mask="#" outlined square v-model="codeFour" type="tel" color="orange" dense/>
					</div>
					<div class="counter">
						<span class="counterText" id="counterText">Выслать код повторно через</span><span id="timer"></span><a id="link" href="#"></a>
					</div>
					<div class="buttonSubmit" v-show="buttonSubmitShow">
						<q-btn no-caps @click="switchButton" ref="static" class="buttonSubmit" label="Отправить код">
						</q-btn>
					</div>
					<div class="buttonLoading" v-show="buttonLoadingShow">
						<q-btn no-caps class="buttonSubmit" label="" to="/registration/stepthree">
							<q-spinner-oval
								color="white"
								size="0.8em"
							/>
							<p class="buttonLoadingText">Отправка...</p>
						</q-btn>
					</div>
				</q-page>
			</q-page-container>
		</q-layout>
		<p class="signIn">Ошибся номером?<a href="#" class="signInLink">Ввести номер заново</a></p>
	</div>
</template>
<script>
  export default {
    async mounted() {
      this.countdown()
    },
    data(){
      return{
        buttonSubmitShow: true,
        buttonLoadingShow: false,
        tel:'123',
        codeOne:'',
        codeTwo:'',
        codeThree:'',
        codeFour:'',
        progress: 0.66,
      }
    },
    methods:{
      switchButton(){
        this.buttonSubmitShow = false,
        this.buttonLoadingShow = true
      },
      countdown(){
        let countDownDate = 59;
        let x = setInterval(function() {
          document.getElementById("timer").innerHTML = " 0:" + countDownDate;
          countDownDate = countDownDate - 1;
          if (countDownDate < 0) {
            clearInterval(x);
            document.getElementById("timer").innerHTML = "";
            document.getElementById("counterText").innerHTML = "Не пришел код? ";
            document.getElementById("link").innerHTML = "Отправить повторно";
          }
        }, 1000);
      }
    },
    name: "pageRegistrationStep2.1"
  }
</script>

<style scoped>
	.buttonLoadingText{
		margin: 5px;
	}
	.signInLink{
		padding: 0 5px;
		color: #142A42;
		font-weight: bold;
	}
	.signIn{
		width: 290px;
		color: #142A42;
		margin: 30px auto;
	}
	#link{
		font-weight: bold;
		color: #142A42;
	}
	.counter{
		width: 380px;
		margin: 10px auto;
	}
	.counterText{
		font-size: 15px;
		color: #142A42;
	}
	.SMS{
		width: 390px;
		display: flex;
		margin: 0 auto;
	}
	.mainDialog{
		height: 340px;
	}
	.linearProgress{
		color: #142A42;
	}
	.mainInput{
		text-align: center;
		width: 70px;
		margin: 20px auto;
	}
	.mainText{
		margin: 0 auto;
		width: 380px;
		color: #142A42;
		text-align: center;
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
		color: white;
		background-color: #FF6000;
		width: 380px;
		margin: 0 auto;
		height: 50px;
		vertical-align: center;
	}
	.buttonLoading{
		font-size: 17px;
		color: white;
		background-color: #FF6000;
		width: 380px;
		margin: 0 auto;
		height: 50px;
		vertical-align: center;
	}
</style>