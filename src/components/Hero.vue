<template>
  <div class="hero">
    <div class="hero-container">
      <h1 class="hero-title">Hola, esto es <strong>VARV</strong></h1>
      <h2 class="hero-details">
        Con nosotros podrás darle <br />dinámica y vida a tus proyectos
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style>
@font-face {
  font-family: "Brandon";
  src: url("../assets/Fonts/Brandon_reg.otf") format("woff");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Brandon Thin";
  src: url("../assets/Fonts/Brandon_thin.otf") format("woff");
  font-weight: normal;
  font-style: normal;
}

.hero {
  background-image: url("../assets/mural.png");
  background-color: #ffffff;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 95vh;
  display: flex;
  flex-direction: column;
  position: relative;
}
.hero-container {
  width: 40%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  position: absolute;
  bottom: 45%;
  right: 30px;
}
.hero-title {
  margin: 0;
  color: #ffffff;
  font-family: "Lato";
  font-size: 65px;
  font-weight: 300;
  text-shadow: 0px 1px 9px #000000;
}
.hero-title strong {
  font-family: "Brandon Thin";
}
.hero-details {
  margin: 0;
  color: #ffffff;
  font-family: "Lato";
  font-weight: 300;
  font-size: 45px;
  text-shadow: 0px 1px 9px #000000;
}

@media (max-width: 1480px) {
  .hero-title {
    font-size: 55px;
  }
  .hero-details {
    font-size: 35px;
  }
}
@media (max-width: 1130px) {
  .hero-title {
    font-size: 50px;
  }
  .hero-details {
    font-size: 30px;
  }
}
@media (max-width: 1120px) {
  .hero-container {
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    right: 0;
    top: 0;
    position: relative;
  }
  .hero-title {
    position: absolute;
    top: 15px;
  }
  .hero-details {
    position: absolute;
    bottom: 45px;
  }
}

@media (max-width: 1120px) {
  .hero-title {
    font-size: 45px;
  }
  .hero-details {
    font-size: 30px;
  }
}
</style>
