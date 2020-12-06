<template>
  <div>
    <!-- Header Componente -->
    <Header />
    <Wapp />
    <!-- Hero Component -->
    <Hero />
    <About />
    <Prices />
    <Contact />
    <Clients />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Wapp from "../components/Whatsapp";
import Hero from "../components/Hero";
import About from "../components/About";
import Prices from "../components/Prices";
import Contact from "../components/Contact";
import Clients from "../components/Clients";
import Footer from "../components/Footer";

export default {
  name: "Home",
  components: {
    Header,
    Wapp,
    Hero,
    About,
    Prices,
    Contact,
    Clients,
    Footer,
  },
};
</script>


<style>
</style>