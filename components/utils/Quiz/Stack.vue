<template>
  <div class="stack__container d-inline-block">
    <div class="stack">
      <input type="checkbox" :id="option[0]">
      <label :for="option[0]">{{ option[1] }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stack",
  props: [
    'option'
  ]
}
</script>

<style scoped>

</style>
