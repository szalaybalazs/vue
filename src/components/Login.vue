<template>
  <div class="loginWrapper">
    <div class="wrapper">
      <div>
        <h2>Snap, it seems You are not logged in.</h2>
        <h1>Log in</h1>
        <form action="" @submit="handleSubmit">
          <div class="input">
            <input v-model="email" placeholder='E-mail' type="email">
          </div>
          <div class="input">
            <input v-model="password" placeholder='Password' type="password">
          </div>
          <button>Login</button>
        </form>
      </div>
      <h5>Sign up</h5>

    </div>
  </div>
</template>


<script>
import { mapGetters } from 'vuex';
export default {
  name: 'Login',
  data: {
    email: '', 
    password: ''
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      
      if (!(this.email.length > 0 && this.password.length > 0)) return alert('Please fill out all the fields!');
      this.$emit('login')
      localStorage.setItem('user', JSON.stringify({ email: this.email, password: this.password }));
    }
  }
}
</script>

<style lang="sass" scoped>
div.loginWrapper
  pointer-events: auto
  width: 100vw
  height: 100vh
  position: fixed
  top: 0
  left: 0
  background-color: rgba(0, 0, 0, .4)
  justify-content: center
  align-items: center
  z-index: 2048
  div.wrapper
    pointer-events: auto
    width: 30%
    height: 70%
    margin: auto
    margin-top: 15vh
    background: white
    border-radius: 18px
    text-align: center
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
    padding: 24px
    box-sizing: border-box
    display: flex
    justify-content: space-between
    flex-direction: column
    h2
      font-size: 16px
      line-height: 16px
    h1,
      font-size: 32px
      line-height: 32px
      font-weight: 800
    div.input
      width: 60%
      background: rgba(0, 0, 0, .04)
      border-radius: 500px
      margin: 24px auto
      overflow: hidden
      padding: 12px
      input
        width: 100%
        font-size: 18px
        outline: none
        background: none
        border: none
        padding: 0 12px
        font-family: 'Avenir', Helvetica, Arial, sans-serif
    h4, h5
      font-size: 16px
      line-height: 16px
      margin: 0
      text-align: left
      padding-left: 20%
      font-weight: 200
    h5
      text-align: center
      padding: 0
      font-weight: 600
    button
      width: calc(60% + 24px)
      margin: auto
      padding: 24px
      border-radius: 500px
      height: calc(24px + 18px)
      background: #41b883
      color: white
      font-size: 24px
      border: none
      line-height: 0px
      font-family: 'Avenir', Helvetica, Arial, sans-serif
      font-weight: 700
      cursor: pointer
      outline: none
      &:hover
        background: darken(#41b883, 5%)

</style>

