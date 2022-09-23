<template>
  <div>
    <v-text-field v-model="input__answer" :label="placeholder"></v-text-field>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  props: [
    'placeholder',
    'options',
    'question'
  ],
  name: "Input",
  data() {
    return {
      input__answer: ''
    }
  },
  mounted() {
    const id = this.question.id
    const quiz__answers = this.$store.state.quiz__answers
    quiz__answers.forEach((answer) => {
      if (answer.id === id) {
        this.input__answer = answer.input__answer
      }
    })
  },
  methods: {
    ...mapMutations(['addAnswer'])
  },
  watch: {
    input__answer: {
      immediate: true,
      handler(newValue) {
        this.addAnswer({
          id: this.question.id,
          question: this.question.question,
          answer: '',
          inputAnswer: newValue
        })
      }
    }
  }
}
</script>
