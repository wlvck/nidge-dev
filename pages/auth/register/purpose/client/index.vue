<template>
  <div class="purpose__welcome limit__container mx-auto">
    <div class="title">Welcome, Arter</div>
    <div class="sub__title">We are glad to welcome you to your personal account.</div>
    <v-expansion-panels
      v-model="panel"
      multiple
    >
      <v-expansion-panel class="accordion">
        <v-expansion-panel-header>How to find your first team</v-expansion-panel-header>
        <v-expansion-panel-content>
          <div class="d-flex align-center justify-space-between">
            <div>
              <span>Option 1</span>
              <div class="step">
                <p>1. Type in a search for developers you need.</p>
                <span>For example: Java developer or Python. </span>
              </div>
              <div class="step">
                <p>2. Find a developer you need</p>
                <span>You can see their experience and feedback.</span>
              </div>
              <div class="step">
                <p>3. Hire a developer </p>
                <span>Agree with him about tasks and payment</span>
              </div>
            </div>
            <div>
              <img src="@/static/accordion__.png" alt="" style="height: 170px;">
            </div>
          </div>
        </v-expansion-panel-content>
        <div class="search__form">
          <input type="text" placeholder="Vue developer">
          <button class="btn-primary">Search</button>
        </div>
      </v-expansion-panel>

      <v-expansion-panel class="accordion">
        <v-expansion-panel-header>Apply for a development team</v-expansion-panel-header>
        <v-expansion-panel-content>
          <div class="d-flex align-center justify-space-between">
            <div>
              <span>Option 2</span>
              <div class="step">
                <p>1. To submit an application for a development team</p>
                <span>Manager will find a team for you</span>
              </div>
              <div class="step">
                <p>2. Contact manager</p>
                <span>The manager will give you the developers details you need.</span>
              </div>
              <div class="step">
                <p>3. Hire a developer </p>
                <span>Agree with him about tasks and payment</span>
              </div>
            </div>
            <div>
              <img src="@/static/accordion__2.png" alt="" style="height: 170px;">
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
