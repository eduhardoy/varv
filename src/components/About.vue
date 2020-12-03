<template>
  <div class="about">
    <div class="frase">
      <h2>Hola, esto es <strong>VARV</strong></h2>
      <h2>Nosotros creamos Tours 360 para que logres</h2>
      <h2>darle dinámica y vida a tus proyectos</h2>
    </div>
    <div class="description">
      <figure class="devices">
        <img src="../assets/devices.png" alt="">
      </figure>
      <div class="lista">
        <h4>Nos destaca el sector en la realizacion de Tours Virtuales 360 de Alta Calidad para el sector Inmobiliario y Cultural</h4>
        <ul>
          <h5>Tours insertables en paginas WEB</h5>
          <h5>Compatibles con nuevas tecnologias y dispositivos</h5>
          <h5>Fotos 360 para el Facebook</h5>
          <h5>Tour VR insertable en Google Maps y Street View</h5>
          <h5>Tour Gafas VR</h5>
          <h5>Contenido de Realidad Virtual para Ferias</h5>
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
}

.frase h2 strong{
  font-family: "Brandon Text", sans-serif;
  font-weight: 400;
  margin: 0;
}

.description {
  width: 100%;
  height: 70%;
  margin-top: 8%;
  margin-bottom: 3%;
  display: flex;
  justify-content: center;
}

.devices {
  width: 50%;
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
  font-size: 20px;
}

.lista h4 {
  font-weight: 300;
  margin-top: 0;
}

.lista h5 {
  font-weight: 300;
}

@media (max-width: 950px) {
.about {
  margin-top: 30px;
}
}
</style>