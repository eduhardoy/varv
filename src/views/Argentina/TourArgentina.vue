<template>
  <Header />
  <div>
    <div class="tour-page">
      <div class="tour-page-title">
        <h1>{{ collection.name }}</h1>
        <h3>{{ collection.description }}</h3>
      </div>
      <div class="tour-view">
        <div v-html="collection.iframe" class="iframer"></div>
      </div>
    </div>
  </div>
  <Wapp />
  <Footer />
</template>

<script>
import Header from "../../components/Ecuador/Header";
import Wapp from "../../components/Ecuador/Whatsapp";
import Footer from "../../components/Ecuador/Footer";

export default {
  name: "TourArgentina",
  props: ["name"],
  components: {
    Header,
    Wapp,
    Footer,
  },
  computed: {
    collection() {
      return this.$store.getters.collectionById;
    },
  },
  mounted() {
    this.$store.dispatch("getCollectionById", this.$route.params.id);
    window.scrollTo(0, 0);
    this.$gtag.pageview({
      page_title: `Tour-${this.$route.params.name}`,
      page_path: `/tour/${this.$route.params.name.id}`,
    });
  },
};
</script>

<style lang="scss">
.tour-page {
  flex: 1%;
  max-width: 1920px;
  margin: 0 auto;
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  .tour-page-title {
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    margin: 20px;
    @media (max-width: 768px) {
      width: 95%;
    }
    h1 {
      font-size: 40px;
      margin: 10px;
      color: black;
      @media (max-width: 1024px) {
        font-size: 35px;
      }
      @media (max-width: 768px) {
        font-size: 25px;
      }
    }
    h3 {
      font-size: 30px;
      font-weight: 300;
      margin: 10px;
      color: black;
      @media (max-width: 1024px) {
        font-size: 25px;
      }
      @media (max-width: 768px) {
        font-size: 20px;
      }
    }
  }
  .tour-view {
    width: 80%;
    @media (max-width: 1024px) {
      width: 90%;
    }
    @media (max-width: 768px) {
      width: 95%;
    }
    iframe {
      width: 100%;
      height: 70vh;
    }
  }
}
</style>
