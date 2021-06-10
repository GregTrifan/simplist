<template>
<section class="min-h-screen bg-gray-50">
  <Sidebar :open="true" />
  <div
    class="
      flex flex-col
      lg:flex-row
      w-full
      lg:space-x-2
      space-y-2
      lg:space-y-0
      mb-2
      lg:mb-4
    "
  >
    <Card title="Users" val="588"><ph-users :size="32" /></Card>
    <Card title="Sessions" val="437"><ph-activity :size="32" /></Card>
    <Card title="Bounce Rate" val="65%"
      ><ph-arrow-square-out :size="32"
    /></Card>
    <Card title="Uptime" val="1d 4h"><ph-clock :size="32" /></Card>
  </div>
  </section>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import Card from './Card.vue'
import Sidebar from "./Sidebar.vue"
export default defineComponent({
  name: 'View',
  components: {
    Card,
    Sidebar,
  },
})
</script>
