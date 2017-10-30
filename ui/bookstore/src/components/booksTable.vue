<template>
    <tr>
      <td>{{title}}</td>
      <td>{{genre}}</td>
      <td>{{author}}</td>
      <td>{{createDate}}</td>
      <td>
        <button class="w3-btn w3-wide">Edit</button>
      </td>
    </tr>
</template>

<script>
export default {
    name: "book-table-component",
    props: ['title', 'genre', 'author', 'createDate'],

}
</script>
