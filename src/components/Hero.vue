<template>
  <div class="hero">
    <div class="hero-container">
      <h1 class="hero-title">VARV</h1>
      <h2 class="hero-details">Tours Virtuales 360</h2>
      <h2 class="hero-details">Arquitectura</h2>
      <h2 class="hero-details">Realidad Virtual</h2>
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
  font-family: 'Brandon';
  src:  url('../assets/Fonts/Brandon_reg.otf') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Brandon Thin';
  src:  url('../assets/Fonts/Brandon_thin.otf') format('woff');
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
  height: 850px;
  margin-top: 65px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
}
.hero-container{
  width: 40%;
  height: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-top: 145px;
}
.hero-title {
  margin: 0;
  color: #ffffff;
  font-family: "Brandon";
  font-size: 120px;
}
.hero-details {
  margin: 0;
  color: #ffffff;
  font-family: "Brandon Thin";
  font-size: 60px;
}

@media (max-width: 1750px) {
  .hero-container{
    margin-top: 165px;
}
}
@media (max-width: 1050px) {
  .hero-container{
  width: 100%;
  align-items: center;
  margin: 0;
}
.hero-title {
  margin-bottom: 400px;
  margin-top: 20px;
}
}
@media (max-width: 768px) {
.hero {
  margin-top: 50px;
}
}

</style>