<template>
  <div 
    class="wrapper" 
    v-bind:class="{'completed':todo.completed}">
    <span v-on:click="toggleComplete">{{capitalizedTitle}}</span>
    <button @click="$emit('deleteTodo', todo.id)">
      <img alt="Vue logo" src="../assets/bin.png">
    </button>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: ['todo'],
  methods: {
    toggleComplete() {
      this.todo.completed = !this.todo.completed
      this.$emit('updateTodo');
    }
  },
  data() {
    return {
      shown: true
    }
  },
  computed: {
    capitalizedTitle() {
      let title = this.todo.title.charAt(0).toUpperCase() + this.todo.title.slice(1)
      return title;
    }
  }
}
</script>

<style lang="sass" scoped>
div.wrapper
  display: flex
  justify-content: center
  align-items: center
  &.completed
    color: #41b883
    text-decoration: line-through

  span
    font-size: 18px
    font-weight: 500
    line-height: 32px
    margin: 6px 0
    cursor: pointer
    transition: 120ms
    &:hover
      text-decoration: underline

div.wrapper > button
  background: none
  border: none
  font-size: 24px
  color: dark-red
  position: absolute
  right: 32px
  opacity: 0
  width: 42px
  height: 42px
  box-shadow: 1px 1px 4px .5px rgba(0, 0, 0, .2), 1px 1px 8px 0px rgba(0, 0, 0, .1), 1px 1px 12px 0px rgba(0, 0, 0, .08)
  background: #e53935
  border-radius: 500px
  display: flex
  justify-content: center
  align-items: center
  cursor: pointer
  img
    display: flex
    flex: 1
    width: 24px
    height: 24px
    filter: invert(1)
div.wrapper:hover > button
  opacity: 1
</style>

