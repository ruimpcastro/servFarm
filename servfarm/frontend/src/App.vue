<template>
  <div>
    <AppHeader />
    <router-view/>
    <ChatbotButton />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import ChatbotButton from './components/ChatbotButton';

export default({
  components: {
    AppHeader,
    AppFooter,
    ChatbotButton,
  },
})
</script>

<style src="./assets/style.css"></style>
