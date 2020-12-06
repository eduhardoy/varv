<template>
  <div class="hero">
    <div class="hero-container">
      <h1 class="hero-title">TOURS INTERACTIVOS 360°</h1>
      <h2 class="hero-details">PARA EL SECTOR EDUCATIVO, INMOBILIARIO Y CULTURAL</h2>
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
.hero {
  background-image: url("../assets/mural.png");
  background-color: #ffffff;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 875px;
  margin-top: 95px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
}
.hero-container{
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.hero-title {
  color: #ffffff;
  font-family: "Brandon";
  font-size: 45px;
}
.hero-details {
  color: #ffffff;
  font-family: "Brandon";
  font-size: 30px;
}
</style>