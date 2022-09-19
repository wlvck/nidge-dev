<template>
  <div class="limit__container mx-auto pt-13 pb-16">
    <GoBack url="/search"/>
    <div class="register__account__form dev__account">
      <v-row>
        <v-col cols="9">
          <v-card class="light__card no-shadow border-radius-8">
            <v-container class="v__container">
              <div class="form__avatar d-flex align-center justify-start">
                <img class="avatar"
                     src="https://img.freepik.com/premium-photo/profile-handsome-guy-building-book-shelf-handmade-design-wooden-industry-measuring-length-woodwork-workshop-indoors_274222-19506.jpg?w=2000"
                     alt="">
                <div>
                  <div class="dev__name">Amber Larson</div>
                  <div class="dev__experience">3 months</div>
                </div>
              </div>
              <div class="form__title">
                About
              </div>
              <div class="form__text mb-10">
                Welcome to my profile! I’m a web development expert with more than 10 years of experience in the field.
                I am keen on cutting-edge technologies and helping businesses achieve their objectives. But, as a
                technical expert, I also embed my unique approach to working with clients.
              </div>
              <div class="form__title">
                Location
              </div>
              <div class="form__text">
                Example@gmail.com
              </div>
            </v-container>
          </v-card>
        </v-col>
        <v-col cols="3">
          <v-card class="light__card no-shadow pa-4 offers border-radius-8">
            <div>
              <div class="d-flex align-center font-weight-medium mb-4">
                <svg width="40" height="40" class="mr-3" viewBox="0 0 40 40" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="20" fill="#F9F9F9"/>
                  <path
                    d="M3.57129 22.5746C8.94237 20.1044 14.6254 16.3882 17.8384 11.4419L17.847 11.4287L17.873 11.4419L22.1758 13.6309V21.3265C24.559 18.8938 28.328 16.9295 31.8911 15.093L36.5141 17.8682C31.1617 20.3486 25.5123 24.0613 22.2071 28.9982L17.8783 26.7563V19.1323C15.4951 21.557 11.807 23.6479 8.24391 25.4923L3.57129 22.5746Z"
                    fill="#F6652F"/>
                </svg>

                Nidge dev
              </div>
              <v-card-title class="py-0 px-0 mb-2">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="4" cy="4" r="4" fill="#3D7C46"/>
                </svg>
                <p class="mb-0 ml-2">Ready to interview</p>
              </v-card-title>
            </div>
            <button class="btn-primary py-2 v-picker--full-width mt-8 rounded-2">
              Hire talent
            </button>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="px-3 py-3">
        <div class="light__card no-shadow border-radius-8 v-picker--full-width">
          <v-container class="v__container">
            <h2 class="form__title mb-5">Technology stack</h2>
            <div class="d-flex flex-wrap mt-5">
              <div class="stack">Java</div>
              <div class="stack">C++</div>
              <div class="stack">Java ME</div>
              <div class="stack">Kotlin</div>
            </div>
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
