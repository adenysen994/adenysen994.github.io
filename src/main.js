
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import VueLocalStorage from 'vue-localstorage'
import 'vuetify/dist/vuetify.min.css'
import * as fb from 'firebase'

Vue.use(Vuetify)
Vue.use(VueLocalStorage)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyDz3trWpxkdo50ebtlPW2FKy19srSSk8hs',
      authDomain: 'spa-test-4feac.firebaseapp.com',
      databaseURL: 'https://spa-test-4feac.firebaseio.com',
      projectId: 'spa-test-4feac',
      storageBucket: 'spa-test-4feac.appspot.com',
      messagingSenderId: '71687004212'
    })

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  }
})
