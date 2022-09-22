<template>
  <div>
    <v-text-field :label="placeholder"></v-text-field>
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
