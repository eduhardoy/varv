<template>
  <!-- Header Componente -->
  <Header title="Test" />
  <!-- Hero Component -->
  <Hero />
</template>

<script>
import Header from "../components/Header";
import Hero from "../components/Hero";

export default {
  name: "Home",
  components: {
    Header,
    Hero,
  },

};
</script>


<style>
</style>