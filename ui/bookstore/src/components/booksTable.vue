<template>
    <tr>
      <td style="vertical-align: middle;">{{title}}</td>
      <td style="vertical-align: middle;">{{genre}}</td>
      <td style="vertical-align: middle;">{{author}}</td>
      <td style="vertical-align: middle;">{{createDate}}</td>
      <td>
        <button id="editButton" class="w3-btn w3-brown w3-wide" v-on:click="openModal()">Edit</button>
                <div :id="_id" class="w3-modal" style="padding: 2em 2em;">
            <div class="w3-modal-content w3-card-4 w3-animate-zoom" style="max-width:600px">
                <div class="w3-center"><br>
                    <span v-on:click="closeModal" class="w3-button w3-xlarge w3-hover-red w3-display-topright" title="Close Modal">&times;</span>
                </div>
            <form class="w3-container w3-mobile">
                <div class="w3-section">
                    <h2 class="w3-left">Edit</h2>
                    <input class="w3-input w3-margin-bottom" v-model="title" type="text" placeholder="Title" name="book_title" required>
                    <input class="w3-input w3-margin-bottom" v-model="genre" type="text" placeholder="Genre" name="book_genre" required>
                    <input class="w3-input w3-margin-bottom" v-model="description" type="textarea" placeholder="Description" name="book_description" required>
                    <input class="w3-input w3-margin-bottom" v-model="author" type="text" placeholder="Author" name="book_author" required>
                    <input class="w3-input w3-margin-bottom" v-model="publisher" type="text" placeholder="Publisher" name="book_publisher" required>
                    <input class="w3-input w3-margin-bottom" v-model="pages" type="text" placeholder="Number of pages" name="book_pages" required>
                    <input class="w3-input w3-margin-bottom" v-model="image_url" type="text" placeholder="Image URL" name="image_url" required>
                    <input class="w3-input w3-margin-bottom" v-model="buy_url" type="text" placeholder="Buy URL" name="buy_url" required>
                    <input class="w3-input w3-margin-bottom" v-model="_id" type="hidden" placeholder="id" name="id" required>
                    <button class="w3-btn  w3-brown w3-section w3-col m4 l6 w3-padding"  @click="editBook" type="submit">Save</button>
                    <button class="w3-btn  w3-red w3-section w3-col m4 l6 w3-padding"  @click="removeBook" type="submit">Remove</button>

                </div>
            </form>
            </div>
        </div>
      </td>
    </tr>
</template>

<script>
export default {
    name: "book-table-component",
    props: ['title', 'genre', 'author', 'createDate', '_id', 'description', 'publisher', 'pages', 
    'image_url', 'buy_url'],
     methods:{
      openModal: function(){
          document.getElementById(this._id).style.display='block';
        console.log('http://localhost:3000/api/books/'+this._id)
      },
      closeModal: function(){
        document.getElementById(this._id).style.display='none';
      },
      editBook: function(){
        this.$http.put(`http://localhost:3000/api/books/${this._id}`, {
                title: this.title,
                genre: this.genre,
                description: this.description,
                author: this.author,
                publisher: this.publisher,
                pages: this.pages,
                image_url: this.image_url,
                buy_url: this.buy_url

            }, function(data, status, request){
                this.postResults = data;
            });
      },
      removeBook: function(){
          this.$http.delete(`http://localhost:3000/api/books/${this._id}`);
      }
    },

    data(){
      return{

      }
    }
}
</script>
