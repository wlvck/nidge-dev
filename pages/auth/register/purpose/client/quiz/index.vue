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
            <div>
              <Answer
                :options="currentAnswers.answers"
                :types="currentAnswers.type"/>
            </div>
          </div>
          <div class="box__footer d-flex align-center justify-space-between">
            <button
              v-if="this.spliced__questions.length"
              @click.prevent="goBack"
              class="back d-flex align-center">
              <svg class="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="#00489D" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round"/>
              </svg>
              Back
            </button>
            <div v-if="!this.spliced__questions.length"></div>
            <div class="optional">
              <button class="skip">
                Skip
              </button>
              <button @click="goForward" class="next">
                <span v-if="questions.length > 1">Next</span>
                <span v-else>Send</span>
              </button>
            </div>
          </div>
        </div>
        <div class="scrollable__questions">
          <div class="blue__block"></div>
          <transition-group name="list" class="questions">
            <div v-for="(question, index) in questions" :key="question.id" class="question__parent">
              <div class="question list-complete-item">
                <div class="question__option">
                  <div class="question__num active">
                    {{ question.number }}
                  </div>
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
              'Python', 'Javascript', 'Kotlin', 'C++', 'C#',
              'Java', 'Flutter', 'Php', 'Django', 'Laravel', 'Vue', 'React'
            ]
          }
        },
        {
          id: 5,
          number: '05',
          question: 'When do you need the developer to start?',
          answers: {
            type: [
              'Radio'
            ],
            options: [
              'Immediately', 'In 3 to 4 days', 'In 1 to 2 weeks', 'More than 2 weeks from now'
            ]
          }
        },
        {
          id: 6,
          number: '06',
          question: 'What is your budget per role?',
          answers: {
            type: [
              'Checkbox'
            ],
            options: [
              '< 20$ / h', '< 50$ / h', '< 100$ / h', '< 200$ / h'
            ]
          }
        },
      ],
      spliced__questions: [],
    }
  },
  mounted() {
    this.current__question = this.questions[0].question
  },
  methods: {
    goForward: function () {
      if (this.questions.length > 1) {
        this.spliced__questions.push(this.questions[0])
        this.questions.splice(0, 1)
      } else {
        this.$nuxt.$options.router.push('/auth/register/purpose/client')
      }
    },
    goBack() {
      if (this.spliced__questions.length > 0) {
        console.log(this.spliced__questions[this.spliced__questions.length - 1].id)
        const last_item = this.spliced__questions[this.spliced__questions.length - 1]
        this.questions.unshift(last_item)
        this.spliced__questions.pop()
      }
    }
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

.list-leave-active {
  opacity: 0;
  transform: translateY(-10px);
  transition: all 1s;
}

.list-leave-active {
  animation: removeHeight 1s;
  transition: 1s;
}

.list-enter-active {
  animation: addHeight 2s;
  transition: 2s;
}

@keyframes removeHeight {
  0% {
    height: 100%
  }
  100% {
    height: 0;
  }
}

@keyframes addHeight {
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: 100%;
    opacity: 1;
  }
}
</style>
