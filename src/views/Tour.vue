<template>
  <Header />
  <div>
    TOUR ID {{ $route.params.id }}
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
import Header from "../components/Header";
import Wapp from "../components/Whatsapp";
import Footer from "../components/Footer";

export default {
  name: "Home",
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
  },
};
</script>

<style lang="scss">
.tour-page {
  flex: 1%;
  max-width: 1920px;
  margin: 0 auto;
  padding-top: 70px;
  padding-bottom: 10px;
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
    margin: 40px;
    h1 {
      font-size: 40px;
      margin: 10px;
      color: black;
    }
    h3 {
      font-size: 30px;
      font-weight: 300;
      margin: 10px;
      color: black;
    }
  }
  .tour-view {
    width: 80%;
    iframe {
      width: 100%;
      height: 80vh;
    }
  }
}
</style>
