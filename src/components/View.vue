<template>
  <h1 class="text-5xl font-bold">{{ msg }}</h1>
  <p>Lorem Ipsum dolor sit amet</p>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'View',
  props: {
    msg: {
      type: String,
      required: true
    }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
