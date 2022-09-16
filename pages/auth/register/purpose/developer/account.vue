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
      valid: false,
      firstname: '',
      lastname: '',
      phone: '',
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
    }
  },
  computed: {
    countryError() {
      const errors = []
      if (!this.$v.select.$dirty) return errors
      !this.$v.select.required && errors.push('Item is required')
      return errors
    },
  },
}
</script>

<style scoped>

</style>
