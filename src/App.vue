<template>
  <div class="wrapper">
    <Header />
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'app',
  components: {
    Header
  }
}
</script>


<style lang='sass'>
html, body
  margin: 0
  padding: 0
  background-color: lighten(#34495e, 62%)
  box-sizing: border-box
  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50

.fade-enter-active, .fade-leave-active
  transition: 120ms ease-in
  position: absolute
  width: 100%

.fade-enter, .fade-leave-to, 
  opacity: 0
</style>
