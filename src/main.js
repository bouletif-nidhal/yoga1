import Vue from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueMq from 'vue-mq'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  mounted() {
    AOS.init()
  },
}).$mount('#app')

