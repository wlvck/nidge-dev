<template>
  <div class="limit__container mx-auto d-flex align-center justify-center fill-height flex-column">
    <div class="auth">
      <v-form
        class="auth__form"
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <h2 class="form__title">Create an account</h2>
        <p class="form__paragraph d-flex align-center mb-0">Already have an account? &nbsp;
          <nuxt-link to="/auth/login"> Log in</nuxt-link>
        </p>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              label="Name"
              required
            ></v-text-field>
          </v-col>

          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              label="Surname"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-text-field
          v-model="password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="Password"
          hint="At least 8 characters"
          counter
          @click:append="show1 = !show1"
        ></v-text-field>
        <div class="text-end forgot__password">
          <nuxt-link to="">Forgot your password?</nuxt-link>
        </div>
        <div class="social">
          <h3>Sign in with social networks</h3>
          <nuxt-link to="">
            <icon icon-name="google"/>
          </nuxt-link>
          <nuxt-link to="">
            <icon icon-name="facebook"/>
          </nuxt-link>
          <nuxt-link to="">
            <icon icon-name="apple"/>
          </nuxt-link>
        </div>
        <button
          class="btn-primary"
          @click.prevent="validate"
        >
          Continue
        </button>
      </v-form>
      <p class="terms__policy">
        By clicking "Create Account", I acknowledge that I have read the <br>
        <nuxt-link to="">Terms of Use</nuxt-link>
        and
        <nuxt-link to="">Privacy Policy</nuxt-link>
        .
      </p>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icons/Icon'

export default {
  transition: 'fade',
  data: () => ({
    valid: false,
    password: '',
    show1: true,
    firstname: '',
    lastname: '',
    nameRules: [
      v => !!v || 'This field is required',
    ],
    rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 8 || 'Min 8 characters',
      emailMatch: () => (`The email and password you entered don't match`),
    },
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
  }),
  components: {
    Icon
  },
  methods: {
    validate() {
      this.$refs.form.validate()
    },
  },
}
</script>
