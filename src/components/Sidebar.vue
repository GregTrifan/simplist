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
    <div class="text-center ">
      <h3 class="h-6 text-6xl font-bold text-gray-200 mb-6">Logo</h3>
    </div>
    <nav
      class="text-sm mt-16 font-medium text-gray-500"
      aria-label="Main Navigation"
    >
    <a
      class="
        flex
        items-center
        px-4
        py-3
        transition
        cursor-pointer
        group
        hover:bg-gray-800 hover:text-gray-200
      "
      :class="{'text-gray-200 bg-gray-800':true}"
      href="#"
    >
      <ph-gauge class="
          flex-shrink-0
          w-5
          h-5
          mr-2
          transition
          group-hover:text-gray-300
        "
        
        :size="48" />
      <span>Dashboard</span>
    </a>
    <a
      class="
        flex
        items-center
        px-4
        py-3
        transition
        cursor-pointer
        group
        hover:bg-gray-800 hover:text-gray-200
      "
      
      href="#"
    >
      <ph-check class="
          flex-shrink-0
          w-5
          h-5
          mr-2
          transition
          group-hover:text-gray-300
        "
        
        :size="48" />
      <span>Tasks</span>
    </a>
    <a
      class="
        flex
        items-center
        px-4
        py-3
        transition
        cursor-pointer
        group
        hover:bg-gray-800 hover:text-gray-200
      "
      
      href="#"
    >
      <ph-gear-six class="
          flex-shrink-0
          w-5
          h-5
          mr-2
          transition
          group-hover:text-gray-300
        "
        
        :size="48" />
      <span>Settings</span>
    </a>
      <div class="text-center mt-3 ">
        <button class="btn btn-primary mr-1" @click="toggleTheme">
          <ph-moon-stars :size="24" v-if="!theme" />
          <ph-sun :size="24" v-cloak v-else />
        </button>
        <a class="btn btn-primary" href="https://github.com/TheSlayer-666">
          <ph-github-logo :size="24" />
        </a>
        <a
          class="btn btn-primary ml-1"
          href="https://www.linkedin.com/in/grigore-trifan-666biyz/"
        >
          <ph-linkedin-logo :size="24" />
        </a>
      </div>
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
