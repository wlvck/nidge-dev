<template>
  <div class="limit__container mx-auto pt-13 pb-16">
    <GoBack url="/auth/register/purpose"/>
    <div class="register__account__form">
      <h2 class="mt-8 mb-2 form__header">Registration</h2>
      <p class="form__subtitle mb-8">Employee registration</p>
      <v-row>
        <v-col cols="9">
          <v-card class="light__card no-shadow border-radius-8">
            <div class="form__banner">
              <button class="edit__banner">
                <icon icon-name="edit-button"/>
              </button>
            </div>
            <div class="form__avatar">
              <img class="avatar"
                   src="https://img.freepik.com/premium-photo/profile-handsome-guy-building-book-shelf-handmade-design-wooden-industry-measuring-length-woodwork-workshop-indoors_274222-19506.jpg?w=2000"
                   alt="">
              <div class="form__input"></div>
            </div>
            <div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card class="light__card no-shadow pa-4 offers border-radius-8">
            <div>
              <v-card-title class="py-0 px-0 mb-2">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="4" r="4" fill="#3D7C46"/>
                </svg>
                <p class="mb-0 ml-2">Ready to interview</p>
              </v-card-title>
              <v-card-text class="pt-0 mb-5 px-4">
                Display job profile to let prospective employers know that you’re open to new jobs and ready to start
                interviewing.
              </v-card-text>
            </div>
            <div>
              <v-card-title class="py-0 px-0 mb-2">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="4" r="4" fill="#FF3333"/>
                </svg>
                <p class="mb-0 ml-2">Closed to Offers</p>
              </v-card-title>
              <v-card-text class="pt-0 px-4">
                You are not interested in new opportunities and want to hide your job profile from prospective
                employers.
              </v-card-text>
            </div>

          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
import GoBack from "@/components/utils/GoBack";
import Icon from "@/components/Icons/Icon";

export default {
  name: "account",
  components: {
    GoBack,
    Icon
  }
}
</script>

<style scoped>

</style>
