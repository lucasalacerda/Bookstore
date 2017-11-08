<template>
  <div id="contain">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <header-component></header-component>
    
    <div class="w3-container w3-row">
      <h1>Cart</h1>
      <div v-if="this.$route.params.id != null" class="cart-list w3-col m12 l12 w3-mobile">
          <li class="w3-card-4 w3-padding" style="width:100%">
            <div class="book-details">
              <img :src="books.image_url" style="widht: 50%; align:left; margin: 0.2em 0em" alt="book-image">
              <div>
                <h4>{{books.title}}</h4>
                <p>{{books.description}}</p>
              </div>
            </div>
          </li>
        <div style="margin: 1em 0em">
          <button @click="createPurchase" type="submit" class="w3-btn w3-border w3-right">Buy all books</button>
          
          <div id="modalConfirm" class="w3-modal w3-row" style="padding: 2em 2em;">
            <div class="w3-modal-content w3-card-4 w3-animate-zoom" style="width:400px; height: 100px">
              <div class="w3-center"><br>
                <span v-on:click="closeModal" class="w3-button w3-xlarge w3-hover-red w3-display-topright" title="Close Modal">&times;</span>
                <p class="w3-padding">Thanks for you purchase!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
       <div v-else class="w3-panel w3-blue w3-card-4">
          <p> You have no books on the cart. </p>
        </div>
    </div>
  </div>
</template>

<script>

import headerComponent from "../components/header.vue";

export default {
    components:{
        headerComponent,
    },
    data(){
      return{
        listCart:[],
        books:[],
      }
    },
    methods:{
      createPurchase: function(){
        document.getElementById('modalConfirm').style.display='block';
       
       this.$http.post('http://localhost:3000/api/purchases', {
        title: this.books.title,
        description: this.books.description,
        author: this.books.author,
        user: 'lucas',
        }, function(data, status, request){
            this.postResults = data;
        });
 
      },

      closeModal: function(){
        document.getElementById('modalConfirm').style.display='none';
      }
    },
    computed:{
        id () {
          return this.$route.params.id
        }
    },
    created() {
      if(this.$route.params.id != null){
        this.$http.get(`http://localhost:3000/api/books/${this.$route.params.id}`).then(
          response => {
            this.books = response.body;
          }, 
          function(response){
            console.log(response.data);
          }
        )
      }
    },
   
}
</script>

<style>
  li{
    list-style-type: none;
  }

</style>

