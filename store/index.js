export const state = () => ({
  quiz__answer: []
})


export const mutations = {
  addAnswer(state, quiz) {
    console.log(quiz)
    state.quiz__answer.push({
      question: quiz.question,
      answer: quiz.answer
    })
  }
}

export const actions = {}
