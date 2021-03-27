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
import Header from "../../components/Ecuador/Header";
import Wapp from "../../components/Ecuador/Whatsapp";
import Hero from "../../components/Ecuador/Hero";
import About from "../../components/Ecuador/About";
import Collections from "../../components/Ecuador/Collections";
import Prices from "../../components/Ecuador/Prices";
import Contact from "../../components/Ecuador/Contact";
import Clients from "../../components/Ecuador/Clients";
import Footer from "../../components/Ecuador/Footer";

export default {
  name: "HomeEcuador",
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
