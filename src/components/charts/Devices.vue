<template>
  <div id="chart" class="rounded-md
   bg-white shadow-lg dark:bg-gray-900
    dark:border-gray-800  border border-gray-1=200
    text-black dark:text-white
    ">
    <div class="flex flex-col m-3">
          <div class="text-xs uppercase font-light text-gray-800 dark:text-gray-300">
                  Sessions
            </div>
            <div class="text-xl font-bold ">By Device</div>
        </div>
    <apexchart
      type="donut"
      height="350"
      :options="theme?darkOptions:chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>
<script lang="ts">
  import { ref, defineComponent } from 'vue'
  import { store } from '../../store'
  export default defineComponent({
    name: 'devices',
    components: {},
    
    data() {
      return {
        series: [69,76,32],
        
        chartOptions: {
          chart: {
            height: 350,
            type: 'donut',
            background:"transparent"
          },
          labels: ["Mobile","Desktop","Tablet"],
          dataLabels: {
            enabled: false,
          },
          theme: {
              mode: "light",
              palette:"palette1",
          },
        },
        darkOptions: {
          ...this.chartOptions,
          theme: {
              mode: "dark",
              palette:"palette1",

          },
          
        },
      }
    },
    computed: {
    theme() {
      return store.state.theme
    },
  },
  })
</script>
