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
            <div v-if="current__state" class="additional__work__experience">
              <div class="d-flex align-center justify-space-between mb-4 mt-3">
                <div class="new__position">
                  2st position
                </div>
                <div class="delete__position" @click="deletePosition">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1795 3.23077C10.613 3.23077 10.1538 3.68996 10.1538 4.25641V5.28205H13.8462V4.25641C13.8462 3.68996 13.387 3.23077 12.8205 3.23077H11.1795ZM15.0769 5.28205V4.25641C15.0769 3.01023 14.0667 2 12.8205 2H11.1795C9.93331 2 8.92308 3.01023 8.92308 4.25641V5.28205H4.61538C4.27552 5.28205 4 5.55757 4 5.89744C4 6.2373 4.27552 6.51282 4.61538 6.51282H4.8851L6.3031 19.2748C6.43007 20.4175 7.39596 21.2821 8.54571 21.2821H15.4543C16.604 21.2821 17.5699 20.4175 17.6969 19.2748L19.1149 6.51282H19.3846C19.7245 6.51282 20 6.2373 20 5.89744C20 5.55757 19.7245 5.28205 19.3846 5.28205H15.0769ZM17.8766 6.51282H6.12345L7.52634 19.1389C7.58406 19.6583 8.0231 20.0513 8.54571 20.0513H15.4543C15.9769 20.0513 16.4159 19.6583 16.4737 19.1389L17.8766 6.51282ZM10.359 9.38462C10.6988 9.38462 10.9744 9.66013 10.9744 10V16.5641C10.9744 16.904 10.6988 17.1795 10.359 17.1795C10.0191 17.1795 9.74359 16.904 9.74359 16.5641V10C9.74359 9.66013 10.0191 9.38462 10.359 9.38462ZM13.641 9.38462C13.9809 9.38462 14.2564 9.66013 14.2564 10V16.5641C14.2564 16.904 13.9809 17.1795 13.641 17.1795C13.3012 17.1795 13.0256 16.904 13.0256 16.5641V10C13.0256 9.66013 13.3012 9.38462 13.641 9.38462Z" fill="#FF3333"/>
                  </svg>
                  <span>Delete</span>
                </div>
              </div>
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
            <button type="button" class="add_experience mt-9 d-flex align-center" v-if="!current__state" @click="addNewExperience">
              <svg width="24" height="24" class="mr-3" viewBox="0 0 24 24" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12H20" stroke="#00489D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 4L12 20" stroke="#00489D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              Add position
            </button>
            <button type="button" class="save py-2 px-8" :disabled="isDisabled" v-if="current__state === 'new-experience'" @click="saveNewExperience">
              Save
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
  transition: {
    name: 'page',
    mode: 'out-in'
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
      ],
      isDisabled: true,
      current__state: '',
      experience_list: []
    }
  },
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date)
    },
  },
  methods: {
    addNewExperience(){
      this.current__state = 'new-experience'
      this.isDisabled = false
    },
    deletePosition(){
      this.current__state = ''
    },
    saveNewExperience(){
      this.current__state = ''
    },
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
