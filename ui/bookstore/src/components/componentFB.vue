<template>
<div>
  <fb-signin-button
    :params="fbSignInParams" @success="onSignInSuccess" @error="onSignInError">
    Sign in with Facebook
  </fb-signin-button>

<button @click="authenticate('facebook')">auth Facebook</button>

<button @click="login()">Login</button>
<button @click="register()">Register</button>
</div>
</template>

<script>

export default {
  data () {
    return {
      fbSignInParams: {
        scope: 'public_profile, email,user_likes',
        return_scopes: true
      }
    }
  },
  methods: {
      login: function () {
          email = 'lucasalveslacerda@hotmail.com'
          password = '!Casa!Tomada!'
      this.$auth.login({ email, password }).then(function () {
        // Execute application logic after successful login
        console.log('teste')
      })
    },

    register: function () {
      this.$auth.register({ name, email, password }).then(function () {
        // Execute application logic after successful registration
      })
    },
    authenticate: function (provider) {
      this.$auth.authenticate(provider).then(function () {
        // Execute application logic after successful social authentication
      })
    },

    onSignInSuccess (response) {
      FB.api('/me', dude => {
        this.requestAPI();
            console.log(`Good to see you, ${dude.name}.`);
    
      }),
      FB.getLoginStatus(function(response) {
            if (response.status === 'connected') {
             // the user is logged in and has authenticated your
             // app, and response.authResponse supplies
             // the user's ID, a valid access token, a signed
             // request, and the time the access token 
             // and signed request each expire
             var uid = response.authResponse.userID;
             var accessToken = response.authResponse.accessToken;
             console.log('deu bom')
            } else if (response.status === 'not_authorized') {
              // the user is logged in to Facebook, 
              // but has not authenticated your app
                console.log('deu ruim')

            } else {
              // the user isn't logged in to Facebook.
                console.log('indefinido')

            }
        });
    },
    onSignInError (error) {
      console.log('OH NOES', error)
    },
    requestAPI () {
        FB.api('me?fields=id,name,likes.limit(100){fan_count,picture,link,name, description}', function(response){
            if(response){
                console.log(response)
            }
        });
    },
  }
}
</script>

<style>
.fb-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #4267b2;
  color: #fff;
}
</style>