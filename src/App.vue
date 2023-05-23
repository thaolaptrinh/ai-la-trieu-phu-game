<template>
  <div class="app">
    <welcome-screen v-if="status === 'welcome'" @start="onStart" />
    <main-screen v-if="status === 'playing'" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import WelcomeScreen from "./components/WelcomeScreen.vue";
import MainScreen from "./components/MainScreen.vue";
const status = ref("welcome");

function onStart() {
  // status.value = "playing";
}
</script>

<style scoped></style>
