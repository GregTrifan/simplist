<template>
  <div id="chart" class="rounded-md
   bg-gray-800 shadow-lg dark:bg-gray-900
    dark:border-gray-800  border border-gray-1=200
    text-white
    ">
    <div class="flex flex-col m-3">
          <div class="text-xs uppercase font-light text-gray-300">
                  Sessions
            </div>
            <div class="text-xl font-bold ">By Device</div>
        </div>
    <apexchart
      type="donut"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>
<script lang="ts">
  import { ref, defineComponent } from 'vue'
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
              mode: "dark",
              palette:"palette1",
          },
        },
      }
    },
  })
</script>
