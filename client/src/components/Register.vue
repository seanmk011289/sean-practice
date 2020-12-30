<template>
  <div>
    <h1>Sign Up Today!</h1>
    <input 
    type="email"
    name="email"
    placeholder="EMAIL"
    v-model="user.email" />
    <br>
    <input 
    type="password"
    name="password"
    placeholder="PASSWORD"
    v-model="user.password" />
    <br>
    <button @click="register">Sign Up NOW</button>
  </div>
</template>

<script>
import Authenticate from '../services/Authenticate'
export default {
  data() {
    return {
      user : {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async register() {
    let response = await Authenticate.register({
        email: this.user.email,
        password: this.user.password
      })
      console.log(response.data)
      this.user.email = ''
      this.user.password = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
