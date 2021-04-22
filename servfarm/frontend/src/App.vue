<template>
  <div>
    <AppHeader />
    <router-view/>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

export default({
  components: {
    AppHeader,
    AppFooter,
  },
})
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>
