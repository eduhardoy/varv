<template>
  <div class="about" id="about">
    <div class="frase">
      <h2>
        Nos especializamos en Tours Virtuales 360°, modelado 3D, realidad
        virtual y levantamientos con drones.
      </h2>
    </div>
    <div class="description">
      <figure class="description-image">
        <img src="../assets/catedral2.png" alt="" />
      </figure>
      <div class="lista">
        <ul class="item-about-list">
          <h5>Fotografía y vídeo en 360°</h5>
          <h5>Tours virtuales interactivos</h5>
          <h5>Tomas aéreas con dron</h5>
          <h5>Levantamiento en 3D</h5>
          <h5>Diseño arquitectónico</h5>
          <h5>Consultoría y construcción</h5>
          <h5>Capacitación digital</h5>
          <h5>Street View</h5>
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
  font-family: "Brandon";
  src: url("../assets/Fonts/Brandon_med.otf") format("woff");
  font-weight: normal;
  font-style: normal;
}

.about {
  max-width: 1500px;
  margin: 0 auto;
  padding-top: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.frase {
  width: 70%;
  height: 30%;
  margin-top: 3%;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.frase h2 {
  font-weight: 300;
  font-size: 40px;
  margin: 0;
  letter-spacing: 0.1em;
}

.description {
  width: 80%;
  height: 100%;
  margin-top: 1%;
  margin-bottom: 3%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.description-image {
  width: 50%;
  height: auto;
  margin: 0;
}

.description-image img {
  width: 100%;
  height: auto;
}

.lista {
  width: 50%;
  text-align: justify;
  font-weight: 300;
  font-size: 25px;
  display: flex;
  align-items: center;
}

.lista h5 {
  font-family: "Lato", sans-serif;
  font-weight: 300;
  font-size: 20px;
  margin: 0;
  margin: 15px;
  padding: 20px;
  border: black solid 1px;
  border-radius: 35px;
}

.item-about-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0;
  padding: 0;
}

@media (max-width: 1145px) {
  .frase h2 {
    font-size: 35px;
  }
  .lista h5 {
    font-size: 15px;
  }
}

@media (max-width: 1024px) {

  .description {
    flex-direction: column;
    width: 100%;
  }
  .lista {
    width: 100%;
  }
}

@media (max-width: 950px) {
  .about {
    margin-top: 30px;
  }
}

@media (max-width: 768px) {
  .frase {
    width: 80%;
    
  }
  .frase h2 {
    font-size: 30px;
  }
  .description-image {
    width: 60%;
  }
}
@media (max-width: 425px) {
  .description-image {
    width: 100%;
  }
  .frase {
    font-size: 20px;
    width: 90%;
  }
  .frase h2 {
    font-size: 25px;
  }
  .lista h5 {
    font-size: 18px;
    padding: 10px;
  }
}
@media (max-width: 950px) {
}
</style>
