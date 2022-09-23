<template>
  <div>
    <v-text-field v-model="input__answer" :label="placeholder"></v-text-field>
  </div>
</template>

<script>
export default {
  props: [
    'placeholder'
  ],
  name: "Input",
  data() {
    return {
      input__answer: ''
    }
  }
}
</script>
