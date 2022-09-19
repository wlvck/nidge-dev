<template>
  <div class="purpose__welcome limit__container mx-auto">
    <div class="title">Welcome, Developer</div>
    <div class="sub__title">We are glad to welcome you to your personal account.</div>
    <v-expansion-panels
      v-model="panel"
      multiple
    >

      <v-expansion-panel class="accordion">
        <v-expansion-panel-header>Apply for registration</v-expansion-panel-header>
        <v-expansion-panel-content>
          <div class="d-flex align-center justify-space-between">
            <div>
              <span>* All steps are important</span>
              <div class="step">
                <p>1. Apply for registration </p>
                <span>Fill in the data on work and after verification you will have access to your  account</span>
              </div>
              <div class="step">
                <p>2. Find clients</p>
                <span>You can share CVs for clients and see the browsing statistics, etc.</span>
              </div>
            </div>
            <div>
              <img src="@/static/accordion__4.png" alt="" style="height: 170px;">
            </div>
          </div>
        </v-expansion-panel-content>
        <nuxt-link to="/auth/register/purpose/developer/account">
          <button class="btn-primary btn-submit" @click="redirect">
            Submit application
          </button>
        </nuxt-link>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      panel: [0],
    }
  },
  methods: {
    redirect(){
      this.$nuxt.$options.router.push({
        name: 'auth-register-purpose-developer-account'
      })
    }
  }
}
</script>

<style scoped>

</style>
