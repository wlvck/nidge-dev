<template>
  <nuxt-link :to="url" class="goBack">
    <div class="goToBack d-flex align-center">
      <svg class="mr-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 12L20 12" stroke="#333333" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9 17.5L4 12L9 6.5" stroke="#333333" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round"/>
      </svg>
      Back
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: [
    'url'
  ],
  name: "GoBack"
}
</script>
<style lang="scss">
.goBack {
  text-decoration: none;
}
</style>
