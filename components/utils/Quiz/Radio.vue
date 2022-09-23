<template>
  <div>
    <div class="custom__radio mb-6" v-for="(option) in options" :key="option">
      <input v-model="form.radio__answer[question.id]" :value="option" type="radio" :id="option">
      <label :for="option">{{ option }}</label>
    </div>
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "Radio",
  props: ['options', 'question'],
  data() {
    return {
      form: {
        radio__answer: []
      }
    }
  },
  mounted() {
    const id = this.question.id
    const quiz__answers = this.$store.state.quiz__answers
    quiz__answers.forEach((answer) => {
      if (answer.id === id) {
        this.radio__answer = answer.radio__answer
      }
    })
  },
  methods: {
    ...mapMutations(['addAnswer'])
  },
  watch: {
    form: {
      deep: true,
      handler(newValue) {
        this.addAnswer({
          id: this.question.id,
          question: this.question.question,
          answer: newValue.radio__answer[this.question.id],
          inputAnswer: ''
        })
      }
    }
  }
}
</script>

<style lang="scss">
.custom__radio {
  position: relative;


  label {
    position: relative;
    padding-left: 28px;
    font-weight: 400;
    cursor: pointer;
    font-size: 16px;
    line-height: 100%;
    color: #000000;


    &:after {
      position: absolute;
      left: 0;
      border-radius: 50%;
      transition: 0.3s;
      width: 16px;
      height: 16px;
      top: 0;
      content: '\2713';
      display: flex;
      font-size: 12px;
      justify-content: center;
      color: white;
      align-items: center;
      border: 1.5px solid #DBDAEA;
    }
  }

  input {
    position: absolute;
    visibility: hidden;
    opacity: 0;

    &:checked ~ label:after {
      background: #00489D;
    }
  }
}
</style>
