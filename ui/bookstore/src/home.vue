<template>
  <div id="contain">
    <link rel="stylesheet" href="../css/w3.css">

    <header-component :insertId="insertId"></header-component>
       
    <ul class="w3-container w3-row-padding"> 
      <h2>News</h2>     
      <books-card-component :key="book.id" v-for="book in books"
      :title="book.title" :buy_url="book.buy_url" :image_url="book.image_url"></books-card-component>
    </ul>
  </div>
</template>

<script>
import headerComponent from "./components/header.vue";
import booksCardComponent from "./components/books.vue";


export default {
  components: {
    headerComponent,
    booksCardComponent,
  },
  beforeCreate() {
    console.log('beforeCreated');
  },
  created() {
    this.$http.get('http://localhost:3000/api/books?limit=5').then(
      response => {
        this.books = response.body;
      }, 
      function(response){
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
      insertId: '59e42289843e40c0c7582b57',
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



