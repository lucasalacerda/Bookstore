<template>
  <div id="contain">
    <link rel="stylesheet" href="../css/w3.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    
    <header-component></header-component>
       
    <ul class="w3-container w3-row-padding"> 
      <h2>News</h2>     
      <books-card-component :key="book.id" v-for="book in books"
      :title="book.title" :_id="book._id" :buy_url="book.buy_url" :image_url="book.image_url"></books-card-component>
    </ul>
  </div>
  
</template>

<script>
import headerComponent from "./components/header.vue";
import booksCardComponent from "./components/books.vue";
import FBloginComponent from "./components/componentFB.vue";

export default {
  name: 'home',

  components: {
    headerComponent,
    booksCardComponent,
    FBloginComponent,
  },
  computed: {
    username () {
      return {
        route: this.$route.params.username,
        fbSignInParams: {
        scope: 'public_profile, email,user_likes',
        return_scopes: true
        }
      }
    }
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  },
  beforeCreate() {
    console.log('beforeCreated');
  },
  beforeCreate() {
    this.$http.get('http://localhost:3000/api/books?limit=5').then(
      response => {
        this.books = response.body;
          console.log(response.data);
      }, 
    ),
    function test (){
      console.log('teste')

      this.FB.getLoginStatus(function(response) {
          if (response.status === 'connected') {
           // the user is logged in and has authenticated your
           // app, and response.authResponse supplies
           // the user's ID, a valid access token, a signed
           // request, and the time the access token 
           // and signed request each expire
           var uid = response.authResponse.userID;
           var accessToken = response.authResponse.accessToken;
           this.logged = false;
           console.log('HOME DEU BOM')
          } else if (response.status === 'not_authorized') {
          this.logged = false;
          } else {
            // the user isn't logged in to Facebook.
          }
      });
           }
    
      function requestAPI (response) {
        FB.api('me?fields=id,name,likes.limit(100){fan_count,picture,link,name, description}', function(response){
            if(response){
                console.log(response);
            }
        });
      }
    },
     
  beforeMount(){
    console.log('beforeMount');
  },
  data () {
    return {
      projectName: 'Bookstore',
      books:[],
      fbSignInParams: {
        scope: 'public_profile, email,user_likes',
        return_scopes: true
      }
    }
  },

};
</script>

<style>

html{
  margin: 0px;
}

body{
  margin: 0px;
  padding: 0px;
}

.slide_show{
  height: 250px;
  background: no-repeat 50% 50%;
  background-size: cover;
  box-shadow: 0.01cm 0.01ch 0.02ch;
}

</style>



