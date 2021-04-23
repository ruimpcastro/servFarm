<template>
<div id="header">
  <div id="title">
  <h1>Farmácia Online São Miguel</h1>
  </div>
  <div id="head-nav">
    <nav id="navbar">
      <router-link :to="{ name: 'Home' }">Home </router-link>
      <router-link :to="{ name: 'Services' }">Services </router-link>
      <router-link :to="{ name: 'Notifications'}">Notifications </router-link>
      <router-link :to="{ name: 'Recommendations' }">Recommendation </router-link>
      <router-link :to="{ name: 'Login' }">Login </router-link>
      <router-link :to="{ name: 'Register'}">Register </router-link>
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
#title {
  text-align: center;
  background-color: turquoise;
  background: top;

}
#head-nav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: rgb(6, 177, 168);
  position: fixed;
  top: 60px;
  width: 100%;
  border-radius: 25px;
}
#head-nav {
  float: center;
}
#navbar {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
#navbar:hover {
  background-color: rgb(2, 196, 170); /* Change the link color to this other color on hover */
}
</style>
