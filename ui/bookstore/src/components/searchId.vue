<template>
     <div class="search w3-right w3-mobile">
        <input type="text" class="w3-bar-item w3-input w3-mobile" placeholder="Search...">
        <a href="/results" class="w3-bar-item w3-btn w3-brown w3-right w3-wide w3-mobile">Go!</a>
        
    </div>
</template>

<script>
export default {
    name: "searchIdComponent",
    data(){
        return{
            insertId: '',
        }
    },
}