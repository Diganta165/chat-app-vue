import { url } from "./url"
import axios from "axios"


export const chatBox = {
    namespaced:true,
    state:{
        id: 1,
        countryList:[]
    },
    getters:{
        allMessages(state){
            return state.countryList
        }
    },
    mutations:{
        loadMessagesList(state, payload){
            state.countryList = payload;
            console.log("This is Country List",state.countryList)
        }
    },
    actions:{
        async chatMessage(context, payload){
            console.log("this is payload",payload)
            
            console.log('Payload', payload)
            try{
                
                let headers = {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                  }
                // let result = await axios.post(`${url}/admin/create/country/${this.state.id}`,{name:payload, status:1},{headers})
                let result = await axios.post(`${url}/admin/create/country`,{name:payload.message, status:1},{headers})
                // context.commit('')
                console.log("this is result",result,context);
                
            }catch(err){
                console.log(err)
            }
        },

        async loadMessages(context){
            try{
                let headers= {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`
                }
                let result = await axios.get(`${url}/admin/country`,{headers})
                console.log("this is loadMessage result", result.data.data)
                console.log("this is loadMessage context", context)
                
                // console.log("this is loadMessage payload", payload)
                context.commit('loadMessagesList',result.data.data)
            }catch(err){
                console.log("This is loadMessages Error",err)
            }
        }
    }
}