<template>
  <div class="limit__container mx-auto d-flex align-center justify-center fill-height flex-column">
    <div class="auth">
      <v-form
        class="auth__form"
        ref="form"
        lazy-validation
      >
        <nuxt-link to="/auth/register">
          <div class="goToBack d-flex align-center">
            <svg class="mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12L20 12" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9 17.5L4 12L9 6.5" stroke="#333333" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
            Back
          </div>
        </nuxt-link>
        <h2 class="form__title">For what purposes</h2>
        <div class="select__purpose mt-4 mb-7">
          <div class="d-flex align-center">
            <input type="radio" name="purpose" id="hire">
            <label for="hire">To hire developers</label>
          </div>
          <div class="d-flex align-center my-5">
            <input type="radio" name="purpose" id="share">
            <label for="share">Share with developers</label>
          </div>
          <div class="d-flex align-center">
            <input type="radio" name="purpose" id="find">
            <label for="find">Find a job</label>
          </div>
        </div>
        <button
          class="btn-primary"
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

export default {
  data: () => ({}),
}
</script>
