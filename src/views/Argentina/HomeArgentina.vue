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
import Header from "../../components/Argentina/Header";
import Wapp from "../../components/Argentina/Whatsapp";
import Hero from "../../components/Argentina/Hero";
import About from "../../components/Argentina/About";
import Collections from "../../components/Argentina/Collections";
import Prices from "../../components/Argentina/Prices";
import Contact from "../../components/Argentina/Contact";
import Clients from "../../components/Argentina/Clients";
import Footer from "../../components/Argentina/Footer";

export default {
  name: "HomeArgentina",
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
    categories() {
      return this.$store.getters.allCategories;
    },
    collections() {
      return this.$store.getters.allCollections;
    },
  },
  mounted() {
    this.$store.dispatch("getCategories");
    this.$store.dispatch("getCollections");
  },
};
</script>

<style></style>
