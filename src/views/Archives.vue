<template>
  <div id="app">
    <Input title='Search Todo...' v-on:addTodo='handleAddTodo'/>
    <Todos 
      v-on:updateTodo="updateStorage" 
      v-on:deleteTodo="deleteTodo" 
      v-bind:todos='archives'
      emptyContent="You don't have any archived tasks"
      emptyTitle='Go and create some!'
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
      archives: []
    }
  },
  methods: {
    deleteTodo(id) {
      this.archives = this.archives.filter(_ => _.id !== id);
      localStorage.setItem('archives', JSON.stringify(this.archives));
    },
    handleAddTodo(todo) {
      this.archives = JSON.parse(localStorage.getItem('archives') || []).filter(_ => _.title.toLowerCase().includes(todo.title.toLowerCase())).map(_ => {
      _.completed = false;
      return _
    }); 
    },
    updateStorage() {
      this.archives.map(_ => {
        _.completed = false;
        return _
      });
    }
  },
  created() {
    this.archives = JSON.parse(localStorage.getItem('archives') || []).map(_ => {
      _.completed = false;
      return _
    });
  },
}
</script>
