<template>
  <form class="wrapper" @submit="handleSubmit">
    <input type="text" v-model='content' name='title' v-bind:placeholder='title'>
  </form>
</template>

<script>
import { v4 } from 'uuid';
export default {
  name: 'Input',
  data() {
    return {
      content: ''
    }
  },
  props: {
    title: String
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      if(this.content === '') return;
      const todo = {
        id: v4(),
        title: this.content,
        completed: false
      };

      this.$emit('addTodo', todo)

      this.content = '';
    }
  }
}
</script>

<style lang="sass" scoped>
input
  font-size: 18px
  border: none
  border-radius: 500px
  background: white
  padding: 12px 18px
  outline: none
  width: 30%
  margin-bottom: 32px
  @media screen and (max-width: 540px)
    width: calc(100% - 24px - 36px)
</style>


