<template>
    <li  class="card-book-item w3-card-4 w3-col m4 l2 w3-mobile">
        <div clas="image w3-left">
            <img :src="image_url">
            <p>
            <router-link :to="{name: 'cart', query:{image: image_url}, params: {id: _id}}"> 
                <span class="fa fa-shopping-cart"></span>
            </router-link>
            <router-view></router-view>

            </p> 
        </div> 
        <router-link :to="{name: 'bookdetail', params: {id: _id}}" class="w3-center" style="font-size: 12px">
            <p class="w3-center">{{title}}</p>
        </router-link>
          <router-view></router-view>
    </li>
</template>

<script>

export default {
    components:{
    },
  name: "booksCardComponent",
  props: ["title", "image_url", "description", 'buy_url', '_id']
};
</script>

<style>
    img{
        height: 130px;
        width: 120px;
        margin-top: 5px;
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
