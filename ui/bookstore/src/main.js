import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import FBSignInButton from 'vue-facebook-signin-button';
import Auth from "vue-token";





Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(FBSignInButton);



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
  
window.fbAsyncInit = function() {
  FB.init({
    appId      : '160372771239892',
    cookie     : true,  // enable cookies to allow the server to access the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.11' // use graph api version 2.8
  });
};
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#app')

