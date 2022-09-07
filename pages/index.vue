<template>
  <div class="wrapper">
    <div class="banner">
      <div class="banner__content d-flex flex-column align-center">
        <h2>Hire top remote developers.
          Anytime, anywhere.</h2>
        <p>We connect you with developers experienced in mobile apps, web apps, UI/UX design, and digital project
          launches.</p>
        <div class="banner__search d-flex align-center">
          <input type="text" placeholder="Java developer">
          <button>
            Search
          </button>
        </div>
      </div>
      <div class="banner__img">

      </div>
    </div>
    <div style="background: #E5ECF7">
      <div class="limit__container mx-auto">
        <section class="submit__app d-flex align-center justify-space-between">
          <div>
            <h1>You don't know who to hire?</h1>
            <button class="btn-primary">Submit your application</button>
          </div>
          <div class="animated">
            <img src="@/static/animated.svg" alt="">
          </div>
        </section>
      </div>
    </div>
    <div style="background: yellow">
      <img src="@/static/animated.svg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index'
}
</script>
<style lang="scss">
@import "assets/variables";

.wrapper {
  padding-top: 56px;

  button {
    border-radius: 8px;
  }
}

.btn-primary {
  padding: 16px 48px;
  background: $blue;
  font-weight: 500;
  font-size: 18px;
  line-height: 135%;
  text-align: center;
  letter-spacing: 0.02em;
  color: #FFFFFF;
}

.banner__content {

  h2 {
    margin: 0;
    font-weight: 700;
    font-size: 48px;
    line-height: 110%;
    text-align: center;
    letter-spacing: 0.02em;
    color: #131313;
  }

  p {
    margin: 24px 0 0 0;
    font-weight: 500;
    font-size: 16px;
    max-width: 521px;
    line-height: 130%;
    text-align: center;
    letter-spacing: 0.02em;
    color: #131313;
  }

  .banner__search {
    margin-top: 48px;

    input {
      background: #FFFFFF;
      border-radius: 8px;
      font-weight: 500;
      font-size: 16px;
      line-height: 130%;
      padding: 16px;
      letter-spacing: 0.02em;
      color: #DDDDDD;
      width: 327px;
    }

    button {
      margin-left: 13px;
      background: $blue;
      border-radius: 8px;
      font-weight: 500;
      font-size: 18px;
      line-height: 135%;
      padding: 16px 48px;
      border: none;
      outline: none;
      letter-spacing: 0.02em;
      color: #FFFFFF;
      transition: $hover__transition;

      &:hover {
        background: #063874
      }
    }
  }
}

.animated {
  width: 537px;
  height: 145px;
}

.submit__app {
  h1 {
    margin-bottom: 32px;
    font-weight: 500;
    font-size: 40px;
    line-height: 110%;
    max-width: 400px;
    letter-spacing: 0.02em;
    color: #131313;
  }
}
</style>
