import axios from "axios"
import {url} from './url'

export const login = {
    namespaced: true,
    state: {
        loggedUserData: {},
        loggedRoleId:'',
        loginError: ""
    },
    getters: {

    },
    mutations: {
        savedLoggedData(state, payload) {
            state.loggedUserData = payload.data
            state.loggedRoleId= payload.data.data.roleId;
            console.log(state.loggedRoleId)
            state.loginError = {}
            // localStorage.setItem('loginStatus', true)
            localStorage.setItem('access_token', payload.data.data.token)
            localStorage.setItem('roleId', payload.data.data.roleId )
        }
    },
    actions: {
        async userLogin(context, payload) {
            console.log("I am inside actions")
            try {
                let result = await axios.post(`${url}/login`, payload)
                
                context.commit('savedLoggedData', result)
                console.log('results', result)
            } catch (err) {
                console.log(err);
            }
        }
    }
}