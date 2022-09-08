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
    <div class="section8">
      <FeedbackSlider>
      </FeedbackSlider>
    </div>
    <div class="section9">
      <div class="limit__container mx-auto">
        <div class="partners d-flex align-start justify-space-between">
          <h1>We’re going to became partners <br>
            for the long run.</h1>
          <div class="partners__info">
            <p>Many IT companies, product teams choose us for their projects of varying complexity which creates amazing
              experiences, creating first class products.</p>
            <div class="partners__grid">
              <img src="@/static/oh_logo_01.png" alt="">
              <img src="@/static/oh_logo_02.png" alt="">
              <img src="@/static/oh_logo_03.png" alt="">
              <img src="@/static/oh_logo_07.png" alt="">
              <img src="@/static/oh_logo_08.png" alt="">
              <img src="@/static/oh_logo_09.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section10">
      <div class="limit__container mx-auto">
        <section class="submit__app d-flex align-center justify-space-between">
          <div>
            <h1>You don't know who to hire?</h1>
            <button class="btn-primary">Submit your application</button>
          </div>
          <div>
            <img src="@/static/app.png" alt="">
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import FeedbackSlider from "@/components/FeedbackSlider";

export default {
  name: 'Index',
  components: {
    FeedbackSlider
  }
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

.partners {
  padding: 160px 0 110px;

  h1 {
    font-weight: 600;
    font-size: 32px;
    line-height: 130%;
    letter-spacing: 0.02em;
    color: #191F23;
    max-width: 294px;
  }

  .partners__info {
    max-width: 608px;

    .partners__grid {
      margin-top: 51px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-row-gap: 55px;

      img {
        max-width: 130px;
      }
    }
  }

  p {
    font-weight: 400;
    font-size: 18px;
    margin: 0;
    line-height: 28px;
    letter-spacing: -0.01em;
    color: #232226;

  }
}

.section10 {
  padding: 126px 0 121px;
  background: #E5ECF7;
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

  img {
    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }
}
</style>
