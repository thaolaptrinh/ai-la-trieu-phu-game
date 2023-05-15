<template>
  <div class="main-screen">
    <div class="container">
      <div class="inner">
        <div class="answered">
          <div class="question">
            <h2>1. Enter Question Here</h2>
          </div>
          <div class="answers">
            <div class="answer-item">
              <label for="a">A</label>
              <input type="radio" v-model="answer" />
            </div>
            <div class="answer-item">
              <label for="a">A</label>
              <input type="radio" v-model="answer" />
            </div>

            <div class="answer-item">
              <label for="a">A</label>
              <input type="radio" v-model="answer" />
            </div>

            <div class="answer-item">
              <label for="a">A</label>
              <input type="radio" v-model="answer" />
            </div>
          </div>
        </div>
        <div class="scored">1</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const answer = ref(null);
</script>

<style lang="scss" scoped>
.main-screen {
  background-color: #303030;
}

.inner {
  display: grid;
  grid-template-columns: 1fr 0.2fr;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  gap: 40px;

  .answered {
    background: yellow;
  }

  .scored {
    background-color: #fff;
  }

  .question {
    border: 3px solid #fff;
  }

  .answers {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;

    .answer-item {
      border: 1px solid red;
      border-radius: 8px;

      label {
        margin-right: 5px;
      }
    }
  }
}
</style>
