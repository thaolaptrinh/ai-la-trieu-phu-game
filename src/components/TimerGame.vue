<template>
  <div>{{ timer }}</div>
</template>

<script setup>
import { ref } from "vue";
const timer = ref(5);

const props = defineProps(["setStop"]);

const { setStop } = props;
const interval = setInterval(() => {
  timer.value--;
  if (timer.value == 0) {
    setStop(true);
    clearInterval(interval);
  }
}, 1000);
</script>

<style lang="scss" scoped></style>
