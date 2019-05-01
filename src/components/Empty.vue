<template>
  <transition name="slide-fade">
    <div class="wrapper" v-if='shown'>
      <h3>{{content}}</h3>
      <h2>{{title}}</h2>
    </div>
  </transition>
</template>


<script>
export default {
  name: 'Empty',
  props: ['shown', 'title', 'content']
}
</script>

<style lang="sass" scoped>
div.wrapper
  // opacity: .8
  h3
    line-height: 24px
    margin: 0
    margin-top: 24px
  h2
    margin: 0
  line-height: 42px

.slide-fade-enter-active
  transition: 300ms ease-in
  position: absolute
  width: 100%
.slide-fade-leave-active 
  transition: 300ms ease-out
  position: absolute
  width: 100%

.slide-fade-enter, .slide-fade-leave-to
  transform: translateY(-60px)
  opacity: 0
</style>

