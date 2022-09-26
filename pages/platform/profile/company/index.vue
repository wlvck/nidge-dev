<template>
  <div class="limit__container mx-auto pt-13 pb-16">
    <div class="register__account__form">
      <h2 class="mt-8 mb-2 form__header">Welcome, Arter Company</h2>
      <p class="form__subtitle mb-8">We are glad to welcome you to your personal account.</p>
      <v-row class="px-3 py-3">
        <div class="light__card no-shadow border-radius-8 v-picker--full-width">
          <v-container class="v__container">
            <div class="d-flex align-start justify-space-between">
              <p class="font-weight-regular">Company data</p>
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28" cy="28" r="28" fill="#F9F9F9"/>
                <path
                  d="M4.99902 31.6043C12.5185 28.1459 20.4748 22.9433 24.973 16.0185L24.985 16L25.0214 16.0185L31.0454 19.083V29.8568C34.3819 26.4511 39.6585 23.7011 44.6468 21.13L51.1189 25.0153C43.6255 28.4879 35.7165 33.6856 31.0892 40.5973L25.0288 37.4586V26.785C21.6923 30.1796 16.529 33.1068 11.5407 35.689L4.99902 31.6043Z"
                  fill="#F6652F"/>
              </svg>
            </div>
            <v-row>
              <v-col
                cols="3">
                <div class="detail__name mb-10 font-weight-regular">Company name</div>
                <div class="detail__info font-weight-regular">Art-er Company</div>
              </v-col>
              <v-col
                cols="2">
                <div class="detail__name mb-10 font-weight-regular">Company description</div>
                <div class="detail__info font-weight-regular">030120007701</div>
              </v-col>
              <v-col
                cols="2">
                <div class="detail__name mb-10 font-weight-regular">Number of employees</div>
                <div class="detail__info font-weight-regular">16</div>

              </v-col>
              <v-col
                cols="2">
                <div class="detail__name mb-10 font-weight-regular">Sphere</div>
                <div class="detail__info font-weight-regular">-</div>

              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-row>
      <v-row class="px-3 py-3">
        <div class="light__card no-shadow border-radius-8 v-picker--full-width">
          <v-container class="v__container">
            <p class="font-weight-regular mb-6">Employees</p>
            <div class="mt-6 d-flex align-center justify-space-between">
              <div class="search__dev">
                <input type="text" class="py-2 px-4" placeholder="Search for employees">
                <button class="btn btn-primary px-8 ml-3 py-2">Search</button>
              </div>
              <button class="add__dev d-flex align-center justify-center px-2 py-2">
                <svg class="mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 12H20" stroke="#00489D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12 4L12 20" stroke="#00489D" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round"/>
                </svg>
                Add employee
              </button>
            </div>
            <div class="dev__list__table mt-11">
              <div class="table__header mb-4 d-flex align-center justify-space-between">
                <div class="col__name mr-8">
                  №
                </div>
                <v-row>
                  <v-col
                    cols="2"
                    class="col__name">
                    Employee
                  </v-col>
                  <v-col
                    cols="10"
                  >
                    <v-row>
                      <v-col
                        cols="2"
                        class="col__name">
                        Time zone
                      </v-col>
                      <v-col
                        cols="1"
                        class="col__name">
                        Price
                      </v-col>
                      <v-col
                        cols="3"
                        class="col__name text-center">
                        Number of reviews
                      </v-col>
                      <v-col
                        cols="2"
                        class="col__name">
                        Job Success
                      </v-col>
                      <v-col
                        cols="2"
                        class="col__name">
                        Work Experience
                      </v-col>
                      <v-col
                        cols="2"
                        class="col__name text-end">
                        Employment
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </div>
              <nuxt-link to="/platform/profile/developer" v-for="dev in 5" :key="dev" class="table__row pt-6 mb-6">
                <div class="d-flex align-center justify-space-between">
                  <div class="row__name mr-8">
                    {{dev}}
                  </div>
                  <v-row>
                    <v-col
                      cols="2"
                      class="row__name employ__avatar d-flex align-center">
                      <img style="width: 40px; height: 40px; object-fit: cover" src="@/static/user1.png"
                           class="rounded-circle" alt="">
                      <div class="ml-2 d-flex flex-column ">
                        <p class="mb-0 pb-1">Art-er</p>
                        <span>3 month </span>
                      </div>
                    </v-col>
                    <v-col
                      cols="10"
                    >
                      <v-row>
                        <v-col
                          cols="2"
                          class="row__name">
                          GMT+6
                        </v-col>
                        <v-col
                          cols="1"
                          class="row__name">
                          $50.00/hr
                        </v-col>
                        <v-col
                          cols="3"
                          class="row__name text-center">
                          15
                        </v-col>
                        <v-col
                          cols="2"
                          class="row__name">
                          100%
                        </v-col>
                        <v-col
                          cols="2"
                          class="row__name">
                          Senior
                        </v-col>
                        <v-col
                          cols="2"
                          class="row__name text-end">
                          <div class="dev__status busy__status">
                            Busy 3 months
                          </div>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>
                </div>
                <div class="d-flex align-center mt-6">
                  <div class="row__name mr-8 opacity-0">
                    1
                  </div>
                  <div class="stack__technology d-flex align-center">
                    <p class="mr-2">Technology stack</p>
                    <div class="stack px-4 py-1 mr-3" v-for="stack in 10" :key="stack">
                      Python {{ stack }}
                    </div>

                  </div>
                </div>
              </nuxt-link>
            </div>
          </v-container>
        </div>
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "index",
  components: {},
  data() {
    return {}
  },
}
</script>

<style lang="scss">

</style>
