<template>
  <InputComponent />
</template>

<script>
import InputComponent from '@/components/InputComponent.vue'

export default {
  name: 'HomeView',
  components: {
    InputComponent
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