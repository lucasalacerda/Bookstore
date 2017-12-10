<template>
  <div id="contain">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <link rel="stylesheet" href="../css/w3.css">
    
    <header-component></header-component>
    <book-list-component></book-list-component>

  </div>
</template>

<script>

import headerComponent from '../components/header.vue';
import bookListComponent from '../components/booksList.vue';

export default {
  components: {
    headerComponent,
    bookListComponent,
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
</style>
