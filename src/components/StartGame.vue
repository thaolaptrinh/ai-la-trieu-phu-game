<template>
  <div class="welcome-screen">
    <div class="container">
      <div class="content">
        <div class="logo">
          <img src="../assets/images/logo.png" alt="Logo" />
        </div>
        <div>
          <input
            type="text"
            class="startInput"
            v-model="userName"
            placeholder="Enter username"
          />
        </div>
        <button @click="onStartGame">Bắt đầu</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["start"]);
const userName = ref("");
const onStartGame = () => {
  if (userName.value) {
    emit("start", userName.value);
  } else {
    console.log("Username required");
  }
};
</script>

<style lang="scss" scoped>
.welcome-screen {
  background: url("../assets/images/bgr.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
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
    background-color: #22074d;
  }
}

.startInput {
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  height: 100px;
  border: none;
  border-radius: 5px;
  text-align: center;
  font-size: 25px;
  margin-bottom: 50px;
}

.startInput:focus {
  outline: none;
}
</style>
