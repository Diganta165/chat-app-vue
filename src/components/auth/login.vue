<template>
  <div>
      <h1>This is Login</h1>
      <form @submit.prevent="handleLogin">
          <input placeholder="Email" type="email" v-model="userData.email" />
      <input placeholder="Passeord" type="password" v-model="userData.password"/>
      <button>SignIn</button>
      </form>
  </div>
</template>

<script>
export default {
name: "logIn",
data(){
    return{
        userData:{
            email:'',
            password:''
        }
    }
},
methods:{
    handleLogin(){
        console.log("I am email & password", this.userData)
        this.$store.dispatch('login/userLogin',this.userData)
        this.$router.push('/chatbox')
        
    }
}
}
</script>

<style>

</style>