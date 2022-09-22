<template>
  <div class="limit__container mx-auto py-16">
    <GoBack url="/auth/register/purpose/client"/>
    <div class="quiz__container">
      <div class="title mt-8  mb-2">Application</div>
      <div class="sub__title mb-8">Apply for a development team</div>
      <div class="d-flex justify-space-between align-center">
        <div class="changeable__box px-6 py-6">
          <div class="question__header">
            {{ currentQuestion.question }}
          </div>
          <div class="box__main pt-6">
            <div v-if="currentAnswers.answers.length === 0">
              <Answer :type="currentAnswers.type[0]"/>
            </div>
            <div v-else
                 v-for="(option, index) in currentAnswers.answers"
                 :key="option">
              <Answer
                :option="[index, option]"
                :type="currentAnswers.type[0]"/>
            </div>
          </div>
          <div class="box__footer d-flex align-center justify-space-between">
            <button class="back d-flex align-center">
              <svg class="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="#00489D" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
              </svg>
              Back
            </button>
            <div class="optional">
              <button class="skip">
                Skip
              </button>
              <button @click="goForward" class="next">Next</button>
            </div>
          </div>
        </div>
        <div class="scrollable__questions">
          <transition-group name="list-complete" class="questions">
            <div v-for="question in questions" :key="question.question" class="question__parent">
              <div class="question list-complete-item">
                <div class="question__option">
                  <div class="question__num active">
                    {{ question.number }}
                  </div>
                  <div class="doted__line"></div>
                </div>
                <div class="question__title">
                  {{ question.question }}
                </div>
              </div>
            </div>
          </transition-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoBack from "@/components/utils/GoBack";
import Answer from "@/components/utils/Quiz/Answer";

export default {
  name: "index",
  components: {
    GoBack,
    Answer
  },
  data() {
    return {
      questions: [
        {
          id: 1,
          number: '01',
          question: 'How many people do you need for your project?',
          answers: {
            type: [
              'Input'
            ],
            options: []
          }
        },
        {
          id: 2,
          number: '02',
          question: 'What type of project are you hiring for?',
          answers: {
            type: [
              'Radio',
              'Input'
            ],
            options: [
              'New idea or project',
              'Existing project that needs more resources',
              'Ongoing assistance or consultation'
            ]
          }
        },
        {
          id: 3,
          number: '03',
          question: 'How long do you need the developer?',
          answers: {
            type: [
              'Radio',
              'Input'
            ],
            options: [
              'Less than 1 week',
              '1 to 4 weeks',
              '1 to 3 months',
              'Longer than 3 months',
              'Other'
            ]
          }
        },
        {
          id: 4,
          number: '04',
          question: 'What skills you need from a developer?',
          answers: {
            type: [
              'Stack'
            ],
            options: [
              'Python', 'Javascript', 'Kotlin', 'Django', 'C++', 'C#',
              'Java', 'Flutter', 'Php', 'Django', 'Laravel', 'Vue', 'React'
            ]
          }
        },
        {
          id: 5,
          number: '05',
          question: 'When do you need the developer to start?'
        },
        {
          id: 6,
          number: '06',
          question: 'What is your budget per role?'
        },
      ],
    }
  },
  mounted() {
    this.current__question = this.questions[0].question
  },
  methods: {
    goForward: function () {
      this.questions.splice(0, 1)
    },
  },
  computed: {
    currentQuestion() {
      if (this.questions.length > 0) {
        return this.questions[0]
      }
    },
    currentAnswers() {
      return {
        type: this.currentQuestion.answers.type,
        answers: this.currentQuestion.answers.options
      }
    }
  }
}
</script>

<style lang="scss">
.list-complete-item {
  transition: all 1s;
  display: block;
}

.question__parent {
  max-height: 104px;
  height: 100%;
}

.list-complete-enter, .list-complete-leave-to {
  opacity: 0;
  transform: translateY(-10px);
  transition: all 1s;
}

.list-complete-leave-active {
  //position: absolute;
  transition: all 1s;
  animation: removeHeight 1s;
}

@keyframes removeHeight {
  0% {
    height: 100%
  }
  100% {
    height: 0;
  }
}
</style>
