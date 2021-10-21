import Vue from 'vue'
import Vuex from 'vuex'
import {chatBox} from './chatBox'
import {login} from './login'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    chatBox,
    login
    

  }
})
