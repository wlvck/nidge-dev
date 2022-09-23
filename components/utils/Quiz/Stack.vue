<template>
  <div class="stack__container d-flex flex-wrap d-inline-block">
    <div class="stack" v-for="(stack, index) in options">
      <input type="checkbox" :id="stack + index" :value="stack" v-model="stack__answer">
      <label :for="stack + index">{{ stack }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stack",
  props: [
    'options'
  ],
  data() {
    return {
      stack__answer: []
    }
  }
}
</script>

<style scoped>

</style>
