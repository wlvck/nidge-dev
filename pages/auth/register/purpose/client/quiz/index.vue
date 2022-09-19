<template>
  <div class="limit__container mx-auto py-16">
    <GoBack url="/auth/register/purpose/client"/>
    <div class="quiz__container">
      <div class="title mt-8  mb-2">Application</div>
      <div class="sub__title mb-8">Apply for a development team</div>
      <div class="d-flex justify-space-between align-center">
        <div class="changeable__box px-6 py-6">
          <div class="question__header">
            How many people do you need for your project?
          </div>
          <div class="box__main mt-6">
            <Input placeholder="Number"/>
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
              <button class="next">Next</button>
            </div>
          </div>
        </div>
        <div class="scrollable__questions">
          <ul>
            <li class="question">
              <div class="question__option">
                <div class="question__num active">
                  01
                </div>
                <div class="doted__line"></div>
              </div>
              <div class="question__title">
                How many people do you need for your project?
              </div>
            </li>
            <li class="question">
              <div class="question__option">
                <div class="question__num ">
                  02
                </div>
                <div class="doted__line"></div>
              </div>
              <div class="question__title">
                What type of project are you hiring for?
              </div>
            </li>
            <li class="question">
              <div class="question__option">
                <div class="question__num ">
                  03
                </div>
                <div class="doted__line"></div>
              </div>
              <div class="question__title">
                How long do you need the developer?
              </div>
            </li>
            <li class="question">
              <div class="question__option">
                <div class="question__num ">
                  04
                </div>
                <div class="doted__line"></div>
              </div>
              <div class="question__title">
                What skills you need from a developer?
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "@/components/utils/Input";
import GoBack from "@/components/utils/GoBack";

export default {
  name: "index",
  components: {
    GoBack,
    Input
  }
}
</script>

<style scoped>

</style>
