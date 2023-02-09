<template>
  <div class="todo-wrapper">
    <div class="todo">
      <InputComponent style="justify-content: center" @addTodo="addTodo" />
      <ListComponent :todos="todos" />
    </div>
  </div>  
</template>

<script>
import InputComponent from '@/components/InputComponent.vue'
import ListComponent from '@/components/ListComponent.vue'

import { ref } from 'vue'

export default {
  name: 'HomeView',
  components: {
    InputComponent,
    ListComponent
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

.todo-wrapper {
  display: flex;
  justify-content: center;
}

.todo {
  display: flex;
  flex-direction: column;
}
</style>