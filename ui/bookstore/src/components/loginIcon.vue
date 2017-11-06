<template>
    <div id="picUser" class="w3-center">
        <div @click="openModalLogin">
            <img id="picUserImage" class="w3-image w3-circle" src="../img/user-icon-back.png">
        </div>
            <div id="modalFormLogin" class="w3-modal w3-row" style="padding: 2em 2em;">
            <div class="w3-modal-content w3-card-4 w3-animate-zoom" style="max-width:400px">
                <div class="w3-center"><br>
                    <span @click="closeModalLogin" class="w3-button w3-xlarge w3-hover-red w3-display-topright" title="Close Modal">&times;</span>
                </div>
            <form class="w3-container">
                <div class="w3-section">
                    <h2 class="w3-left">Login</h2>
                    <input class="w3-input w3-margin-bottom"  type="text" placeholder="Email"  name="book_title" required>
                    <input class="w3-input w3-margin-bottom"  type="text" placeholder="Password" name="book_genre" required>
                    <button class="w3-btn w3-block w3-brown w3-section w3-padding" @click="login" type="submit">Login</button>
                </div>
            </form>
            </div>
        </div>
    </div>
</template>

<style>
    #picUser{
        position: absolute;
        top: 0px;
        right: 0px;
        margin: 1em;
        width: 46px;
        height: 50px;
    }
    #picUserImage{
        width: 40px;
        height: 37px;
    }
    .text{
        color: white;
        margin: 0;
    }
</style>

<script>
import modalFormGeral from './modalForm.vue';

export default {
     name: 'loginUser',
     components: modalFormGeral,
     methods:{
        openModalLogin: function(){
            document.getElementById('modalFormLogin').style.display='block';
        },
        closeModalLogin: function(){
            document.getElementById('modalFormLogin').style.display='none';
        },
        login: function(){

        }
    },
     data:{
        paramTitle: 'Login',
        paramField: 'login',
     }
}
</script>
