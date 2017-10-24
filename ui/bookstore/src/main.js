import Vue from 'vue'
import App from './home.vue'
import VueResource from 'vue-resource'
Vue.use(VueResource);


import cors from 'cors';


new Vue({
  el: '#app',
  render: h => h(App)
})
