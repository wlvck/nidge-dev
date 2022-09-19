<template>
  <div class="product-slider mt-8">
    <VueSlickCarousel :arrows="false" v-bind="settings">
      <div class="card" v-for="(card, index) in 20" :key="index">
        <img src="@/static/slider-user.png" alt="">
        <h2>Amber Larson {{ index }}</h2>
        <div class="d-flex">
          <icon icon-name="FeedbackStar"></icon>
          <icon icon-name="FeedbackStar"></icon>
          <icon icon-name="FeedbackStar"></icon>
          <icon icon-name="FeedbackStar"></icon>
          <icon icon-name="FeedbackStar"></icon>
        </div>
        <h3>Great work</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua.</p>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Icon from "@/components/Icons/Icon";

export default {
  name: 'FeedbackSlider',
  components: {
    VueSlickCarousel,
    Icon
  },
  data() {
    return {
      checked: 1,
      settings: {
        "centerMode": true,
        "centerPadding": "20px",
        "focusOnSelect": true,
        "infinite": true,
        "slidesToShow": 5,
        "speed": 500,
        "responsive": [
          {
            "breakpoint": 1024,
            "settings": {
              "slidesToShow": 3,
            }
          },
          {
            "breakpoint": 600,
            "settings": {
              "slidesToShow": 2,
            }
          },
          {
            "breakpoint": 480,
            "settings": {
              "slidesToShow": 1,
            }
          }
        ]

      }
    }
  },
}
</script>
<style lang="scss">
.card {
  background: #FFFFFF;
  border-radius: 8px;
  padding: 24px;
  max-width: 340px;

  h2, h3 {
    font-weight: 500;
    font-size: 16px;
    line-height: 130%;
    letter-spacing: 0.02em;
    color: #000000;
  }

  h2 {
    margin-top: 12px;
    margin-bottom: 8px;
  }

  h3 {
    font-weight: 600;
    margin-top: 36px;
    margin-bottom: 4px;
  }

  p {
    margin: 0;
    font-weight: 500;
    font-size: 14px;
    line-height: 130%;
    letter-spacing: 0.02em;
    color: #7E7E7E;
  }
}

.slider {
  padding-bottom: 32px;

  h1 {
    font-weight: 500;
    font-size: 40px;
    line-height: 130%;
    letter-spacing: 0.02em;
    color: #131313;
  }

  .arrow {
    cursor: pointer;
  }

  .left {
    margin-right: 16px;
  }
}
</style>
