import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router';

Vue.use(VueResource);
Vue.use(VueRouter);

//import pages
import App from './home.vue'
import SearchResult from './pages/searchResult.vue'; 
import AdminPage from './pages/adminPage.vue';
import cart from './pages/cart.vue';
import bookDetail from './pages/bookDetail.vue';


const NotFound = { template: '<p>Página não encontrada</p>' };

const routes = [
  {path: '/', component: App},
  {path: '/admin', component: AdminPage},
  {name: 'cartid', path: '/cart', component: cart},  
  {name: 'cart', path: '/cart/:id', component: cart},
  {name: 'bookdetail', path: '/bookDetail/:id', component: bookDetail}

]
  
  

const router = new VueRouter({
  routes
})


const app = new Vue({
  router
}).$mount('#app')

