<template>
  <div id="contain">
    <div clas="w3-container w3-row-padding">
      <div class="w3-center w3-col m12 l12">
        <div class="w3-container" name="books-list">
          <div class="w3-left">
            <h2>Books list</h2>
          </div>
            <modal-add-book-component></modal-add-book-component>
          </div>
        </div>

        <div class="w3-container" style="margin: 1em 0em;">
          <table class="w3-mobile w3-table w3-bordered w3-border">
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Author</th>
              <th>Create Date</th>
              <th>Actions</th>
            </tr>
            <book-table-component v-bind:key="book._id" v-for="book in books"
            :title="book.title" :genre="book.genre" :author="book.author"
            :createDate="book.createDate"></book-table-component>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>           

<script>
import bookTableComponent from './booksTable.vue';
import modalAddBookComponent from './modalAddBook.vue';


export default {
  name:'bookListComponent',
  components:{
    modalAddBookComponent,
    bookTableComponent,
  },
  beforeCreate() {
    console.log('beforeCreated');
  },
  created() {
     this.$http.get('http://localhost:3000/api/books').then(response => {
      this.books = response.body;
  }, function(response){
      console.log(response.data);
    }
  )},
  beforeMount(){
    console.log('beforeMount');
  },
  data(){
    return{
      books: [],
    }
  }

}
</script>