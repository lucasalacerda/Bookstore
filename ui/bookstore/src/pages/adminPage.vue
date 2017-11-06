<template>
  <div id="contain">
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
