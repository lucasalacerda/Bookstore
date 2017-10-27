import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource);

//import pages
import App from './home.vue'
import SearchResult from './pages/searchResult.vue'; 
import AdminPage from './pages/adminPage.vue'

import cors from 'cors';

const NotFound = { template: '<p>Página não encontrada</p>' }

const routes = {
  '/': App,
  '/results': SearchResult,
  '/admin': AdminPage,
}


new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound
    }
  },
  render (h) { return h(this.ViewComponent) }
})
