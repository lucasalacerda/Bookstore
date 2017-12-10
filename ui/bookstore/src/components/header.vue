<template>
    <div class="w3-bar w3-light-grey">
        <div class="w3-display-container">
            <div class="w3-bar img-bar">
                <login-user></login-user>
                <div class="title-bookstore w3-display-middle w3-container w3-wide w3-mobile"
                style="font-size: 60px; text-shadow:1px 1px 0 rgb(51, 47, 47)">Bookstore
                </div>
            </div>
        </div>
        <div class="links">
            <router-link to="/" @click="changeLogin" class="w3-bar-item w3-btn w3-wide w3-mobile">Home</router-link>
            <router-link v-if="this.logged" to="/admin" class="w3-bar-item w3-btn w3-wide w3-mobile">Admin</router-link>
            <router-link to="/cart" class="w3-bar-item w3-btn w3-wide w3-mobile">
                Cart
                <span class="fa fa-shopping-cart"></span>
            </router-link>
            <search-id-component></search-id-component>
            <router-view></router-view>

        </div>
    </div>
</template>

<script>

import searchIdComponent from "./searchId.vue";
import loginUser from './loginIcon.vue';

export default {
    name: "headerComponent",
    components:{
        searchIdComponent,
        loginUser,
    },
   data () {
        return{
            logged: false
        }
    },
    computed: {
        username () {
          // We will see what `params` is shortly
          return this.$route
        },
        
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
        },
    changeLogin(){
        this.logged = true;
    }
    },

    created(){
        FB.getLoginStatus(function(response) {
          if (response.status === 'connected') {
           // the user is logged in and has authenticated your
           // app, and response.authResponse supplies
           // the user's ID, a valid access token, a signed
           // request, and the time the access token 
           // and signed request each expire
           var uid = response.authResponse.userID;
           var accessToken = response.authResponse.accessToken;
            this.logged = true;
            console.log(logged)
           console.log('HEADER DEU BOM')
          } else if (response.status === 'not_authorized') {
          this.logged = false;
          } else {
            // the user isn't logged in to Facebook.
          }
      });
    }


}
</script>

<style>
    .img-bar{
        height: 250px;
        background: url('../img/books.png') no-repeat 50%;
        background-size: cover;
        background-attachment: fixed;
    }
    .img-bar:before{
        height: 100%;
        width: 100%;
        background: #000;
        opacity: 0.4;
    }

    .title-bookstore{
        font-size: 60px;
        text-shadow: 0px 0px 50px rgb(51, 47, 47);
        color: #fff;
    }
</style>




