<template>
  <div class="footer d-flex justify-center">
    <div class="limit__container">
      <div class="footer__up d-flex justify-space-between align-start">
        <div>
          <div class="d-flex align-center flex-row">
            <nuxt-link to="">
              <img src="@/static/footer-logo.svg" alt="">
            </nuxt-link>
            <div class="footer__link link__margin">
              <nuxt-link to="">
                For company
              </nuxt-link>
            </div>
            <div class="footer__link">
              <nuxt-link to="">
                For developers
              </nuxt-link>
            </div>
          </div>
          <p class="up__subtext">Proactive <br>
            professionalism</p>
        </div>
        <div class="d-flex align-end justify-end">
          <div @click="scrollToTop" class="goToTop d-flex align-center justify-center">
            <img src="@/static/goToTop.png" alt="">
          </div>
        </div>
      </div>
      <div class="footer__down d-flex align-center">
        <div class="footer__link mr-12">
          <nuxt-link to="">Terms of Use</nuxt-link>
        </div>
        <div class="footer__link">
          <nuxt-link to="">Privacy Policy</nuxt-link>
        </div>
        <div class="footer__copyright">
          Copyright Ⓒ 2022 . All rights reserved
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {}
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    },
  }
}
</script>

<style lang="scss">
</style>
