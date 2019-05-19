<template>
  <div class="bodyWrapper" :style="{...getColors.body}">
    <portal-target name="modal">
      <Login v-if="login" v-on:login="handleLogin" />
    </portal-target>
    <Header />
    <ThemeIcon />
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Header from './components/Header'
import ThemeIcon from './components/ThemeIcon'
import Login from './components/Login'
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'app',
  computed: mapGetters(['getColors']),
  methods: {
    ...mapActions([ 'setTheme', 'setBackground', 'setModal' ]),
    handleLogin: function () {
      this.login = false;
      location.reload();
    }
  },
  components: {
    Header,
    ThemeIcon,
    Login
  },
  created() {
    const theme = localStorage.getItem('theme');
    const light = localStorage.getItem('light-background');
    const dark = localStorage.getItem('dark-background');
    const user = localStorage.getItem('user');
    if (!user) this.login = true;
    this.setTheme(theme || 'light')
    this.setBackground({light, dark})
  },
  data: {
    login: false
  }
}
</script>


<style lang='sass'>
.bodyWrapper
  min-height: 100vh
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
