<template>
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
  components: {
    Card
  }
});
</script>

