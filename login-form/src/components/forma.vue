<template>

    <div class='container'>

        <div class='text'> 
           
           <h1>Login</h1>
           <p>
            By logging in you agree to the ridiculously long terms
            that you didn't bother to read.
           </p>

        </div>
        

        <div class='form'>

          <form @submit="formValidation">

                <label for='email'>Email</label>
                <input name="email" id="email" v-model='email'>
                <p> {{emailError}}</p> 

                <label for="password">Password</label>
                <a href="#" @click="showPassword" id="show"> <img src="show1.png" alt=""></a>
                <input :type="passwordtype" name="password" id="password">
                <p>{{passwordError}}</p>

                <input id='submit' type="submit" value="Log in">

          </form>

        </div>


    </div>
</template>




<script>

export default {

  name: 'forma',

  data() {
  
   return{
          email: '',
          password: '',
          emailError: '',
          passwordError: '',
          passwordtype: 'password'
    };
  },

  methods: {

    formValidation: function formValidation(event) {
      
      event.preventDefault();


      if(this.email ==''){
        this.email == 'required!';
      }if(!this.emailValidation(this.email)) {
        this.emailError = 'not an email';
      }else{
        this.emailError = '';
      };


      if(this.password == '')  {
        this.passwordError = 'required!';
      } if ( this.password.length < 8) {
        this.passwordError = 'minimum 8'
      }else {
        this.passwordError = '';
      }
    },

    emailValidation: function emailValidation() {
      var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regexEmail.test(this.email);
    },

    showPassword: function showPassword() {
            if (this.passwordtype == 'password') {
                this.passwordtype = 'text';
            } else {
                this.passwordtype = 'password';
              }
    }
   

  }
}
</script>




<style scoped>

.container{
  height: 80vh;
  display: flex;
  justify-content: center;
  background: #dfe0e3;
  padding-top: 50px;
}



.text{
   height: 30vh;
   width: 20vw;
   background: white;
   text-align:left;  
   padding-left: 30px;
   margin-top: 45px;
}

.text h1 {
  color: black;
}

.text p {
  width: 260px;
  color: gray;
}



.form{
  background: #32475c;
  height: 20vw;
  width: 45vh;
  padding-left: 40px;
  padding-top: 40px;
  border-radius: 10px;
}

.form label{
  color: lightgray;
  display: inline-block;
  text-align: left;
  margin-top: 20px;
  margin-bottom: 10px;
}

#show img{
  width: 20px;
  height: 15px;
  /* float: left; */
  margin-right: 30px;
  margin-left: 10px;
}

.form input{
  background: transparent;
  display: block;
  width: 200px; 
  border: none;
  /* border: none; */
}


 #submit {
  margin-top: 30px;
  display: block;
  background: white;
  color: gray;
  width: 200px;
  height: 40px;
}


</style>
