<template>
  <div class="navbar d-flex justify-center">
    <div class="limit__container">
      <nav class="d-flex align-center justify-space-between">
        <nuxt-link to="/">
          <img src="@/static/logo.svg" alt="">
        </nuxt-link>
        <div class="d-flex align-center">
          <div class="nav-link">
            <nuxt-link to="/platform/profile/company">For company</nuxt-link>
          </div>
          <div class="nav-link">
            <nuxt-link to="/company">For developers</nuxt-link>
          </div>
          <div v-show="!authorized">
            <nuxt-link
              to="/auth/login"
              class="navbar__btn outlined"
            >
              Sign up
            </nuxt-link>
            <nuxt-link
              to=""
              class="navbar__btn notOutlined"
            >
              Hire developers
            </nuxt-link>
          </div>
          <div class="d-flex align-center" v-if="authorized">
            <icon icon-name="bell" class="mr-5"/>
            <div class="d-flex align-center mr-10">
              <img src="@/static/user4.png" alt="" class="rounded-circle mr-4" style="width: 40px;height: 40px;">
              <span>Kanagat</span>
            </div>
            <nuxt-link to="/auth/login">
              <icon icon-name="logout"></icon>
            </nuxt-link>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icons/Icon";

export default {
  name: "Navbar",
  components: {
    Icon
  },
  data() {
    return {
      authorized: false
    }
  },
  mounted() {
    this.authorized = !!localStorage.getItem('user')
  }
}
</script>

<style lang="scss">
@import 'assets/variables';

.navbar {
  border-bottom: 1px solid #D9D9D9;
  padding: 8px 0;
  background: $background;
}


.nav-link a {
  display: inline-block;
  padding: 20px;
  font-weight: 400;
  text-decoration: none;
  font-size: 18px;
  line-height: 24px;
  color: #615C69;
  transition: $hover__transition;

  &:hover {
    color: $blue;
  }
}

.navbar__btn {
  font-weight: 500;
  padding: 9px 32px;
  text-decoration: none;
  border-radius: 8px;
  font-size: 16px;
  line-height: 135%;
  letter-spacing: 0.02em;
  outline: none;
  color: #00489D !important;
  transition: $hover__transition;
  border: 1px solid $blue;
}

.outlined {
  margin: 0 16px 0 28px;
  color: $blue;

  &:hover {
    background: $blue;
    color: white !important;
  }
}

.notOutlined {
  background: $blue;
  color: white !important;

  &:hover {
    background: white;
    color: $blue !important;
  }
}
</style>
