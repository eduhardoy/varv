<template>
  <Header />
  <div>
    TOUR ID {{ $route.params.id }}
    <div class="tour-page">
      <div class="tour-page-title">
        <h2>{{ collection.name }}</h2>
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
  props: ["collection"],
  name: "Home",
  components: {
    Header,
    Wapp,
    Footer,
  },
};
</script>

<style lang="scss">
.tour-page {
  flex: 1%;
  max-width: 1920px;
  margin: 0 auto;
  padding-top: 70px;
  padding-bottom: 100px;
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  .tour-page-title {
    width: 80%;
    h1 {
      font-size: 30px;
    }
    h3 {
      font-size: 20px;
      font-weight: 300;
    }
  }
  .tour-view {
    width: 80%;
    .iframer {
      width: 100%;
      height: 80vh;
    }
  }
}
</style>
