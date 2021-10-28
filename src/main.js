import Vue from 'vue'
import App from './App.vue'
import './assets/style/tailwind.css'
// import calendarapp from './calendarapp'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
