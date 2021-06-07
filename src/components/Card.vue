<template>
    <div class="w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800">
        <div class="flex flex-row items-center justify-between"><div class="flex flex-col">
            <div class="text-xs uppercase font-light text-gray-500">Users</div>
            <div class="text-xl font-bold">588</div>
            </div><ph-users :size="48" />
            </div>
            </div>
</template>
<script lang="ts">
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'Card',
  components: {
  }
})
</script>