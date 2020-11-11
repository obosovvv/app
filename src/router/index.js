import Vue from 'vue'
import VueRouter from 'vue-router'
import pageRegistration from '../components/Registration/pageResitration'
import pageRegistrationStep2 from "../components/Registration/pageRegistrationStep2";
import pageRegistrationStep2one from "../components/Registration/pageRegistrationStep2one";
import pageRegistrationStepThree from "../components/Registration/pageRegistrationStepThree";
import EmptyParentComponent from "../components/EmptyParentComponent";
Vue.use(VueRouter);
const routes = [
  {
    path: '/registration',
    name: 'regist',
    component: EmptyParentComponent,
    children:[
      {
        path: '/registration/',
        name: 'registration',
        component: pageRegistration,
      },
      {
        path: '/registration/steptwo',
        name: 'registrationStepTwo',
        component: pageRegistrationStep2
      },
      {
        path:'/registration/steptwosms',
        name:'registrationStepThree',
        component: pageRegistrationStep2one
      },
      {
        path:'/registration/stepthree',
        name:'StepThree',
        component: pageRegistrationStepThree
      }
    ]
  },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router
