<template>
  <div class="main-screen">
    <div class="quiz">
      <div class="timer">22</div>
      <div class="q">
        <div class="question">Đâu là tên một loại bánh Huế?</div>
        <div class="answers">
          <button class="answer">Sướng</button
          ><button class="answer">Vui</button
          ><button class="answer">Khoái</button
          ><button class="answer">Thích</button>
        </div>
      </div>
    </div>
    <div class="prizeList">
      <ul className="moneyList">
        <li
          v-for="money in prizeList"
          :key="money.id"
          class="moneyListItem"
          :class="{ active: questionNumber === money.id }"
        >
          <span className="moneyListItemNumber">{{ money.id }}</span>
          <span className="moneyListItemAmount">{{ money.amount }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const questionNumber = ref(1);
const stop = ref(false);
const earned = ref("$ 0");
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

const playAgain = () => {
  setQuestionNumber(1);
  setStop(false);
  setEarned("$ 0");
};

const answer = ref(null);
</script>

<style lang="scss" scoped>
.main-screen {
  background: #303030;
  font-family: "Comfortaa", cursive;
  color: #fff;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1200px) {
    flex-direction: initial;
  }
  height: 100vh;
}
.quiz {
  flex: 3 1;
  background: linear-gradient(180deg, transparent, #020230),
    url("../assets/images/bgr.jpg") 50%;
  flex-direction: column;
  background-size: cover;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 1200px) {
  }
}

.prizeList {
  overflow: scroll;
  padding: 0;
  flex: 1 1;
  background-color: #020230;
  display: flex;
  align-items: center;
  justify-content: center;
}

.timer {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: 5px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 40px;
  left: 10px;
  font-size: 30px;
  font-weight: 700;
}

.q {
  .question {
    background: linear-gradient(#100241, #000);
    text-align: center;
    padding: 30px;
    border-radius: 10px;
    border: 2px solid #fff;
    font-size: 20px;
    margin-bottom: 30px;
  }
  .answers {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .answer {
      width: 40%;
      padding: 18px 8px;
      margin: 0 10px 20px;
      text-align: center;
      background: linear-gradient(#0e0124, #22074d);
      border: 1px solid #fff;
      border-radius: 15px;
      font-weight: 300;
      font-size: 20px;
      cursor: pointer;
      color: #fff;
    }
  }
}
</style>
