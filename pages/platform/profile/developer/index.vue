<template>
  <div class="pt-13 pb-16">
    <div class="limit__container mx-auto">
      <GoBack url="/platform/profile/company"/>
      <div class="register__account__form dev__account">
        <v-row>
          <v-col cols="9">
            <v-card class="light__card no-shadow border-radius-8 fill-height">
              <v-container class="v__container">
                <div class="form__avatar d-flex align-center justify-start">
                  <img class="avatar"
                       src="https://img.freepik.com/premium-photo/profile-handsome-guy-building-book-shelf-handmade-design-wooden-industry-measuring-length-woodwork-workshop-indoors_274222-19506.jpg?w=2000"
                       alt="">
                  <div>
                    <div class="dev__name">Kanagat Zhumagaliev</div>
                    <div class="dev__experience">3 months</div>
                  </div>
                </div>
                <div class="form__title mb-2">
                  About
                </div>
                <div class="form__text mb-10">
                  Welcome to my profile! I’m a web development expert with more than 10 years of experience in the
                  field.
                  I am keen on cutting-edge technologies and helping businesses achieve their objectives. But, as a
                  technical expert, I also embed my unique approach to working with clients.
                </div>
                <v-row>
                  <v-col
                    cols="3"
                  >
                    <div class="form__title mb-2">
                      Phone
                    </div>
                    <div class="form__text">
                      8(777)777-77-77
                    </div>
                  </v-col>
                  <v-col
                    cols="3"
                  >
                    <div class="form__title mb-2">
                      Email
                    </div>
                    <div class="form__text">
                      Example@gmail.com
                    </div>
                  </v-col>
                  <v-col
                    cols="3"
                  >
                    <div class="form__title mb-2">
                      Location
                    </div>
                    <div class="form__text">
                      Example@gmail.com
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-card class="light__card no-shadow pa-4 offers border-radius-8 fill-height">
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
              <div class="control__option d-flex flex-column mt-9">
                <button class="d-flex align-center py-2 px-4 mb-4">
                  <icon class="mr-3" icon-name="download"/>
                  Download CV
                </button>
                <button class="d-flex align-center py-2 px-4 mb-4">
                  <icon class="mr-3" icon-name="copy"/>
                  Copy link
                </button>
                <button class="d-flex align-center py-2 px-4 mb-4">
                  <icon class="mr-3" icon-name="edit"/>
                  Edit
                </button>
                <button class="d-flex align-center py-2 px-4 mb-4 delete">
                  <icon class="mr-3" icon-name="delete"/>
                  Delete
                </button>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="account__tab">
      <v-tabs v-model="tabs" centered>
        <v-tab>Information</v-tab>
        <v-tab>Request</v-tab>
      </v-tabs>

      <v-tabs-items v-model="tabs">
        <v-tab-item>
          <v-card flat>
            <div class="limit__container mx-auto">
              <div class="register__account__form dev__account">
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
                <v-row class="px-3 py-3">
                  <div class="light__card no-shadow border-radius-8 v-picker--full-width">
                    <v-container class="v__container">
                      <h2 class="form__title mb-5">Work experience</h2>
                      <ul class="experience__list">
                        <li class="experience__item" v-for="item in 4" :key="item">
                          <div class="item__timeLine">
                            <div class="d-flex align-center justify-center timeLineParent">
                              <div class="timeLineChild"></div>
                            </div>
                            <div class="doted__line"></div>
                          </div>
                          <div class="item__content">
                            <div class="content__title">
                              Приложение для мониторинга рекламных кампаний в соц сетях
                            </div>
                            <div class="d-flex detailed__info">
                              <div class="time d-flex align-center">
                                <svg class="mr-3" width="18" height="18" viewBox="0 0 18 18" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                  <path
                                    d="M17 7.4H1M12.5556 1V4.2M5.44444 1V4.2M5.26667 17H12.7333C14.2268 17 14.9735 17 15.544 16.7384C16.0457 16.5083 16.4537 16.1412 16.7094 15.6896C17 15.1762 17 14.5041 17 13.16V6.44C17 5.09587 17 4.42381 16.7094 3.91042C16.4537 3.45883 16.0457 3.09168 15.544 2.86158C14.9735 2.6 14.2268 2.6 12.7333 2.6H5.26667C3.77319 2.6 3.02646 2.6 2.45603 2.86158C1.95426 3.09168 1.54631 3.45883 1.29065 3.91042C1 4.42381 1 5.09587 1 6.44V13.16C1 14.5041 1 15.1762 1.29065 15.6896C1.54631 16.1412 1.95426 16.5083 2.45603 16.7384C3.02646 17 3.77319 17 5.26667 17Z"
                                    stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                4 months, 2022
                              </div>
                              <div class="position">
                                Flutter developer
                              </div>
                              <div class="comp_name">
                                Company Name
                              </div>
                            </div>
                            <div class="description">
                              Mобильное приложение для продажи машин на запчасти, задачи: разработка приложения в
                              одиночку и
                              потом в команде, сейчас в релизе
                            </div>
                            <div>
                              <div class="stack">
                                Java
                              </div>
                              <div class="stack">
                                Java ME
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </v-container>
                  </div>
                </v-row>
              </div>
            </div>
            <div class="limit__container mt-8 mx-auto d-flex align-center justify-space-between review">
              <div class="d-flex">
                <h1>Reviews</h1>
                <div class="d-flex arrows">
                  <div @click="showPrev" class="mr-2">
                    <icon class="arrow left" icon-name="left-arrow"></icon>
                  </div>
                  <div @click="showNext">
                    <icon class="arrow" icon-name="right-arrow"></icon>
                  </div>
                </div>
              </div>
              <div class="show__all_review">
                See all
              </div>
            </div>
            <FeedbackSlider ref="carousel" :title="'Reviews'"/>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <div class="limit__container mx-auto">
              <v-row class="px-3 py-3" v-for="item in 8" :key="item">
                <div class="light__card no-shadow border-radius-8 v-picker--full-width">
                  <v-container class="v__container py-6 px-6">
                    <v-row class="request__header">
                      <v-col cols="2">
                        <div class="employ__avatar d-flex align-center">
                          <img style="width: 40px; height: 40px; object-fit: cover" src="@/static/user1.png"
                               class="rounded-circle" alt="">
                          <div class="ml-2 d-flex flex-column ">
                            <p class="mb-0 pb-1">Art-er</p>
                            <span>3 month </span>
                          </div>
                        </div>
                      </v-col>
                      <v-col cols="2">
                        <span>Start</span>
                        <p>01.08.2022</p>
                      </v-col>
                      <v-col cols="2">
                        <span>Time</span>
                        <p>2 months</p>
                      </v-col>
                      <v-col cols="2">
                        <span>Payment</span>
                        <p>$50.00/hr</p>
                      </v-col>
                    </v-row>
                    <div class="main__text mt-6 mb-6">
                      Adaptive and cross-browser web interface layout. Customizing functionality (buttons, sliders,
                      forms, galleries and other elements) and writing scripts. Adaptive and cross-browser web interface
                      layout. Customizing functionality (buttons, sliders, forms, galleries and other elements) and
                      writing scripts.
                    </div>
                    <button class="btn btn-primary py-2 px-8">
                      Approve
                    </button>
                  </v-container>
                </div>
              </v-row>
            </div>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </div>
</template>
<script>
import GoBack from "@/components/utils/GoBack";
import Icon from "@/components/Icons/Icon";
import FeedbackSlider from "@/components/FeedbackSlider";

export default {
  name: "_developer",
  components: {
    GoBack,
    Icon,
    FeedbackSlider
  },
  data() {
    return {
      tabs: null,
    }
  },
  mounted() {
  },
  computed: {},
  methods: {
    showPrev() {
      this.$refs.carousel.$children[0].prev()
    },
    showNext() {
      this.$refs.carousel.$children[0].next()
    },
  },
  watch: {},
}
</script>
<style lang="scss">
.review {
  h1 {
    font-weight: 600;
    font-size: 24px;
    line-height: 130%;
    margin-right: 24px;
    color: #131313;

  }

  svg {
    height: 32px !important;
    width: 32px !important;
  }

  .show__all_review {
    font-weight: 500;
    font-size: 16px;
    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    line-height: 130%;
    letter-spacing: 0.02em;
    color: #00489D;
  }
}
</style>
