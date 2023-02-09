<template>
  <div class="todo-wrapper">
    <div class="todo">
      <InputComponent style="justify-content: center" @addTodo="addTodo" />
      <ListComponent :todos="todos" @toggleDone="toggleDone" @deleteTodo="deleteTodo" />
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
    
    class Todo{
      constructor(done, name) {
        this.done = done;
        this.name = name
      }
    }

    const addTodo = (new_todo_name) => {
      const new_todo = new Todo(false, new_todo_name)
      todos.value.push(new_todo);
      console.log(todos.value)
    }

    const toggleDone = (index) => {
      todos.value[index].done = !todos.value[index].done
      console.log(index + ' set to ' + todos.value[index].done)
    }

    const deleteTodo = (index) => {
      todos.value.splice(index, 1);
      console.log(index + " deleted")
    }

    return {
      todos,
      addTodo,
      toggleDone,
      deleteTodo
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