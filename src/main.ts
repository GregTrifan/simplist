import { createApp } from 'vue'
import App from './App.vue'
import VueClickAway from 'vue3-click-away'
import VueApexCharts from 'vue3-apexcharts'
import PhosphorVue from 'phosphor-vue'
import { store } from './store'
const app = createApp(App)
app.use(PhosphorVue)
app.use(VueApexCharts)
app.use(VueClickAway)
app.use(store)
app.mount('#app')
