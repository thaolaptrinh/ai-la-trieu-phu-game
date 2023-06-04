<template>
  <div v-if="countdown > 0">{{ countdown }}</div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, toRefs, watch } from "vue";

const COUNT_DOWN = 15;
const countdown = ref(COUNT_DOWN);
const emit = defineEmits(["timeout"]);

const props = defineProps(["questionIndex"]);

const { questionIndex } = toRefs(props);

watch(questionIndex, () => {
  countdown.value = COUNT_DOWN;
});

const emitTimeout = () => {
  emit("timeout");
};
const resetTimer = () => {
  countdown.value = COUNT_DOWN;
};

let timer;
const startTimer = () => {
  timer = setInterval(() => {
    if (countdown.value > 0) {
      countdown.value--;
    } else {
      clearInterval(timer);
      emitTimeout();
    }
  }, 1000);
};

onMounted(() => {
  startTimer();
});

onBeforeUnmount(() => {
  clearInterval(timer);
});

watch(questionIndex, () => {
  resetTimer();
});
</script>

<style lang="scss" scoped></style>
