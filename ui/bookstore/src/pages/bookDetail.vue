<template>
  <div id="contain">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <header-component></header-component>
    <div>
      <h1>Book Details</h1>
        <span>{{this.$route.params.id}}</span>
    </div>
  </div>
</template>

<script>

import headerComponent from "../components/header.vue";

export default {
    name: 'bookDetail',
    components:{
        headerComponent,
    },
    
}
</script>
