<template>
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="23" transform="rotate(-180 24 24)" stroke="#00489D" stroke-width="2"/>
    <path d="M13.2929 23.2929C12.9024 23.6834 12.9024 24.3166 13.2929 24.7071L19.6569 31.0711C20.0474 31.4616 20.6805 31.4616 21.0711 31.0711C21.4616 30.6805 21.4616 30.0474 21.0711 29.6569L15.4142 24L21.0711 18.3431C21.4616 17.9526 21.4616 17.3195 21.0711 16.9289C20.6805 16.5384 20.0474 16.5384 19.6569 16.9289L13.2929 23.2929ZM34 23L14 23L14 25L34 25L34 23Z" fill="#00489D"/>
  </svg>
</template>
<style lang="scss" scoped>
@import "assets/variables";

svg {
  circle {
    transition: 0.3s;
  }

  &:hover {
    circle {
      fill: #00489D;
    }

    path {
      fill: $background;
    }
  }
}
</style>
