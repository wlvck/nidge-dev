<template>
  <div :class="fullWidth ? 'd-flex align-center justify-center loading__container' : 'd-flex align-center justify-center'">
    <div v-bind:style="styles" class="spinner spinner--circle-10">
      <div v-bind:style="innerStyles" class="spinner-inner">
        <div class="loader-xbox"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Loading',
  props: {
    size: {
      default: '60px'
    },
    fullWidth: false
  },
  computed: {
    innerStyles() {
      let size = parseInt(this.size)
      return {
        transform: 'scale(' + (size / 100) + ')'
      }
    },
    styles() {
      return {
        width: this.size,
        height: this.size
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.loading__container {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.66);
}

.spinner {
  display: flex;
  justify-content: center;
  align-items: center;

  * {
    line-height: 0;
    box-sizing: border-box;
  }
}

.spinner-inner {
  width: 100px;
  height: 100px;
  flex-shrink: 0;
}

.loader-xbox, .loader-xbox:before, .loader-xbox:after {
  position: absolute;
  border: 3px solid transparent;
  border-top: 3px solid #F6652F;
  border-radius: 50%;
  animation: rotate linear infinite;
  content: '';
}

.loader-xbox {
  height: 100px;
  width: 100px;
  animation-duration: 1.05s;
}

.loader-xbox:before {
  height: 75px;
  width: 75px;
  top: 10px;
  left: 10px;
  border-top: 3px solid #F6652F;
  animation-duration: 10s;
}

.loader-xbox:after {
  height: 50px;
  width: 50px;
  top: 22px;
  left: 22px;
  border-top: 3px solid #F6652F;
  animation-duration: 4s;
}

@keyframes rotate {
  from {
    transform: rotateZ(360deg);
  }
  to {
    transform: rotateZ(0deg);
  }
}

</style>
