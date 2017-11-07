<template>
  <div id="contain">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

    <header-component></header-component>
    <div>
      <h1>Cart</h1>
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
