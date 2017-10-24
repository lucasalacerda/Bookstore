<template>
  <div id="contain">
    
    <header-component></header-component>
      <div>
        <div class="w3-row">
            <div class="w3-col s1 m4 l12 w3-center">
              <h1>BOOKS</h1>
            </div>
        </div>
      </div>
    <books-component v-bind:key="book.id" v-for="book in books"
    :title="book.title" :description="book.description" :image_url="book.image_url"></books-component>

  </div>
</template>

<script>
import headerComponent from "./components/header.vue";
import booksComponent from "./components/books.vue";


export default {
  components: {
    headerComponent,
    booksComponent,
  },
  beforeCreate() {
    console.log('beforeCreated');
  },
  created() {
       this.$http.get('http://localhost:3000/api/books').then(response => {
        this.books = response.body;
  }, function(response){
    console.log(response.data);
    }
  )},
  beforeMount(){
    console.log('beforeMount');
  },
  data() {
    return {
      projectName: 'Bookstore',
      intervalo: null,
      books:[],
    }
  },

};
</script>

<style>

html{
  margin: 0px;
}

h1{
  padding: 0.5em 4em;
  margin:0px;
  position: center;
}

body{
  background-size: cover;
  background-repeat: no-repeat; 
  margin: 0px;
}

@media only screen and (max-device-width: 1024px) {
   
}
</style>



