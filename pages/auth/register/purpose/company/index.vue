<template>
  <div class="purpose__welcome limit__container mx-auto">
    <div class="title">Welcome, Company</div>
    <div class="sub__title">We are glad to welcome you to your personal account.</div>
    <v-expansion-panels
      v-model="panel"
      multiple
    >

      <v-expansion-panel class="accordion">
        <v-expansion-panel-header>Apply for company formation</v-expansion-panel-header>
        <v-expansion-panel-content>
          <div class="d-flex align-center justify-space-between">
            <div>
              <span>* All steps are important</span>
              <div class="step">
                <p>1. Apply for a company registration</p>
                <span>After the company is verified, you can add employees</span>
              </div>
              <div class="step">
                <p>2. Add employees</p>
                <span>You can share their CVs for clients and see the browsing statistics, etc.</span>
              </div>
            </div>
            <div>
              <img src="@/static/accordion__3.png" alt="" style="height: 170px;">
            </div>
          </div>
        </v-expansion-panel-content>
        <button class="btn-primary btn-submit">
          Submit application
        </button>
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
  }
}
</script>

<style scoped>

</style>
