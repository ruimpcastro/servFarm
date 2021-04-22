<template>
<div id="header">
  <h1>Farmácia Online São Miguel</h1>
  <div id="head-nav">
    <nav id="navbar">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'Services' }">Patient Services</router-link>
      <router-link :to="{ name: 'Notifications'}">Notifications</router-link>
      <router-link :to="{ name: 'Recommendations' }">Recommendation</router-link>
      <router-link :to="{ name: 'Login' }">Sign In</router-link>
      <router-link :to="{ name: 'Register'}">Register</router-link>
      <!-- Missing User and Admin -->
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
