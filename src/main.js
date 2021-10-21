import Vue from 'vue'
import App from './App.vue'
import store from './store'
// import Vuex from 'vuex'
import VueAxios from 'vue-axios'
// import router from './router'
import axios from 'axios'
import VueRouter from 'vue-router'
import {routes} from './components/router/route'


// Vue.use(Vuex)
Vue.use(VueAxios, axios)
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({

  routes,
  mode:'history'
  
  })

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
