<template>
  <v-container class="limit__container px-0 py-12">
    <v-row
      no-gutters
    >
      <v-col
        cols="3"
      >
        <div class="filter">
          <h2>Filter by </h2>
          <v-expansion-panels
            v-model="panel"
            multiple
          >
            <v-expansion-panel class="transparent-bg mt-0">
              <v-expansion-panel-header>Specializations</v-expansion-panel-header>
              <v-expansion-panel-content>
                <div class="checkbox__input">
                  <v-checkbox
                    label="Python (78)"
                    class="mt-0 py-0"
                  ></v-checkbox>
                  <v-checkbox
                    label="Java (78)"
                    class="mt-0 py-0"
                  ></v-checkbox>
                  <v-checkbox
                    label="JavaScript (78)"
                    class="mt-0 py-0"
                  ></v-checkbox>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel class="transparent-bg mt-0">
              <v-expansion-panel-header>Seniority</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-checkbox
                  label="Junior (78)"
                  class="mt-0 py-0"
                ></v-checkbox>
                <v-checkbox
                  label="Middle (56)"
                  class="mt-0 py-0"
                ></v-checkbox>
                <v-checkbox
                  label="Senior (24)"
                  class="mt-0 py-0"
                ></v-checkbox>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel class="transparent-bg mt-0">
              <v-expansion-panel-header>Time zone</v-expansion-panel-header>
              <v-expansion-panel-content>
                <v-checkbox
                  label="GMT+6 (78)"
                  class="mt-0 py-0 "
                ></v-checkbox>
                <v-checkbox
                  label="GMT+5 (56)"
                  class="mt-0 py-0"
                ></v-checkbox>
                <v-checkbox
                  label="GMT+4 (24)"
                  class="mt-0 py-0"
                ></v-checkbox>
              </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel class="transparent-bg mt-0 price__slider">
              <v-expansion-panel-header>Price</v-expansion-panel-header>
              <v-expansion-panel-content>
                <div class="text-center">
                  <v-card
                    flat
                    color="transparent"
                  >
                    <v-card-text>
                      <v-row>
                        <v-col>
                          <v-range-slider
                            v-model="range"
                            :max="max"
                            :min="min"
                            hide-details
                            class="align-center"
                          >
                            <template v-slot:prepend>
                              <v-text-field
                                :value="range[0]"
                                class="mt-0 pt-0"
                                hide-details
                                single-line
                                type="number"
                                style="width: 40px"
                                @change="$set(range, 0, $event)"
                              ></v-text-field>
                            </template>
                            <template v-slot:append>
                              <v-text-field
                                :value="range[1]"
                                class="mt-0 pt-0"
                                hide-details
                                single-line
                                type="number"
                                style="width: 40px"
                                @change="$set(range, 1, $event)"
                              ></v-text-field>
                            </template>
                          </v-range-slider>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
      </v-col>
      <v-col
        cols="9"
      >
        <div class="result">
          <h2>IT jobs</h2>
          <div class="search__form">
            <input type="text" placeholder="Java developer  ">
            <button class="btn-primary">Search</button>
          </div>
          <v-card
            class="result__card"
            v-for="(dev, index) in dev_list" :key="index"
          >
            <nuxt-link :to="`/search/developer-${dev}`" class="dev__link">
              <div class="card__header d-flex align-center justify-space-between">
                <div class="header__info d-flex align-center">
                  <img src="@/static/user1.png" alt="">
                  <div class="static__title">Amber Larson {{ dev }}</div>
                </div>
                <img class="header__logo" src="@/static/logo.png" alt="">
              </div>
              <div class="card__main mt-5">
                <v-row>
                  <v-col
                    cols="2"
                  >
                    <div class="static__title d-flex align-center">
                      <p class="mr-3 mb-0">Senior</p>
                      <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M5.99992 7.50016L7.33325 8.8335L10.3333 5.8335M11.934 2.8325C12.0713 3.16452 12.3348 3.42843 12.6666 3.56621L13.8301 4.04815C14.1621 4.18568 14.4259 4.44949 14.5634 4.78153C14.701 5.11358 14.701 5.48666 14.5634 5.8187L14.0819 6.98136C13.9443 7.31355 13.9441 7.68701 14.0823 8.01904L14.563 9.18136C14.6312 9.34582 14.6663 9.5221 14.6663 9.70013C14.6664 9.87816 14.6313 10.0544 14.5632 10.2189C14.4951 10.3834 14.3952 10.5328 14.2693 10.6587C14.1434 10.7846 13.9939 10.8844 13.8294 10.9525L12.6668 11.4341C12.3348 11.5714 12.0709 11.8349 11.9331 12.1667L11.4512 13.3302C11.3137 13.6622 11.0499 13.926 10.7179 14.0636C10.3858 14.2011 10.0128 14.2011 9.68073 14.0636L8.51811 13.582C8.18607 13.4448 7.81313 13.4451 7.4813 13.5828L6.31785 14.064C5.986 14.2012 5.61326 14.2011 5.2815 14.0637C4.94974 13.9263 4.68609 13.6628 4.54846 13.3311L4.0664 12.1672C3.92912 11.8352 3.66561 11.5713 3.33382 11.4335L2.17036 10.9516C1.83847 10.8141 1.57476 10.5505 1.43717 10.2186C1.29959 9.88675 1.2994 9.51385 1.43665 9.18186L1.91823 8.0192C2.05542 7.68714 2.05514 7.3142 1.91745 6.98235L1.43657 5.81802C1.36839 5.65356 1.33328 5.47728 1.33325 5.29925C1.33322 5.12122 1.36827 4.94493 1.4364 4.78045C1.50453 4.61597 1.6044 4.46653 1.7303 4.34066C1.8562 4.2148 2.00567 4.11497 2.17016 4.0469L3.33278 3.56531C3.6645 3.42814 3.92824 3.16496 4.06612 2.83353L4.54804 1.67004C4.68557 1.33799 4.94937 1.07419 5.2814 0.936649C5.61343 0.799112 5.9865 0.799112 6.31853 0.936649L7.48115 1.41824C7.81319 1.55544 8.18612 1.55516 8.51795 1.41746L9.6819 0.937396C10.0139 0.799936 10.3869 0.799964 10.7188 0.937474C11.0508 1.07498 11.3146 1.33871 11.4521 1.67067L11.9342 2.83452L11.934 2.8325Z"
                          stroke="#00489D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </div>
                  </v-col>
                  <v-col
                    cols="3"
                  >
                    <div class="static__title">100% Job Success</div>
                  </v-col>
                  <v-col
                    cols="2"
                  >
                    <div class="static__title">$50.00/hr</div>
                  </v-col>
                  <v-col
                    cols="3"
                  >
                    <div class="static__title">Time zone: GMT+6</div>
                  </v-col>

                </v-row>
                <div class="card__text mt-2 mb-5">
                  <p class="mb-0 d-inline">Welcome to my profile! I’m a web development expert with more than 10 years of
                    experience in the field.</p>
                  <nuxt-link to="">Read more</nuxt-link>
                </div>
              </div>
              <div class="card__footer d-flex align-center">
                <div class="stacks">Python</div>
                <div class="stacks">Java</div>
              </div>
            </nuxt-link>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      panel: [0, 1, 2, 3],
      readonly: false,
      min: 4000,
      max: 35000,
      range: [7000, 15000],
      dev_list: 12
    }
  }
}
</script>

<style>

</style>
