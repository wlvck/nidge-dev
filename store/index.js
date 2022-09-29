import quiz from "@/pages/auth/register/purpose/client/quiz";
import answer from "@/components/utils/Quiz/Answer";

export const state = () => ({
  quiz__answers: [],
  registerCredentials: {}
})


export const mutations = {
  addAnswer(state, quiz__answer) {
    const index = state.quiz__answers.findIndex(answer => answer.id === quiz__answer.id);
    if (index !== -1) {
      state.quiz__answers[index].answer = quiz__answer.answer
      state.quiz__answers[index].inputAnswer = quiz__answer.inputAnswer
      state.quiz__answers[index].stack__answer = quiz__answer.stack__answer
      state.quiz__answers[index].checkbox__answer = quiz__answer.checkbox__answer
    } else {
      state.quiz__answers.push(quiz__answer)
    }
  },
  register(state, credentials) {
    state.registerCredentials = credentials
  }
}

export const actions = {}
