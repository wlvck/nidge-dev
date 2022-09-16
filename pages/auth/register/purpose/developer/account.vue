<template>
  <div class="limit__container mx-auto pt-13 pb-16">
    <GoBack url="/auth/register/purpose"/>
    <v-form v-model="valid" class="register__account__form">
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
            <v-container class="v__container">
              <v-row>
                <v-col
                  cols="12"
                  md="5"
                >
                  <v-text-field
                    v-model="firstname"
                    :rules="nameRules"
                    label="First name"
                    required
                  ></v-text-field>
                </v-col>

                <v-col
                  cols="12"
                  md="5"
                >
                  <v-text-field
                    v-model="lastname"
                    :rules="nameRules"
                    label="Last name"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
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
      <v-row class="px-3 py-3">
        <div class="light__card no-shadow border-radius-8 v-picker--full-width">
          <v-container class="v__container">
            <h2 class="form__title mb-5">About</h2>
            <v-col
              class="px-0 py-0"
              cols="12"
              md="12"
            >
              <v-text-field
                v-model="about"
                :rules="nameRules"
                label="About"
                required
              ></v-text-field>
            </v-col>
          </v-container>
        </div>
      </v-row>
      <v-row class="px-3 py-3">
        <div class="light__card no-shadow border-radius-8 v-picker--full-width">
          <v-container class="v__container">
            <h2 class="form__title mb-5">Personal data</h2>
            <v-row>
              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="phone"
                  :rules="phoneRules"
                  label="Phone"
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="Email"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-select
                  v-model="country"
                  :items="countryList"
                  label="City, Country"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" md="4">
                <v-select
                  v-model="time"
                  :items="timeZone"
                  label="Time zone"
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="link"
                  :rules="linkRules"
                  label="Link"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-row>
      <v-row class="px-3 py-3">
        <div class="light__card no-shadow border-radius-8 v-picker--full-width">
          <v-container class="v__container">
            <h2 class="form__title mb-5">Technology stack</h2>
            <div class="d-flex flex-wrap stack__container">
              <div class="stack" v-for="(item, index) in stack_list" :key="item">
                <input type="checkbox" :id="index">
                <label :for="index">{{ item }}</label>
              </div>
            </div>
            <div class="stack">
              <label class="d-flex align-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.66699 8H13.3337" stroke="#00489D" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round"/>
                  <path d="M8 2.66602L8 13.3327" stroke="#00489D" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round"/>
                </svg>
                Add stack</label>
            </div>
            <div class="custom__radio__buttons">
              <h3>Seniority</h3>
              <div class="d-flex align-center">
                <div class="position">
                  <input type="radio" name="position" id="Senior">
                  <label for="Senior">Senior</label>
                </div>
                <div class="position">
                  <input type="radio" name="position" id="Middle">
                  <label for="Middle">Middle</label>
                </div>
                <div class="position">
                  <input type="radio" name="position" id="Junior">
                  <label for="Junior">Junior</label>
                </div>
              </div>
            </div>
          </v-container>
        </div>
      </v-row>
      <v-row class="px-3 py-3">
        <div class="light__card no-shadow border-radius-8 v-picker--full-width">
          <div class="v__container d-block v-picker--full-width">
            <div class="form__title mb-5">
              Work experience
            </div>
            <div class="additional__work__experience">
              <v-row class="reverse__">
                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    v-model="project_name"
                    label="Project name"
                    required
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    v-model="employment_type"
                    label="Employment type"
                    required
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  md="4"
                >
                  <v-text-field
                    v-model="company_name"
                    label="Company name"
                    required
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-menu
                    v-model="start_menu"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="start_date"
                        label="Start date"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="start_date"
                      @input="start_menu = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  md="4"
                >
                  <v-menu
                    v-model="end_menu"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="end_date"
                        label="End date"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="end_date"
                      @input="end_menu = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  cols="12"
                  md="12"
                >
                  <v-text-field
                    v-model="description"
                    label="Description"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <div class="form__title mt-3 mb-4">
                Used technology stack
              </div>
              <div class="d-flex flex-wrap stack__container">
                <div class="stack" v-for="(item, index) in stack_list.slice(0, 5)" :key="item">
                  <input type="checkbox" :id="index">
                  <label :for="index">{{ item }}</label>
                </div>
                <div class="stack">
                  <label>Add stack</label>
                </div>
              </div>
            </div>
            <button type="button" class="add_experience mt-9 d-flex align-center">
              <svg width="24" height="24" class="mr-3" viewBox="0 0 24 24" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12H20" stroke="#00489D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 4L12 20" stroke="#00489D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Add position
            </button>
          </div>
        </div>
      </v-row>
      <v-row class="px-3 py-3">
        <div class="light__card no-shadow border-radius-8 v-picker--full-width">
          <v-container class="v__container">
            <button class="btn-primary py-2 px-8" type="submit">Register</button>
          </v-container>
        </div>
      </v-row>
    </v-form>
  </div>
</template>
<script>
import GoBack from "@/components/utils/GoBack";
import Icon from "@/components/Icons/Icon";
import {validationMixin} from 'vuelidate'
import {required, maxLength, email} from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],

  validations: {
    name: {required, maxLength: maxLength(10)},
    email: {required, email},
    select: {required},
    checkbox: {
      checked(val) {
        return val
      },
    },
  },
  name: "account",
  components: {
    GoBack,
    Icon
  },
  data() {
    return {
      start_date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      end_date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      start_menu: false,
      end_menu: false,
      valid: false,
      row: null,
      firstname: '',
      lastname: '',
      description: '',
      phone: '',
      company_name: '',
      project_name: '',
      employment_type: '',
      about: '',
      link: '',
      time: '',
      country: '',
      countryList: [
        'Astana',
        'Almaty',
        'Shymkent',
        'Taraz'
      ],
      linkRules: [
        v => !!v || 'Link is required',
      ],
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      phoneRules: [
        v => !!v || 'Phone is required',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
      timeZone: [
        'timeZone 1',
        'timeZone 2',
        'timeZone 3',
        'timeZone 4',
      ],
      stack_list: [
        'Python',
        'Php',
        'Nuxt',
        'Java',
        'Ruby',
        'Javascript',
        'Css',
        'Html',
        'C++',
        'C#',
        'Vue',
        'Angular',
        'React',
        'Django',
        'Laravel',
        'Docker'
      ]
    }
  },
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date)
    },
  },
  methods: {
    formatDate(date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },
    parseDate(date) {
      if (!date) return null

      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
  },
  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date)
    },
  },
}
</script>

<style scoped>

</style>
