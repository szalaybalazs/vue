<template>
    <div class="wrapper">
      <Empty 
        v-bind:title='emptyTitle'
        v-bind:content='emptyContent'
        v-bind:shown="todos.length === 0" />
      <div 
        class="todo" 
        v-bind:key='todo.id' 
        v-for='todo in todos'>
        <TodoItem v-on:updateTodo="$emit('updateTodo')" v-bind:todo='todo' v-on:deleteTodo="$emit('deleteTodo', todo.id)" />
      </div>
    </div>
</template>

<script>
import TodoItem from './TodoItem'
import Empty from './Empty'
export default {
  name: 'Todos',
  props: {
    todos: Array,
    emptyTitle: String,
    emptyContent: String
  },
  components: {
    TodoItem,
    Empty
  },
}
</script>
<style scoped>
</style>
