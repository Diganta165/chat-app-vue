// import VueRouter from "vue-router"
import login from "../auth/login"
// import { chatBox } from "../../store/chatBox"
import chatBox from '../../components/chatBox'
// import Vue from "vue"

// Vue.use(VueRouter)
export const routes = [
    {path:'/login',component:login},
    {path:'/chatbox', component:chatBox},
    // {path:'/chatbox', component:chatBox},
]



// const router = new VueRouter({
//     mode: 'history',
//     base: process.env.BASE_URL,
//     routes
// })

// export default router