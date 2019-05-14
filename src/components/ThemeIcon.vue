<template> 
  <div class="wrapper">
    <div class="icon" v-on:click="popupVisible = !popupVisible" :style="{ ...getColors.theme }">
      <img src="../assets/theme.png" alt="" :style="{ ...getColors.themeIcon }">
    </div>
    <div class="popup" v-bind:class="{open: popupVisible}" :style="{ ...getColors.themePopup }">
      <div class="content">
        <span v-on:click="toggle">{{ isDark ? 'Switch back to light ☀️' : 'Switch to dark theme 🌙'}}</span>
        <span>Or edit the background manually:</span>
        <Chrome :value="getColors.body.backgroundColor" @input="updateColors" />
        <span @click="popupVisible = false">Close</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { Chrome } from 'vue-color'

export default {
  name: 'ThemeIcon',
  components: { Chrome },
  computed: mapGetters([ 'getColors', 'isDark' ]),
  methods: {
    ...mapActions(['toggleTheme', 'setTheme', 'updateBackground']),
    toggle({ value }) {
      this.popupVisible = false;
      this.toggleTheme()
    },
    togglePopup() {
      console.log('toggle')
      this.i
    },
    updateColors({ rgba }) {
      this.updateBackground(rgba);
    }
  },
  data(){
    return {
      popupVisible: false,
      dark: false,
      colors: { r: 0, b: 0, g: 0 }
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
    border-radius: 24px
    display: flex
    transition: 240ms
    color: white
    z-index: 16
    oferflow: hidden
    .content
      display: none
      white-space: no-wrap
      span
        display: block
    &.open
      opacity: 1
      z-index: 128
      pointer-events: auto
      width: 280px
      height: 400px
      justify-content: center
      align-items: center
      .content
        padding: 12px
        display: block
        font-family: 'Avenir', Helvetica, Arial, sans-serif
        font-weight: 600
        letter-spacing: .41px
        justify-content: center
        flex-direction: column
        align-items: center
        align-content: center
        display: flex

        span
          text-align: center
          padding: 4px 0
          &:nth-of-type(2)
            margin-top: 12px
            font-weight: 400
          &:last-of-type
            margin-top: 32px
            font-weight: 600
            &:hover
              text-decoration: underline
              cursor: pointer

          &:first-of-type:hover
            text-decoration: underline
            cursor: pointer
    
</style>
