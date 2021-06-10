<template>
    
         <nav class="fixed top-0 left-0 z-20 h-full pb-10 overflow-x-hidden overflow-y-auto transition origin-left transform bg-gray-900 w-60 md:translate-x-0"
         :class="{'-translate-x-full':!sideBar,'translate-x-0':sideBar}"
         v-click-away="sideBar=false">
        </nav>
         <!--v-click-away="sideBar= false"-->
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Sidebar',
    props: {
        open: {
            type: Boolean,
            required: true,
        },
    },
    methods: {

    },
    data() {
        return {
            sideBar:false
        }
    }
})
</script>
