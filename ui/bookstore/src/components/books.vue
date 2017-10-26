<template>
        <div class="w3-container w3-row-padding">
            <div class="w3-card-4 w3-center w3-hover-shadow w3-col m4 l1 w3-mobile">
                <img :src="image_url" alt="Norway" style="width:100%">
                <div class="w3-center">
                    <h5 style="font-size: 10px">{{title}}</h5>
                    <p style="font-size: 10px">{{description}}</p>
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
