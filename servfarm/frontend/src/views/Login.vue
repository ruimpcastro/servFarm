<template>
    <div id="login">
      <div>
        <div id="titulo-login">
        <h1>Sign Up</h1>
        </div>
            <div id="subtitulo-login">
                <h2>Not a member? <router-link :to="{ name: 'Register'}">Register.</router-link></h2>
            </div>
            <div class="login-container">
                <div class="login-row">
                    <div class="label-style">
                    <label for="username" class="label-style">Email</label>
                    </div>
                    <input id="username" class="text-input-login" type="text" name="username" v-model="input.username" placeholder="Username" />
                </div>

                <div class="login-row">
                <label for="userpass" class="label-style">Password</label>
                <input id="userpass" class="text-input-login" type="password" name="password" v-model="input.password" placeholder="Password" />
                </div>
                <button id="login-button" type="button" v-on:click="login()">Login</button>
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
