<template>
    <div id="picUser" class="w3-center">
        <div @click="openModalLogin">
            <img v-if="!islogged" id="picUserImage" class="w3-image w3-circle" src="../img/user-icon-back.png">
            <img v-if="islogged" id="picUserImage" class="w3-image w3-circle" :src="picture">
        </div>
            <div id="modalFormLogin" class="w3-modal w3-row" style="padding: 2em 2em;">
            <div class="w3-modal-content w3-card-4 w3-animate-zoom" style="max-width:400px">
                <div class="w3-center"><br>
                    <span @click="closeModalLogin" class="w3-button w3-xlarge w3-hover-red w3-display-topright" title="Close Modal">&times;</span>
                </div>
            <form class="w3-container">
                <div class="w3-section">
                    <h2 class="w3-left">Login</h2>
                    <input class="w3-input w3-margin-bottom" type="text" v-model="email" placeholder="Email"  name="user_email" required>
                    <input class="w3-input w3-margin-bottom" type="text" v-model="password" placeholder="Password" name="user_password" required>
                    <button class="w3-btn w3-block w3-brown w3-section w3-padding" @click="login" type="submit">Login</button>
                    <FBloginComponent></FBloginComponent>
                    <panelCallback v-if="islogged"></panelCallback>
                </div>
            </form>
            </div>
        </div>
    </div>
</template>

<script>
import panelCallback from "./panelCallback.vue";
import modalFormGeral from "./modalForm.vue";
import FBloginComponent from "./componentFB.vue";

export default {
  name: "loginUser",
  components: {
    modalFormGeral,
    FBloginComponent,
    panelCallback,
  },
  methods: {
    changeStatus: function(token){
        this.$http.get('http://localhost:3000/api/users/list',{
          headers :{
          'Authorization': token,
        }
       
        })
        .then(response => {
          response.status;
          
          this.res = response.body;
          this.name = this.res.name;
          this.picture = this.res.picture;
          this.type = this.resp.type;
          this.islogged = true;

        });
    },

    openModalLogin: function() {
      if(this.islogged){
       document.getElementById("modalFormInfo").style.display = "block";

      }
      document.getElementById("modalFormLogin").style.display = "block";
    },
    closeModalLogin: function() {
      document.getElementById("modalFormLogin").style.display = "none";
    },
    login: function() {

      if(this.email === ''){
        console.log('Preencha os dados')
      }else{
        this.$http.post('http://localhost:3000/api/users/login', {
        email: this.email,
        password: this.password
      })
        .then(response => {
          response.status;
          this.resp = response.body;
          this.token = response.body;
          if(this.token !== ''){
            this.changeStatus(this.token);
          }
        });
      }
     
    },
  },
  data () {
    return{
      user:[],
      email:'',
      password:'',
      token:'',
      picture:'',
      islogged: false,
      resp:'',
      type:'', 
    }
  }
};
</script>


<style>
#picUser {
  position: absolute;
  top: 0px;
  right: 0px;
  margin: 1em;
  width: 46px;
  height: 50px;
}
#picUserImage {
  width: 40px;
  height: 37px;
  cursor: pointer;
}
.text {
  color: white;
  margin: 0;
}
</style>