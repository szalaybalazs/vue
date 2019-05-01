<template>
  <div class="wrapper">
    <router-link to='/'><h1>Todos</h1></router-link>
    <router-link to='/archives' class='button'>Archives</router-link>
  </div>
</template>

<script>
export default {
  name: 'header',
}
</script>

<style lang="sass" scoped>
div.wrapper
  height: 64px
  background-color: lighten(#34495e, 55%)
  margin-bottom: 32px
  display: flex
  justify-content: space-between
  align-items: center
  padding: 0 18px
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  a
    text-decoration: none
    color: inherit
    &.button
      padding: 8px 24px
      border-radius: 500px
      font-size: 16px
      border: none
      background: #41b883
      outline: none
      color: white
      cursor: pointer
      transition: 40ms
      &:hover
        background: darken(#41b883, 8%)
      &:active
        background: darken(#41b883, 12%)

</style>

