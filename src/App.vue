<template>
  <div class="app" v-if="userName !== null">
    <div class="main">
      <template v-if="isStop">
        <h1 class="earnedMoney">{{ userName }} earned: {{ earnedMoney }}</h1>
        <button class="startButton" @click="onPlayAgain">Play Again</button>
      </template>
      <template v-else>
        <div class="top">
          <div class="timer">
            <TimerGame :setStop="setStop" />
          </div>
        </div>
        <div class="bottom">
          <MainGame :data="data" :questionNumber="questionNumber" />
        </div>
      </template>
    </div>

    <div class="prizeList">
      <ul class="moneyList">
        <li
          v-for="money in prizeList"
          :key="money.id"
          class="moneyListItem"
          :class="{ active: questionNumber === money.id }"
        >
          <span class="moneyListItemNumber">{{ money.id }}</span>
          <span class="moneyListItemAmount">{{ money.amount }}</span>
        </li>
      </ul>
    </div>
  </div>
  <StartGame v-else @start="onStartGame" />
</template>

<script setup>
import { ref } from "vue";
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
const isStop = ref(false);
const questionNumber = ref(1);
const earnedMoney = ref("$ 0");

const onPlayAgain = () => {
  earnedMoney.value = "$ 0";
  isStop.value = false;
  questionNumber.value = 1;
  console.log("play again");
};

// handle on start game
const onStartGame = (username) => {
  userName.value = username;
};

const setStop = (status) => {
  isStop.value = status;
};
</script>

<style scoped></style>
