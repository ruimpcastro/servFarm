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
        color: white;
     }  
    #login {
        border: 1px solid #ffffff;
        background-color: #0b9c7860;
        border-radius: 25px;
        display: fixed;
        margin: auto;
        text-align: center;
        padding: 70px 0;
    }
    #imagem1 {
  background-image: url("https://www.thebalancecareers.com/thmb/MeOkHuQyQvRybGXkqnZ2X-DLXDE=/1500x844/smart/filters:no_upscale()/Pharmacist-56872aae3df78ccc1507fb74.jpg");
  height: 500px; /* You must set a specified height */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  border: 1px solid #ffffff; /* image border color */
  border-radius: 25px; /*espessura da borda da imagem */
}
</style>