<template>
  <View msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import './index.css'
import View from './components/View.vue'

export default defineComponent({
  name: 'App',
  components: {
    View
  }
})
</script>

