<template>
  <div id="app">
    <Input title='Add todo...' v-on:addTodo='handleAddTodo'/>
    <Todos 
      v-on:updateTodo="updateStorage" 
      v-on:deleteTodo="deleteTodo" 
      v-bind:todos='todos' 
      emptyContent="Your list is empty"
      emptyTitle='Good job!'
    />
  </div>
</template>

<script>

import Todos from '../components/Todos'
import Input from '../components/Input'
export default {
  name: 'Main',
  components: {
    Todos,
    Input,
  },
  data() {
    return {
      todos: [],
      archives: []
    }
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(_ => _.id !== id);
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },
    handleAddTodo(todo) {
      this.todos.push(todo);
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },
    updateStorage() {
      const index = this.todos.findIndex(_ => _.completed);
      const todo = this.todos[index];
      this.todos.splice(index, 1);
      this.archives.push(todo);

      localStorage.setItem('todos', JSON.stringify(this.todos));
      localStorage.setItem('archives', JSON.stringify(this.archives));
    }
  },
  created() {
    this.todos = JSON.parse(localStorage.getItem('todos') || []);
  },
}
</script>
