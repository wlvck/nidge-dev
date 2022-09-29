<template>
  <div class="wrapper">
    <div class="banner">
      <div class="banner__content d-flex flex-column align-center">
        <h2>Hire top remote developers.
          Anytime, anywhere.</h2>
        <p>We connect you with developers experienced in mobile apps, web apps, UI/UX design, and digital project
          launches.</p>
        <div class="banner__search d-flex align-center">
          <input type="text" v-model="query" placeholder="Java developer">
          <button @click.prevent="routerPush">
            Search
          </button>
        </div>
      </div>
      <div class="d-flex align-center justify-center">
        <div
          class="banner__grid"
        >
          <div class="d-flex flex-column grid__item">
            <img src="@/static/user1.png" alt="">
            <img src="@/static/user8.png" alt="">
          </div>
          <div class="d-flex flex-column grid__item">
            <img src="@/static/user2.png" alt="">
            <img src="@/static/user9.png" alt="">
          </div>
          <div class="d-flex flex-column grid__item">
            <img src="@/static/user3.png" alt="">
            <img src="@/static/user10.png" alt="">
          </div>
          <div class="d-flex flex-column grid__item">
            <img src="@/static/user4.png" alt="">
            <img src="@/static/user11.png" alt="">
          </div>
          <div class="d-flex flex-column grid__item">
            <img src="@/static/user5.png" alt="">
            <img src="@/static/user12.png" alt="">
          </div>
          <div class="d-flex flex-column grid__item">
            <img src="@/static/user6.png" alt="">
            <img src="@/static/user13.png" alt="">
          </div>
          <div class="d-flex flex-column grid__item">
            <img src="@/static/user7.png" alt="">
            <img src="@/static/user14.png" alt="">
          </div>

        </div>
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
        <v-tabs vertical>
          <div>
            <h2>Hire and Share</h2>
            <p>Every element of our experience has been designed to facilitate <br> interaction between clients and
              out staff
              companies.</p>
            <v-tab class="d-flex align-center justify-space-between">
              Hire developer
              <icon icon-name="TabArrow"/>
            </v-tab>
            <v-tab class="d-flex align-center justify-space-between">
              Share with developers
              <icon icon-name="TabArrow"/>
            </v-tab>
            <v-tab class="d-flex align-center justify-space-between">
              Developers
              <icon icon-name="TabArrow"/>
            </v-tab>
          </div>
          <v-tab-item transition="fade-transition" reverse-transition="fade-transition">
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
          <v-tab-item transition="fade-transition" reverse-transition="fade-transition">
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
          <v-tab-item transition="fade-transition" reverse-transition="fade-transition">
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
      <div class="limit__container mx-auto d-flex align-center justify-space-between slider mt-10 pt-10">
        <h1>Hear form our clients</h1>
        <div class="d-flex">
          <div @click="showPrev">
            <icon class="arrow left" icon-name="left-arrow"></icon>
          </div>
          <div @click="showNext">
            <icon class="arrow" icon-name="right-arrow"></icon>
          </div>
        </div>
      </div>
      <FeedbackSlider ref="carousel" :title="'Hear from our clients  '"/>
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
            <button class="btn-primary" @click.prevent="routerPush">Submit your application</button>
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
import Loading from "@/components/utils/Loading";

export default {
  transition: {
    name: 'page',
    mode: 'out-in'
  },
  name: 'Index',
  components: {
    FeedbackSlider,
    Icon,
    Loading
  },
  auth: false,
  data() {
    return {
      query: ''
    }
  },
  mounted() {
    console.log(this.$auth.user)
  },
  methods: {
    routerPush() {
      this.$nuxt.$options.router.push({
        name: 'search',
        params: {
          query: this.query
        }
      })
    },
    showPrev() {
      this.$refs.carousel.$children[0].prev()
    },
    showNext() {
      this.$refs.carousel.$children[0].next()
    },

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

  svg {
    opacity: 0;
  }
}

.v-tabs--vertical > .v-window {
  flex: 1 1 auto;
}

.v-tab--active {
  color: #00489D;
  background: #FFFFFF;

  svg {
    opacity: 1;
  }
}

.v-tabs-slider-wrapper {
  width: 0 !important;
}
</style>
