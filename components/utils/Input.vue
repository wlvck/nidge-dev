<template>
  <div class="custom__input">
    <input type="text" :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  props: [
    'placeholder'
  ],
  name: "Input"
}
</script>

<style scoped>

</style>
