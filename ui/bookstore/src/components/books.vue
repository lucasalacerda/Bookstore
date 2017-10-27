<template>
            <li class="card-book-item w3-card-4 w3-center w3-col m4 l2 w3-mobile">
                <div clas="image">
                    <img :src="image_url">
                </div>   
                    <a href="#" style="font-size: 10px">
                        <p>{{title}}</p>
                    </a>
            </li>
</template>

<script>
export default {
  name: "booksCardComponent",
  props: ["title", "image_url", "description"]
};
</script>


<style>
    img{
        max-height: 130px;
        width: 130px;
        margin-top: 5px
    }

    .card-book-item{
        height: 180px;
        list-style-type: none;
        display: inline-block;
        position: relative;
        margin-right: 10px;
        margin-bottom: 30px;
    }
    p{
        width: 190px; /* Tamanho */
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap
    }
</style>
