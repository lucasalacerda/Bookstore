import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router';

Vue.use(VueResource);
Vue.use(VueRouter);

//import pages
import App from './home.vue'
import SearchResult from './pages/searchResult.vue'; 
import AdminPage from './pages/adminPage.vue'
import cart from './pages/cart.vue';
import header from './components/header.vue';


const NotFound = { template: '<p>Página não encontrada</p>' }
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }
const headers = { template: '<div>lololo</div>' }

const routes = [
  {path: '/', component: App},
  {path: '/admin', component: AdminPage},
  {path: '/cart/:id', component: cart}

]
  
  

const router = new VueRouter({
  routes
})


const app = new Vue({
  router
}).$mount('#app')

