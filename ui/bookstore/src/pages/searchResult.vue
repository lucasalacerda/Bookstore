<template>
  <div id="contain">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

    <header-component></header-component>
  </div>
</template>


<script>
import headerComponent from "../components/header.vue";


export default {
  components: {
    headerComponent,
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