<template>
  <div class="about">
    <div class="frase">
      <h2>Hola, esto es <strong>VARV</strong>.</h2>
      <h2 class="frase-space">Con nosotros podrás darle</h2>
      <h2 class="frase-space">dinámica y vida a tus proyectos</h2>
    </div>
    <div class="description">
      <figure class="devices">
        <img src="../assets/devices.png" alt="">
      </figure>
      <div class="lista">
        <ul>
          <h5> Fotografía y vídeo en 360°</h5>
          <h5> Tours virtuales interactivos</h5>
          <h5> Tomas aéreas con dron</h5>
          <h5> Levantamiento en 3D</h5>
          <h5> Diseño arquitectónico</h5>
          <h5> Consultoría y construcción</h5>
          <h5> Capacitación digital</h5>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style>
@font-face {
  font-family: 'Brandon';
  src:  url('../assets/Fonts/Brandon_med.otf') format('woff');
  font-weight: normal;
  font-style: normal;
}

.about {
  max-width: 1700px;
  flex: 1%;
  margin: 0 auto;
  padding-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.frase {
  width: 100%;
  height: 30%;
  margin-top: 3%;
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.frase h2 {
  font-weight: 300;
  margin: 0;
  letter-spacing: 0.1em
}


.frase h2 strong{
  font-family: "Brandon", sans-serif;
  font-weight: 400;
  margin: 0;
}

.description {
  width: 100%;
  height: 60%;
  margin-top: 5%;
  margin-bottom: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.devices {
  width: 40%;
  height: 100%;
  margin: 0;
}

.devices img{
  width: 100%;
  height: 100%;
}

.lista {
  width: 30%;
  text-align: justify;
  font-weight: 300;
  font-size: 25px;
  display: flex;
  align-items: flex-start;
  margin-left: 40px;
}

.lista h5 {
  font-family: "Brandon", sans-serif;
  font-weight: 400;
  font-size: 30px;
  margin: 0;
  margin-top: 10px;
  letter-spacing: 2px;
}

.lista h5::before {content: "•"; color: rgb(25,147,193)}

@media (max-width: 950px) {
.about {
  margin-top: 30px;
}
}
</style>