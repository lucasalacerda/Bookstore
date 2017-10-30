<template>
  <div id="contain">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

    <header-component></header-component>
        <div class="slide_show w3-display-container">
            <button class="w3-button w3-black	w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
            <button class="w3-button w3-black w3-display-right" onclick="plusDivs(1)">&#10095;</button>
        </div>
    <ul class="w3-container w3-row-padding"> 
      <h2>News</h2>     
      <books-card-component v-bind:key="book.id" v-for="book in books"
      :title="book.title" :image_url="book.image_url"></books-card-component>
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
  margin: 0px;
  padding: 0px;
}

.slide_show{
  height: 250px;
  background: no-repeat 50% 50%;
  background-size: cover;
  box-shadow: 0.1cm 0.1ch 1ch;
}

.slide_show:before{
        height: 100%;
        width: 100%;
        background: #000;
        opacity: 0.4;
    }

@media only screen and (max-device-width: 1024px) {
   
}
</style>



