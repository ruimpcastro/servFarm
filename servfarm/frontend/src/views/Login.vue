<template>
    <div class="login">
      <div>
        <div id="titulo">
        <h1>Sign Up</h1>
        </div>
        <div id="subtitulo">
            <h2>Already a member? Log In.</h2>
        </div>
        <input type="text" name="username" v-model="input.username" placeholder="Username" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button>
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
        color:#2A8C73;
     }
    #subtitulo {
        color:#2A8C73;
    }  
    .login {
        display: block;
        margin: auto;
        text-align: center;
        padding: 200px;
    }
</style>