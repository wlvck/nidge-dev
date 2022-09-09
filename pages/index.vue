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
    <div class="section3">
      <div class="limit__container mx-auto vertical__tabs">
        <h2>Hire and Share</h2>
        <p>Every element of our experience has been designed to facilitate interaction between clients and outstaff
          companies.</p>
        <v-tabs vertical>
          <div>
            <v-tab>
              Hire developer
            </v-tab>
            <v-tab>
              Share with developers
            </v-tab>
            <v-tab>
              Developers
            </v-tab>
          </div>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <ul class="list__group">
                  <li class="list__item d-flex align-center">
                    <div class="item__num">
                      01
                    </div>
                    <div class="item__content">
                      <div class="title">
                        Search developers
                      </div>
                      <div class="primary_p">
                        In the search, enter which developers you need. For example: Java developer or Python.
                      </div>
                      <button class="btn-primary">Find developers</button>
                    </div>
                  </li>
                  <li class="list__item d-flex align-center">
                    <div class="item__num">
                      02
                    </div>
                    <div class="item__content">
                      <div class="title">
                        Find the right developer
                      </div>
                      <div class="primary_p">
                        You can see his experience, reviews, sinority and so on to hire him for your projects.
                      </div>
                    </div>
                  </li>
                  <li class="list__item d-flex align-center">
                    <div class="item__num">
                      03
                    </div>
                    <div class="item__content">
                      <div class="title">
                        Hire a developer
                      </div>
                      <div class="primary_p">
                        Negotiate with him about tasks and payment
                      </div>
                    </div>
                  </li>
                </ul>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <ul class="list__group">
                  <li class="list__item d-flex align-center">
                    <div class="item__num">
                      01
                    </div>
                    <div class="item__content">
                      <div class="title">
                        Register company
                      </div>
                      <div class="primary_p">
                        Fill in all the necessary data for company registration and after checking the company you can
                        add employees
                      </div>
                      <button class="btn-primary">Submit application</button>
                    </div>
                  </li>
                  <li class="list__item d-flex align-center">
                    <div class="item__num">
                      02
                    </div>
                    <div class="item__content">
                      <div class="title">
                        Add developers
                      </div>
                      <div class="primary_p">
                        Fill in the details of the developer to add him to the company and further work on the site
                      </div>
                    </div>
                  </li>
                  <li class="list__item d-flex align-center">
                    <div class="item__num">
                      03
                    </div>
                    <div class="item__content">
                      <div class="title">
                        Find clients
                      </div>
                      <div class="primary_p">
                        You can share their CVs for clients and see the browsing statistics, etc.
                      </div>
                    </div>
                  </li>
                </ul>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <ul class="list__group">
                  <li class="list__item d-flex align-center">
                    <div class="item__num">
                      01
                    </div>
                    <div class="item__content">
                      <div class="title">
                        Apply
                      </div>
                      <div class="primary_p">
                        Fill in the data on work and after verification you will have access to your account
                      </div>
                      <button class="btn-primary">Submit application</button>
                    </div>
                  </li>
                  <li class="list__item d-flex align-center">
                    <div class="item__num">
                      02
                    </div>
                    <div class="item__content">
                      <div class="title">
                        Find clients
                      </div>
                      <div class="primary_p">
                        You can share CVs for clients and see the browsing statistics, etc.
                      </div>
                    </div>
                  </li>
                </ul>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs>
      </div>
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
.theme--light.v-tabs > .v-tabs-bar, .theme--light.v-sheet, .theme--light.v-tabs-items {
  background-color: unset;
}

.v-tab {
  justify-content: start;
  font-weight: 500;
  width: 506px;
  //width: 100%;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.01em;
  padding: 12px;
  text-transform: inherit;
  color: #131313;
}

.v-tabs--vertical > .v-window {
  flex: 1 1 auto;
}

.v-tab--active {
  color: #00489D;
  background: #FFFFFF;
}

.v-tabs-slider-wrapper {
  width: 0 !important;
}
</style>
