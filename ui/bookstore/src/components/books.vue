<template>
    <div>
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <div class="w3-row-padding">
            <div class="w3-col s4 m6 l6">
                <div class="w3-card-4 w3-center" >
                    <img :src="image_url" alt="book-image"  style="width:100%">
                        <h5>{{title}}</h5>
                        <p>{{description}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "booksComponent",
  props: ['title', 'image_url', 'description']
};
</script>

<style>

    p{
        font-size: 10px;
    }

    .w3-card-4{
        width: 250px;
        height: 300px;
        padding: 0.2em 0.2em;
        position: center;
    }
    img{
        width: 100%;
        height: 200px;
    }

</style>

