<template>
  <div>
      <div class="display-messages">
          <ul class="chat-lists">
              <li class="message" >

              </li>

          </ul>
          
      </div>
      <div class="inputChat">
          <!-- <form @submit.prevent ="">
              <input type="text" placeholder="Message" />
          <button>Send</button>
          </form> -->
          <input type="text" v-model="message"  placeholder="Write Something" @keyup.enter="sendMessage()" />
            <button @click="sendMessage()">Send</button>
      </div>
  </div>
</template>

<script>
export default {
    name:"chatBox",

    data(){
        return{
            message:'',
            id:1,
            chatMessages:[],
            allChatMessages:[]
        }
    },
    methods:{
           async sendMessage(){
               console.log("Input Message", this.message)
               await this.$store.dispatch('chatBox/chatMessage', {message:this.message, id:this.id})
            this.handleId()
            this.allChatMessages= this.allMessages;
        },
        handleId(){
            this.id = this.id +1;
        }
    },
    computed:{
        allMessages(){
            return this.$state.getters['chatBox/allMessages']
        }
    },
    mounted(){
       const result =  this.$store.dispatch('chatBox/loadMessages')
       console.log("result",result);
    //    this.chatMessages = result.data;
    //    console.log('Mounted Data', this.chatMessages)

    }


}
</script>

<style>

</style>