<template>
    <li class="card-book-item w3-card-4 w3-center w3-col m4 l2 w3-mobile">
        <div clas="image">
            <img :src="image_url">
        </div>   
        <a :href="buy_url" class="w3-center" style="font-size: 10px">
            <p class="w3-center">{{title}}</p>
        </a>
    </li>
</template>

<script>
export default {
  name: "booksCardComponent",
  props: ["title", "image_url", "description", 'buy_url']
};
</script>

<style>
    img{
        max-height: 130px;
        width: 120px;
        margin-top: 5px
    }
    .card-book-item{
        height: 180px;
        width: 100px;
        background-color:  #c89e75;
        list-style-type: none;
        display: inline-block;
        position: relative;
        margin-right: 10px;
        margin-bottom: 30px;
    }
    p:before{
        max-width: 180px; /* Tamanho */
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
    }
</style>
