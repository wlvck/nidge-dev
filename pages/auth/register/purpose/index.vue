<template>
  <div class="limit__container mx-auto d-flex align-center justify-center fill-height flex-column">
    <div class="auth">
      <v-form
        class="auth__form"
        ref="form"
        lazy-validation
      >
        <GoBack url="/auth/register"/>
        <h2 class="form__title">For what purposes</h2>
        <div class="select__purpose mt-4 mb-7">
          <div class="d-flex align-center">
            <input v-model="purpose" type="radio" value="client" name="purpose" id="hire">
            <label for="hire">To hire developers</label>
          </div>
          <div class="d-flex align-center my-5">
            <input v-model="purpose" type="radio" value="company" name="purpose" id="share">
            <label for="share">Share with developers</label>
          </div>
          <div class="d-flex align-center">
            <input v-model="purpose" type="radio" name="purpose" value="developer" id="find">
            <label for="find">Find a job</label>
          </div>
        </div>
        <button
          class="btn-primary"
          :disabled="disabled"
          type="submit"
          @click.prevent="redirect"
        >
          Create an account
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
import GoBack from "@/components/utils/GoBack";

export default {
  data: () => ({
    disabled: true,
    purpose: '',
  }),
  components: {
    GoBack
  },
  methods: {
    redirect() {
      this.$nuxt.$router.push(`/auth/register/purpose/${this.purpose}`)
      localStorage.setItem('user', this.purpose)
    }
  },
  watch: {
    purpose: {
      handler() {
        this.disabled = false
      }
    }
  }
}
</script>
