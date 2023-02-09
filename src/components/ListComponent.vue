<template>
  <div class="task-wrapper" v-for="(todo, index) in todos" :key="index">
    <span>{{ todo.name }}</span>
    <div class="icons">
        <div class="icon-wrapper" :class="{done: todo.done}" @click="$emit('toggleDone', index)">
            <font-awesome-icon icon="fa-regular fa-circle-check" class="icon" />
        </div>
        <div class="icon-wrapper delete" @click="$emit('deleteTodo', index)">
            <font-awesome-icon icon="fa-regular fa-trash-can" class="icon" />
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ListComponent',
    props: {
        todos: Array
    },
    emits : ['toggleDone', 'deleteTodo']
}
</script>

<style lang="scss" scoped>
.task-wrapper {
    background: rgba(225,255,255,0.5);
    border-radius: 100px;
    padding: 0.6rem;
    margin-top: 0.8rem;
    width: 370px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.icons {
    display: flex;

    div:first-child {
        margin-right: 0.5em;
    }
}

.icon-wrapper {
    height: 2.5rem;
    width: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background: rgba(123, 192, 238, 0.644);

    &:hover {
        cursor: pointer;
        .icon {
            height: 2rem;
            transition: 0.1s ease;
        }
    }
}

.icon {
    height: 1.5rem;
    transition: 0.1s ease;

    // &:hover {
    //     height: 2rem;
    //     transition: 0.1s ease;
    //     cursor: pointer;
    // }
}

.done{
    background: rgba(255, 239, 8, 0.295)!important;
}

.delete{
    background: rgba(255, 46, 9, 0.445)!important;
}

</style>