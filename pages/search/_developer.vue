<template>
  <div class="limit__container mx-auto pt-13 pb-16">
    <GoBack url="/search"/>
    <div class="register__account__form">
      <v-row>
        <v-col cols="9">
          <v-card class="light__card no-shadow border-radius-8">
            <div class="form__avatar">
              <img class="avatar"
                   src="https://img.freepik.com/premium-photo/profile-handsome-guy-building-book-shelf-handmade-design-wooden-industry-measuring-length-woodwork-workshop-indoors_274222-19506.jpg?w=2000"
                   alt="">
              <div class="form__input"></div>
            </div>
            <v-container class="v__container">
              <div class="form__title">
                About
              </div>
              <div>
                Welcome to my profile! I’m a web development expert with more than 10 years of experience in the field.
                I am keen on cutting-edge technologies and helping businesses achieve their objectives. But, as a
                technical expert, I also embed my unique approach to working with clients.
              </div>
              <div class="form__title">
                Location
              </div>
              <div>
                Example@gmail.com
              </div>
            </v-container>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card class="light__card no-shadow pa-4 offers border-radius-8 fill-height">
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
            <button class="btn-primary py-2 v-picker--full-width">
              Hire talent
            </button>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="px-3 py-3">
        <div class="light__card no-shadow border-radius-8 v-picker--full-width">
          <v-container class="v__container">
            <h2 class="form__title mb-5">Technology stack</h2>
          </v-container>
        </div>
      </v-row>
    </div>
  </div>
</template>
<script>
import GoBack from "@/components/utils/GoBack";
import Icon from "@/components/Icons/Icon";

export default {
  name: "_developer",
  components: {
    GoBack,
    Icon
  },
  data() {
    return {}
  },
  computed: {},
  methods: {},
  watch: {},
}
</script>
