<template>
    <div>
        <button id="addBook" v-on:click="openModal(books)" class="w3-right add-button w3-btn w3-brown w3-wide" style="margin: 0.7em 0em;">Add Books</button>
        <div id="modalForm" class="w3-modal w3-row" style="padding: 2em 2em;">
            <div class="w3-modal-content w3-card-4 w3-animate-zoom" style="max-width:600px">
                <div class="w3-center"><br>
                    <span v-on:click="closeModal" class="w3-button w3-xlarge w3-hover-red w3-display-topright" title="Close Modal">&times;</span>
                </div>
            <form class="w3-container">
                <div class="w3-section">
                    <h2 class="w3-left">Add Books</h2>
                    <input class="w3-input w3-margin-bottom" v-model="title" type="text" placeholder="Title"  name="book_title" required>
                    <input class="w3-input w3-margin-bottom" v-model="genre" type="text" placeholder="Genre" name="book_genre" required>
                    <input class="w3-input w3-margin-bottom" v-model="description" type="textarea" placeholder="Description" name="book_description" required>
                    <input class="w3-input w3-margin-bottom" v-model="author" type="text" placeholder="Author" name="book_author" required>
                    <input class="w3-input w3-margin-bottom" v-model="publisher" type="text" placeholder="Publisher" name="book_publisher" required>
                    <input class="w3-input w3-margin-bottom" v-model="pages" type="text" placeholder="Number of pages" name="book_pages" required>
                    <input class="w3-input w3-margin-bottom" v-model="image_url" type="text" placeholder="Image URL" name="image_url" required>
                    <input class="w3-input w3-margin-bottom" v-model="buy_url" type="text" placeholder="Buy URL" name="buy_url" required>
                    <button class="w3-btn w3-block w3-brown w3-section w3-padding" @click="addBook" type="submit">Save</button>

                </div>
            </form>
            </div>
        </div>
    </div>
</template>           

<script>

export default {
    name:'modalAddBookComponent',
    methods:{
      openModal: function(){
          
          document.getElementById('modalForm').style.display='block';
      },
      closeModal: function(){
        document.getElementById('modalForm').style.display='none';
      },

        addBook: function(){
            this.$http.post('http://localhost:3000/api/books', {
                title: this.title,
                genre: this.genre,
                description: this.description,
                author: this.author,
                publisher: this.publiser,
                pages: this.pages,
                image_url: this.image_url,
                buy_url: this.buy_url

            }, function(data, status, request){
                this.postResults = data;
            });
        },
    },
         created() {
     this.$http.get('http://localhost:3000/api/books/').then(response => {
      this.books = response.body;
  }, function(response){
      console.log(response.data);
    }
  )},
    data(){
      return{
        books: [],
        selected:{},
        title:'',
        genre:'',
        description:'',
        author:'',
        publisher:'',
        pages:'',
        image_url:'',
        buy_url:''
      }
    }
}   
</script>
