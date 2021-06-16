<template>
  <div class="dark:bg-black" :class="{ dark: theme }">
    <div
      class="
        flex
        items-center
        justify-between
        w-full
        px-4
        h-14
        bg-gray-200
        dark:bg-gray-800
      "
    >
      <button
        @click="openMenu"
        class="
          block
          btn btn-light-secondary
          bg-gray-100
          dark:bg-gray-900
          dark:text-gray-200
          hover:bg-gray-300
          dark:hover:bg-gray-700
          md:hidden
        "
      >
        <span class="sr-only">Menu</span>
        <ph-list :size="24" />
      </button>
    </div>
    <section class="min-h-screen bg-gray-50 dark:bg-black">
      <Sidebar />
      <div class="p-4 dark:bg-black">
        <div class="ml-0 transition md:ml-60 dark:text-white">
          <div class="w-full mb-6 pt-3">
            <div class="flex flex-row items-center justify-between mb-4">
              <div class="flex flex-col">
                <div class="text-xs uppercase font-light text-gray-500 dark:text-gray-300">
                  Overview
                </div>
                <div class="text-xl font-bold">Dashboard</div>
              </div>

            </div>
          </div>
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
          <revenues/>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { store } from '../store'
import Card from './Card.vue'
import revenues from "./charts/Revenues.vue";
import Sidebar from './Sidebar.vue'
export default defineComponent({
  name: 'View',
  methods: {
    openMenu: () => {
      store.commit('openMenu')
    },
  },
  computed: {
    theme() {
      return store.state.theme
    },
  },
  components: {
    Card,
    revenues,
    Sidebar,
  },
})
</script>
