import Vue from 'vue'
// import Element from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en'
import App from './App.vue'
import router from './router/index'
import store from '../src/store/index'
// import * as PIXI from 'pixi.js'
// import FingerprintJS from '@fingerprintjs/fingerprintjs'
import './quasar'

Vue.config.productionTip = false;

// Vue.use(Element, { locale });
// Vue.use(PIXI);
// Vue.use(FingerprintJS);


new Vue({
  // PIXI,
	store,
  router,
  render: h => h(App)
}).$mount('#app');


