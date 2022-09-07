<template>
  <div class="navbar d-flex justify-center">
    <div class="limit__container">
      <nav class="d-flex align-center justify-space-between">
        <nuxt-link to="/">
          <img src="@/static/logo.svg" alt="">
        </nuxt-link>
        <div class="d-flex align-center">
          <div class="nav-link">
            <nuxt-link to="/company">For company</nuxt-link>
          </div>
          <div class="nav-link">
            <nuxt-link to="/company">For developers</nuxt-link>
          </div>
          <button
            class="navbar__btn outlined"
          >
            Sign up
          </button>
          <button
            class="navbar__btn notOutlined"
          >
            Hire developers
          </button>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar"
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
  border-radius: 8px;
  font-size: 16px;
  line-height: 135%;
  letter-spacing: 0.02em;
  outline: none;
  color: #00489D;
  transition: $hover__transition;
  border: 1px solid $blue;
}

.outlined {
  margin: 0 16px 0 28px;
  color: $blue;

  &:hover {
    background: $blue;
    color: white;
  }
}

.notOutlined {
  background: $blue;
  color: white;

  &:hover {
    background: white;
    color: $blue;
  }
}
</style>
