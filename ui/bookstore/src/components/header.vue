<template>

    <div>

    <div class="w3-bar w3-light-grey">
        <div class="w3-display-container">
            <div class="w3-bar img-bar">
                <div class="title-bookstore w3-display-middle w3-container w3-wide w3-mobile"
                style="font-size: 60px; text-shadow:1px 1px 0 rgb(51, 47, 47)">Bookstore</div>
            </div>
        </div>
        <div class="links">
            <a href="/" class="w3-bar-item w3-btn w3-wide w3-mobile">Home</a>
            <a href="/admin" class="w3-bar-item w3-btn w3-wide w3-mobile">Admin</a>
            <search-id-component></search-id-component>
        </div>
    </div>
    </div>
</template>

<script>

import searchIdComponent from "./searchId.vue";

export default {
    name: "headerComponent",
    components:{
        searchIdComponent,
    },
    }
</script>

<<style>
    .img-bar{
        height: 250px;
        background: url('../img/books.png') no-repeat 50%;
        background-size: cover;
        background-attachment: fixed;
    }
    .img-bar:before{
        height: 100%;
        width: 100%;
        background: #000;
        opacity: 0.4;
    }

    .title-bookstore{
        font-size: 60px;
        text-shadow: 0px 0px 50px rgb(51, 47, 47);
        color: #fff;
    }
</style>




