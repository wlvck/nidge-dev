<template>
  <v-app class="nuxt--app">
    <Navbar/>
    <v-main class="nuxt--main">
      <nuxt/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default {
  name: 'DefaultLayout',
  components: {
    Navbar,
    Footer
  }
}
</script>
