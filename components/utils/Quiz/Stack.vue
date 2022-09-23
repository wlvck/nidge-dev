<template>
  <div class="stack__container d-flex flex-wrap d-inline-block">
    <div class="stack" v-for="(stack, index) in options">
      <input type="checkbox" :id="stack + index" :value="stack" v-model="stack__answer">
      <label :for="stack + index">{{ stack }}</label>
    </div>
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "Stack",
  props: [
    'options',
    'question'
  ],
  data() {
    return {
      stack__answer: []
    }
  },
  mounted(){
    const id = this.question.id
    const quiz__answers = this.$store.state.quiz__answers
    quiz__answers.forEach((answer) => {
      if (answer.id === id) {
        this.stack__answer = answer.stack__answer
      }
    })
  },
  methods: {
    ...mapMutations(['addAnswer'])
  },
  watch: {
    stack__answer: {
      immediate: true,
      handler(newValue) {
        this.addAnswer({
          id: this.question.id,
          question: this.question.question,
          answer: '',
          inputAnswer: '',
          stack__answer: newValue,
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
