<template>
  <div>
    <Header />
    <Wapp />
    <Hero />
    <About />
    <Collections />
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
import Collections from "../components/Collections";
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
    Collections,
    Prices,
    Contact,
    Clients,
    Footer,
  },
  compute: {
    categories(){
      return this.$store.getters.allCategories;
    },
    collections(){
      return this.$store.getters.allCollections;
    },
  },
  mounted() {
    this.$store.dispatch('getCategories')
    this.$store.dispatch('getCollections')
  }
};
</script>


<style>
</style>