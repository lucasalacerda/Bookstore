<template>
    <div>
        <button v-on:click="openModal()" class="w3-right add-button w3-btn w3-brown w3-wide" style="margin: 0.7em 0em;">Add Books</button>
        <div id="modalFormGeral" class="w3-modal w3-row" style="padding: 2em 2em;">
            <div class="w3-modal-content w3-card-4 w3-animate-zoom" style="max-width:600px">
                <div class="w3-center"><br>
                    <span v-on:click="closeModal" class="w3-button w3-xlarge w3-hover-red w3-display-topright" title="Close Modal">&times;</span>
                </div>
            <form class="w3-container">
                <div class="w3-section">
                    <h2 class="w3-left">{{paramTitle}}</h2>
                    <input class="w3-input w3-margin-bottom" v-model="paramField" type="text" placeholder="paramPlaceholder"  name="paramName" required>
                    <button class="w3-btn w3-block w3-brown w3-section w3-padding" @click="actionButton" type="submit">Save</button>

                </div>
            </form>
            </div>
        </div>
    </div>
</template>   

<script>
export default {
    name: 'modalFormGeral',
    methods:{
        openModal: function(){
            document.getElementById('modalForm').style.display='block';
        },
        closeModal: function(){
            document.getElementById('modalForm').style.display='nome';
        }
    }
}
</script>
