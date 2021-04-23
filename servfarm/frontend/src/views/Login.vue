<template>
    <div id="imagem1">
    <div id="login">
      <div>
        <div id="titulo">
        <h1>Login</h1>
        </div>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button>
      </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "secure" });
                    } else {
                        console.log("The username and / or password is incorrect");
                    }
                } else {
                    console.log("A username and password must be present");
                }
            }
        }
    }
</script>

<style scoped>
    #titulo {
        color: white
     }  
    #login {
        width: 500px;
        border: 1px solid #ffffff00;
        background-color: #ffffff00;
        display: block;
        margin: auto;
        text-align: center;
        padding: 70px 0;
        left: 50%;
        top: 50%;
        margin-left: -25%;
        position: absolute;
        margin-top: -25%;
        
        
    }
    #imagem1 {
  background-image: url("https://www.gettyimages.pt/gi-resources/images/500px/983794168.jpg");
  height: 500px; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  
}
</style>