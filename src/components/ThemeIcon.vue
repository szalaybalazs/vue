<template> 
  <div class="wrapper">
    <div class="icon" v-on:click="popupVisible = !popupVisible" :style="{ ...getColors.theme }">
      <img src="../assets/theme.png" alt="" :style="{ ...getColors.themeIcon }">
    </div>
    <div class="popup" v-bind:class="{open: popupVisible}" :style="{ ...getColors.themePopup }">
      <div class="content" v-on:click="toggle">
        {{ isDark ? 'Switch back to light ☀️' : 'Switch to dark theme 🌙'}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { ToggleButton } from 'vue-js-toggle-button'

export default {
  name: 'ThemeIcon',
  components: { ToggleButton },
  computed: mapGetters([ 'getColors', 'isDark' ]),
  methods: {
    ...mapActions(['toggleTheme', 'setTheme']),
    toggle({ value }) {
      this.popupVisible = false;
      this.toggleTheme()
    },
    togglePopup() {
      console.log('toggle')
      this.i
    }
  },
  data(){
    return {
      popupVisible: false,
      dark: false
    }
  },
}
</script>

<style lang="sass" scoped>
div.wrapper
  position: fixed
  bottom: 24px
  left: 24px
  z-index: 32
  .icon
    width: 24px
    height: 24px
    background-color: #2F3335
    border-radius: 500px
    padding: 12px
    cursor: pointer
    z-index: 64
    position: fixed
    bottom: 24px
    left: 24px
    img
      width: 100%
      filter: invert(100%)
  .popup
    background: pink
    width: 48px
    height: 48px
    position: fixed
    bottom: 24px
    left: 24px
    pointer-events: none
    opacity: 1
    overflow: hidden
    border-radius: 24px
    display: flex
    transition: 240ms
    color: white
    z-index: 16
    .content
      display: none
      white-space: nowrap
    &.open
      opacity: 1
      z-index: 128
      pointer-events: auto
      width: 240px
      height: 80px
      justify-content: center
      align-items: center
      .content
        display: block
        font-family: 'Avenir', Helvetica, Arial, sans-serif
        font-weight: 600
        letter-spacing: .41px
        &:hover
          text-decoration: underline
          cursor: pointer
    
</style>
