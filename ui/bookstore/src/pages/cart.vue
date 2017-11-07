<template>
  <div id="contain">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

    <header-component></header-component>
    
    <div>
      <h1>Cart</h1>
      <p>{{this.$route.params.id}}</p>

    </div>
  </div>
</template>

<script>

import headerComponent from "../components/header.vue";
import bookDetail from "../components/bookDetail.vue";


export default {
    components:{
        headerComponent,
        bookDetail,
    },
    computed: {
      cart () {
        return this.$route.params.id
    }
  },
    
}
</script>
