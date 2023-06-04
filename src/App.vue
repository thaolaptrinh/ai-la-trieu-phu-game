<template>
  <div class="app" v-if="userName !== null">
    <div class="main">
      <template v-if="!gameStarted">
        <h1 class="earnedMoney">{{ userName }} earned: {{ earnedMoney }}</h1>
        <button class="startButton" @click="playAgain">Play Again</button>
      </template>
      <template v-else>
        <div class="top">
          <div class="timer">
            <TimerGame
              @timeout="endGame"
              :questionIndex="currentQuestionIndex"
            />
          </div>
        </div>
        <div class="bottom">
          <MainGame :question="currentQuestion" @answer="checkAnswer" />
        </div>
      </template>
    </div>

    <div class="prizeList">
      <ul class="moneyList">
        <li
          v-for="money in prizeList"
          :key="money.id"
          class="moneyListItem"
          :class="{ active: currentQuestionIndex === money.id - 1 }"
        >
          <span class="moneyListItemNumber">{{ money.id }}</span>
          <span class="moneyListItemAmount">{{ money.amount }}</span>
        </li>
      </ul>
    </div>
  </div>
  <StartGame v-else @start="startGame" />
</template>

<script setup>
import { computed, ref } from "vue";
import StartGame from "./components/StartGame.vue";
import MainGame from "./components/MainGame.vue";
import TimerGame from "./components/TimerGame.vue";
import data from "../data.json";

const prizeList = [
  { id: 1, amount: "$ 100" },
  { id: 2, amount: "$ 200" },
  { id: 3, amount: "$ 300" },
  { id: 4, amount: "$ 500" },
  { id: 5, amount: "$ 1.000" },
  { id: 6, amount: "$ 2.000" },
  { id: 7, amount: "$ 4.000" },
  { id: 8, amount: "$ 8.000" },
  { id: 9, amount: "$ 16.000" },
  { id: 10, amount: "$ 32.000" },
  { id: 11, amount: "$ 64.000" },
  { id: 12, amount: "$ 125.000" },
  { id: 13, amount: "$ 250.000" },
  { id: 14, amount: "$ 500.000" },
  { id: 15, amount: "$ 1.000.000" },
].reverse();

const userName = ref(null);
const gameStarted = ref(false);
const currentQuestionIndex = ref(0);
const earnedMoney = ref("$ 0");

const startGame = (username) => {
  userName.value = username;
  gameStarted.value = true;
};

const playAgain = () => {
  currentQuestionIndex.value = 0;
  gameStarted.value = true;
  earnedMoney.value = "$ 0";
};

const endGame = () => {
  gameStarted.value = false;
};

const currentQuestion = computed(() => {
  return data[currentQuestionIndex.value];
});

const nextQuestion = () => {
  if (currentQuestionIndex.value < data.length - 1) {
    currentQuestionIndex.value++;
  } else {
    endGame();
  }
};

const checkAnswer = (selectedAnswer) => {
  if (selectedAnswer === currentQuestion.value.answer_true) {
    earnedMoney.value = prizeList.slice().reverse()[
      currentQuestionIndex.value
    ].amount;

    nextQuestion();
  } else {
    endGame();
  }
};
</script>

<style scoped>
.earnedMoney {
  background-color: rgb(32, 18, 104);
  position: relative;
  padding: 50px;
  margin: auto;
  border-radius: 20px;
}

.timer {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 5px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 10px;
  left: 110px;
  font-size: 30px;
  font-weight: 700;
}

.prizeList {
  overflow: scroll;
  padding: 0;
  flex: 1;
  background-color: #020230;
  display: flex;
  align-items: center;
  justify-content: center;
}

.moneyList {
  padding: 20px;
  list-style: none;
  width: 100%;
}

.moneyListItem {
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 15px 10px;
}

.moneyListItem.active {
  background-color: teal;
}

.moneyListItemNumber {
  width: 30%;
  font-size: 18px;
  font-weight: 100;
}

.moneyListItemAmount {
  font-size: 20px;
  font-weight: 300;
}
</style>
