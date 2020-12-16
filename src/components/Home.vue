<template>
    <v-app>
      <main>
      <h1>Home Page</h1>

      <v-btn
        @click = "logout()"
      >
      Logout
      </v-btn>
      </main>

    </v-app>
</template>

<script>
import axios from 'axios'
export default {

  beforeRouteEnter (to, from, next) {
    next(vm => {
      if(vm.$store.state.token === ""){
        vm.$router.push({path:"/login"})
      }
    })
  },

  methods :{
    logout(){
      axios({
        method : "GET",
        url : "/logout",
        data : {token : this.$store.state.token}
      })
      .then(()=>{
        this.$store.commit("set_state", {state:"token", data : ""})
        this.$router.push({path : "/login"})
      })
      
    }
  }
 
}
</script>
