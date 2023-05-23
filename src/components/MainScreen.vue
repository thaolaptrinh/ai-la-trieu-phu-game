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
      <ul class="moneyList">
        1
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

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
