<template>
  <transition name="fade">
    <div
      class="
        fixed
        inset-0
        bg-gray-500 bg-opacity-50
        transition-opacity
        md:hidden
      "
      @click="close"
      v-if="open"
    ></div>
  </transition>
  <nav
    class="
      fixed
      top-0
      left-0
      z-20
      h-full
      pb-10
      overflow-x-hidden overflow-y-auto
      transition
      origin-left
      transform
      bg-gray-900
      w-52
      md:translate-x-0
    "
    :class="{ '-translate-x-full': !open, 'translate-x-0': open }"
  >
    <div>
      <h3 class="w-auto h-6 text-6xl font-bold text-white ml-2 mb-3">Logo</h3>
    </div>
    <nav
      class="text-sm mt-10 font-medium p-2 text-gray-500"
      aria-label="Main Navigation"
    >
      <button class="btn w-full btn-primary mt-3" @click="toggleTheme">
        {{ theme ? 'Turn Light mode' : 'Toggle Dark Mode' }}
      </button>
    </nav>
  </nav>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import { store } from '../store'
  export default defineComponent({
    name: 'Sidebar',
    methods: {
      close: () => {
        store.commit('closeMenu')
      },
      toggleTheme: () => {
        store.commit('toggleTheme')
      },
    },

    computed: {
      open() {
        return store.state.open
      },
      theme() {
        return store.state.theme
      },
    },
  })
</script>
<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
