<template>
  <div class="game">
    <div class="question">{{ question.question }}</div>
    <div class="answers">
      <button
        v-for="(answer, key) in question.answers"
        :key="key"
        class="answer"
        @click="handleClick(key)"
        :class="{ active: selectedAnswer === question.answer_true }"
        :disabled="isDisabled"
      >
        {{ answer }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps(["data", "questionNumber"]);
const { data, questionNumber } = props;

let question = ref(data[questionNumber]);
const selectedAnswer = ref(null);
const isDisabled = ref(false);

const handleClick = (answer) => {
  isDisabled.value = true;
  selectedAnswer.value = answer;
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
  justify-content: center;
  gap: 30px;
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
