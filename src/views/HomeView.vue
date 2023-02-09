<template>
  <InputComponent style="justify-content: center" @addTodo="addTodo"/>
  <ul>
    <li v-for="(todo, index) in todos" :key="index">{{ todo }}</li>
  </ul>
</template>

<script>
import InputComponent from '@/components/InputComponent.vue'
import { ref } from 'vue'

export default {
  name: 'HomeView',
  components: {
    InputComponent
  },
  setup() {
    const todos = ref([]);

    const addTodo = (new_todo) => {
      todos.value.push(new_todo);
      console.log(todos.value)
    }

    return {
      todos,
      addTodo
    }
  }
}
</script>

<style>
body {
  background: rgb(78,77,154);
  background: linear-gradient(138deg, rgba(78,77,154,1) 14%, rgba(4,20,50,1) 62%);
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: white;
}
</style>