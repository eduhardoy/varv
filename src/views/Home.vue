<template>
  <div>
    <!-- Header Componente -->
    <Header />
    <Wapp />
    <!-- Hero Component -->
    <Hero />
    <About />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Wapp from "../components/Whatsapp";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default {
  name: "Home",
  components: {
    Header,
    Wapp,
    Hero,
    About,
    Contact,
    Footer,
  },
};
</script>


<style>
</style>