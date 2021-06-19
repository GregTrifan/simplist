<template>
  <div id="chart" class="rounded-md
   bg-gray-800 shadow-lg dark:bg-gray-900
    dark:border-gray-800  border border-gray-1=200
    text-white
    ">
    <div class="flex flex-col m-3">
          <div class="text-xs uppercase font-light text-gray-300">
                  Transactions
            </div>
            <div class="text-xl font-bold ">Last 6 hours</div>
        </div>
    <apexchart
      type="area"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>
<script lang="ts">
  import { ref, defineComponent } from 'vue'
  export default defineComponent({
    name: 'revenues',
    components: {},
    data() {
      return {
        series: [{
          name: 'Sales',
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
            name:"Returns",
            data: [11, 32, 45, 32, 34, 52, 41]
        }],
        
        chartOptions: {
          chart: {
            height: 350,
            type: 'area',
            background:"transparent"
          },
          dataLabels: {
            enabled: false,
          },
          theme: {
              mode: "dark",
              palette:"palette1",

          },
          stroke: {
            curve: 'smooth',
          },
          xaxis: {
            type: 'datetime',
            categories: [
              '2018-09-19T00:00:00.000Z',
              '2018-09-19T01:30:00.000Z',
              '2018-09-19T02:30:00.000Z',
              '2018-09-19T03:30:00.000Z',
              '2018-09-19T04:30:00.000Z',
              '2018-09-19T05:30:00.000Z',
              '2018-09-19T06:30:00.000Z',
            ],
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm',
            },
          },
        },
      }
    },
  })
</script>
