<template>
  <h1 class="text-5xl font-bold">{{ msg }}</h1>
  <p>Lorem Ipsum dolor sit amet</p>
  <div class="flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4">
  <Card />
  <Card />
  <Card />
  <Card />
  </div>
</template>

<script>
import { ref, defineComponent } from 'vue'
import Card from "./Card.vue"

export default defineComponent({
  name: 'View',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  components: {
    Card
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
