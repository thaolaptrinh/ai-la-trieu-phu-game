<template>
  <div class="game">
    <div class="question">{{ question.title }}</div>
    <div class="answers">
      <button
        v-for="(answer, key) in question.answers"
        class="answer"
        :key="key"
        @click="handleClick(key)"
        :class="answerClasses(key)"
        :disabled="isDisabled"
      >
        {{ answer }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, toRef, computed, reactive } from "vue";
import sound from "../utils/sound";

const soundInstance = sound();
const props = defineProps(["question"]);
const question = toRef(props, "question");

const emit = defineEmits(["answer"]);

const selectedAnswer = ref(null);
const isDisabled = ref(false);
const showResult = ref(false);

const answerClasses = computed(() => {
  return (key) => ({
    active: selectedAnswer.value === key,
    correct:
      selectedAnswer.value === key &&
      key === question.value.answer_true &&
      showResult.value,
    wrong:
      selectedAnswer.value === key &&
      key !== question.value.answer_true &&
      showResult.value,
  });
});

const delay = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const handleClick = async (answer) => {
  selectedAnswer.value = answer;
  isDisabled.value = true;
  soundInstance.playWait();

  await delay(2000);

  showResult.value = true;
  if (answer == question.value.answer_true) {
    soundInstance.playCorrect();
  } else {
    soundInstance.playWrong();
  }

  await delay(5000);

  soundInstance.stop();
  selectedAnswer.value = null;
  showResult.value = false;
  isDisabled.value = false;
  emit("answer", answer);
};
</script>
<style lang="scss" scoped>
.game {
  flex: 3 1;
  background: linear-gradient(180deg, transparent, #020230),
    url("../assets/images/bgr.jpg") 50%;
  flex-direction: column;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 30px;
  height: 100%;
}

.question {
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  background: linear-gradient(#100241, black);
  text-align: center;
  padding: 30px;
  border-radius: 10px;
  border: 2px solid white;
  font-size: 20px;
}

.answers {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.answer {
  width: 40%;
  padding: 18px 8px;
  margin: 0 10px 20px 10px;
  text-align: center;
  background: linear-gradient(#0e0124, #22074d);
  border: 1px solid white;
  border-radius: 15px;
  font-weight: 300;
  font-size: 20px;
  cursor: pointer;
  color: white;
}

.answer:hover,
.answer.active {
  background: mediumblue;
}

.answer.correct {
  animation: correct 3s ease forwards;
}

@keyframes correct {
  0%,
  22%,
  42% {
    background: mediumblue;
  }
  20%,
  40%,
  60% {
    background: linear-gradient(#0e0124, #22074d);
  }
  62%,
  100% {
    background: green;
  }
}

.answer.wrong {
  animation: wrong 3s ease forwards;
}

@keyframes wrong {
  0%,
  22%,
  42% {
    background: mediumblue;
  }
  20%,
  40%,
  60% {
    background: linear-gradient(#0e0124, #22074d);
  }
  62%,
  100% {
    background: crimson;
  }
}
</style>
