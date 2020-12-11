<template>
    <Header />
  <div>TOUR ID {{ $route.params.id }}
    <div class="tour-page">
      <div class="tour-page-title">
        <h2>{{collection.name}}</h2>
        <h3>{{collection.description}}</h3>
      </div>
      <div class="tour-view">
        <div v-html="collection.iframe"></div>
        <iframe width="100%" height="640" style="width: 100%; height: 640px; border: none; max-width: 100%;" frameborder="0" allowfullscreen allow="xr-spatial-tracking; gyroscope; accelerometer" scrolling="no" src="https://kuula.co/share/collection/7P8zt?fs=1&vr=0&sd=1&thumbs=1&margin=25&alpha=0.80&info=1&logo=1"></iframe>
      </div>
    </div>
  </div>
    <Wapp />
    <Contact />
    <Footer />
</template>

<script>
import Header from "../components/Header";
import Wapp from "../components/Whatsapp";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default {
  props:["collection"],
  name: "Home",
  components: {
    Header,
    Wapp,
    Contact,
    Footer,
  },
};
</script>

<style lang="scss">
.tour-page{
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
  .tour-page-title{
    width: 100%;
  }
  .tour-view{
    width: 80%;
  }
}
</style>