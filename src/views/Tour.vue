<template>
    <Header />
  <div>TOUR ID {{ $route.params.id }}
    <div class="tour-page">
      <div class="tour-page-title">
        <h2>NOMBRE</h2>
        <h3>DESCRIPTION</h3>
      </div>
      <div class="tour-view">
        <iframe src="" frameborder="0"></iframe>
      </div>
      <div class="tour-collection">
        <img src="https://drive.google.com/file/d/1II415IqZN-ISV8j6h75YebJIrdF9j0Vi/view?usp=sharing" alt="">
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
}
</style>