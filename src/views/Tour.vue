<template>
  <div>TOUR ID {{ $route.params.id }}
    <div>
      <div>
        <h2></h2>
        <h3></h3>
      </div>
      <div>
        <iframe src="" frameborder="0"></iframe>
      </div>
      <div>
        <figure>
          <img src="" alt="">
        </figure>
      </div>
    </div>
  </div>
    <Header />
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