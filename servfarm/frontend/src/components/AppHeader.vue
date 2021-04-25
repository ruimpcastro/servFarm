<template>
<div id="header">
  <h1 id="title">Farmácia Online São Miguel</h1>

  <div id="head-nav">
    <nav id="navbar">
      <router-link class="navbar-link" :to="{ name: 'Home' }">Home</router-link>
      <router-link class="navbar-link" :to="{ name: 'Services' }">Services</router-link>
      <router-link class="navbar-link" :to="{ name: 'Notifications'}">Notifications</router-link>
      <router-link class="navbar-link" :to="{ name: 'Recommendations' }">Recommendations</router-link>
      <router-link class="navbar-link" :to="{ name: 'Login' }">Sign up</router-link>
      <!-- Missing User, Admin and Services -->
    </nav>
  </div>
</div>
</template>

<script>
export default {

}
</script>