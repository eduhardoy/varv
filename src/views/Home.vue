<template>
  <!-- Header Componente -->
  <Header title="Test" />
  <!-- Hero Component -->
  <Hero />
  <About />
  <Contact />
  <Footer />
</template>

<script>
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default {
  name: "Home",
  components: {
    Header,
    Hero,
    About,
    Contact,
    Footer,
  },

};
</script>


<style>
</style>