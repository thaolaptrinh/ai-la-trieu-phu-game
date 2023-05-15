<template>
  <div class="welcome-screen">
    <div class="container bg-welcome">
      <div class="content">
        <div class="logo">
          <img src="../assets/images/logo.png" alt="Logo" />
        </div>

        <button @click="onStart">START</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["start"]);
function onStart() {
  emit("start");
}
</script>

<style lang="scss" scoped>
.welcome-screen {
  background: #805850;
  min-height: 100vh;
}

.bg-welcome {
  background: url("../assets/images/bg-1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: auto;
  height: 100vh;
  text-align: center;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  height: 100%;
}

.logo {
  text-align: center;
}

button {
  display: inline-block;
  padding: 7px 14px;
  border-radius: 8px;
  border: 1px solid #fff;
  background-color: #000;
  color: #fff;
  font-size: 2.25rem;
  transition: all 0.3s linear;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
}
</style>
