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
      <div class="d-flex align-center justify-center">
        <img class="banner__img" src="@/static/banner__images.png" alt="">
      </div>
    </div>
    <div class="section2">
      <div class="limit__container mx-auto">
        <h1 class="primary_h1">Dedicated Teams</h1>
        <p class="primary_p">Handpicked Frontend & Fullstack software developers perfectly tailored to your needs</p>
        <button class="btn-primary">Get in touch</button>
      </div>
      <img src="@/static/N.png" alt="" class="absolute__n">
    </div>
    <div class="section5">
      <div class="limit__container mx-auto d-flex justify-space-between align-center">
        <img src="@/static/business.png" alt="">
        <div class="d-flex flex-column">
          <h1 class="mb-9">Why businesses choose <span>nidge</span> for their most important projects</h1>
          <div class="d-flex align-center mb-6">
            <icon icon-name="personal"/>
            <p class="mb-0 ml-4">Personal project manager for each project</p>
          </div>
          <div class="d-flex align-center mb-6">
            <icon icon-name="comprehensive"/>
            <p class="mb-0 ml-4">Comprehensive selection of services</p>
          </div>
          <div class="d-flex align-center mb-13">
            <icon icon-name="flexible"/>
            <p class="mb-0 ml-4">Flexible team sizes</p>
          </div>
          <button class="btn-primary">Hire developers</button>
        </div>
      </div>
    </div>
    <div class="section6">
      <div class="limit__container mx-auto d-flex align-center justify-space-between">
        <div>
          <img src="@/static/sh1.png" alt="">
        </div>
        <div class="d-flex flex-column align-center justify-center">
          <h2>Share and utilize</h2>
          <p class="primary_p">
            We connect your developers with clients according to their current skills.
          </p>
          <button class="btn-primary">Register company</button>
        </div>
        <div>
          <img src="@/static/sh2.png" alt="">
        </div>
      </div>
      <div class="limit__container mx-auto">
        <div class="section6__grid row">
          <div class="col-sm">
            <icon icon-name="payment"/>
            <div class="grid__item__title">Simplified payment</div>
            <div class="grid__item__content mt-4">See how much you owe directly. No hidden fees. Quick and easy payments
              with
              Paypal / bank transfer / Visa / Mastercard
            </div>
          </div>
          <div class="col-sm">
            <icon icon-name="trial"/>
            <div class="grid__item__title">Free 2-week trial</div>
            <div class="grid__item__content mt-4">Try us out with no obligation</div>
          </div>
          <div class="col-sm">
            <icon icon-name="Time"/>
            <div class="grid__item__title">Share within 48 hours</div>
            <div class="grid__item__content mt-4">No more waiting around - start working with your specialists right
              away.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section7">
      <img class="undefined__vector" src="@/static/undefined-vector.png" alt="">
      <div class="limit__container d-flex mx-auto justify-space-between">
        <div>
          <h1 class="primary_h1">Find your dream job with us</h1>
          <p class="primary_p">Find new clients. We’re looking to add to our pool of talented developers.</p>
          <button class="btn-primary">Apply for Jobs</button>
        </div>
        <div>
          <img style="height: 100%" src="@/static/magazines.png" alt="">
        </div>
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
import Icon from '@/components/Icons/Icon'

export default {
  name: 'Index',
  components: {
    FeedbackSlider,
    Icon
  }
}
</script>
<style lang="scss">
@import "assets/variables";

img {
  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.primary_h1 {
  font-weight: 600;
  font-size: 32px;
  line-height: 130%;
  letter-spacing: 0.02em;
  color: #191F23;
}

.primary_p {
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: -0.01em;
  color: #232226;
}

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
  border-radius: 8px;
  font-size: 18px;
  width: max-content;
  line-height: 135%;
  text-align: center;
  letter-spacing: 0.02em;
  color: #FFFFFF;
}

.section6__grid {
  margin-top: 209px;
}

.banner__img {
  margin-top: 157px;
  width: 100%;
  max-width: 1440px;
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

.section2 {
  z-index: 10;
  margin-top: -167px;
  position: relative;
  background: #EAEFF9;
  padding: 115px 0 120px;
  border: 33px solid rgba(0, 72, 157, 0.02);
  border-radius: 20px;

  p {
    max-width: 435px;
    margin: 16px 0 32px;
  }

  .absolute__n {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
  }
}

.section5 {
  padding: 60px 35px;

  h1 {
    font-weight: 600;
    font-size: 32px;
    line-height: 130%;
    max-width: 571px;
    letter-spacing: 0.02em;
    color: #131313;

    span {
      color: #F6652F;
    }
  }

  p {
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    color: #1D1D1D;
  }

  button {
    width: max-content;
  }
}

.section6 {
  margin-top: 220px;
  padding-bottom: 120px;

  p {
    text-align: center;
    max-width: 399px;
    margin-top: 24px;
    margin-bottom: 40px;
  }

  h2 {
    font-weight: 500;
    font-size: 40px;
    line-height: 110%;
    text-align: center;
    letter-spacing: 0.02em;
    color: #131313;
  }

  button {
    background: $orange;
  }

  .grid__item__title {
    font-weight: 600;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: 0.2px;
    color: #131313;
    margin: 16px 0;
  }

  .grid__item__content {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    max-width: 336px;
    letter-spacing: 0.2px;
    color: #131313;

  }
}

.section7 {
  background: #D8E5DA;
  position: relative;
  padding-top: 110px;

  .undefined__vector {
    position: absolute;
    bottom: 0;
    z-index: 1;
    height: 100%;
    left: 0;
  }
  .limit__container{
    z-index: 2;
    position: relative;
  }
  p {
    max-width: 426px;
    margin: 16px 0 24px;
  }

  button {
    background: #3D7C46;
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
}
</style>
