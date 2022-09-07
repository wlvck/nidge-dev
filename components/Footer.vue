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
          <div class="goToTop d-flex align-center justify-center">
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
  name: "Footer"
}
</script>

<style lang="scss">
@import "assets/variables";

.footer {
  background: #131313;
  padding: 33px 0 16px;

  .goToTop {
    background: #FFFFFF;
    width: 48px;
    height: 48px;
    cursor: pointer;
    border-radius: 100%;
  }

  .footer__up {
    padding: 24px 0;
    border-bottom: 1px solid #3A3A3A;

    .up__subtext {
      font-weight: 500;
      font-size: 16px;
      line-height: 130%;
      margin-top: 16px;
      color: #7E7E7E;
    }

    .link__margin {
      margin: 0 40px 0 80px;
    }

    .footer__link {

      a {
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        text-decoration: none;
        color: #FFFFFF;
      }
    }
  }

  .footer__down {
    padding: 24px 0;
    width: 100%;

    .footer__link a, .footer__copyright {
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;
      text-decoration: none;
      color: #7E7E7E;
    }

    .footer__copyright {
      flex: 1 1 auto;
      text-align: end;
    }
  }
}
</style>
