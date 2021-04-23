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

<style src="./assets/style.css"></style>
