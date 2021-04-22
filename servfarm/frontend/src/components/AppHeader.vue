<template>
<div id="header">
  <h1>Farmácia Online São Miguel</h1>
  <div id="head-nav">
    <nav id="navbar">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Shop' }">Shop</router-link>
      <router-link :to="{ name: 'Book' }">Book Online</router-link>
      <router-link :to="{ name: 'Plans' }">Plans and Pricing</router-link>
      <router-link :to="{ name: 'Services' }">Patient Services</router-link>
      <router-link :to="{ name: 'Contact' }">Contact</router-link>
      <router-link :to="{ name: 'Login' }">Sign In</router-link>
      <router-link :to="{ name: 'Register'}">Register</router-link>
    </nav>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
