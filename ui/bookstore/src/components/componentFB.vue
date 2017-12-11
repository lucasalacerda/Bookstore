<template>
<div>
  <fb-signin-button
    :params="fbSignInParams" @success="onSignInSuccess" @error="onSignInError">
    Sign in with Facebook
  </fb-signin-button>
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

    onSignInSuccess (response) {
      FB.api('/me', dude => {
        this.requestAPI();
            console.log(`Good to see you, ${dude.name}.`);
    
      }),
      FB.getLoginStatus(function(response) {
            if (response.status === 'connected') {
            
             var uid = response.authResponse.userID;
             var accessToken = response.authResponse.accessToken;
             console.log('deu bom')
            } else if (response.status === 'not_authorized') {
            
                console.log('deu ruim')

            } else {
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
  cursor: pointer;
}
</style>