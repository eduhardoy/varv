<template>
  <div class="prices">
    <div class="list">
      <div class="pricecase">
      <div class="row1">
        <h2 class="title">BÁSICO</h2>
      </div>
      <div class="row2">
        <h4 class="title2">$20</h4>
      </div>
      <div class="description1">
        <h3>Una imagen 360°</h3>
      </div>
      <div class="description2">
        <h3>Un punto de interacción</h3>
      </div>
      <div class="description3">
      </div>
      <div class="description4">
      </div>
    </div>
    <div class="pricecase">
      <div class="row1">
        <h2 class="title">ESTÁNDAR</h2>
      </div>
      <div class="row2mid">
        <h4 class="title2">$200</h4>
      </div>
      <div class="description1">
        <h3>Tour virtual de hasta 12 escenas</h3>
      </div>
      <div class="description2">
        <h3>5 puntos de interacción</h3>
      </div>
      <div class="description3">
        <h3>Mapa de ubicación (Si aplica)</h3>
      </div>
      <div class="description4">
        <h3>Sonido (Opcional)</h3>
      </div>
    </div>
    <div class="pricecase">
      <div class="row1">
        <h2 class="title">ESPECIAL</h2>
      </div>
      <div class="row2end">
        <h4 class="title2">+$200</h4>
      </div>
      <div class="description1">
        <h3>Vídeos 360°</h3>
      </div>
      <div class="description2">
        <h3>Tours interactivos personalizados</h3>
      </div>
      <div class="description3">
        <h3>Fotos y vídeos con dron</h3>
      </div>
      <div class="description4">
        <h3>*Cuentanos sobre tu proyecto y cotiza</h3>
      </div>
    </div>
    </div>
    <div class="iva">
      <h2>*Los precios no incluyen IVA</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Prices",
};
</script>

<style>
.prices h3{
  font-weight: 400;
  margin: 0;
}

.prices {
  background-color: #ffffff;
  width: 100%;
  padding-top: 50px;
}

.list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 50px;
}

.pricecase {
  height: 480px;
  width: 25%;
  margin-left: 50px;
  min-width: 450px;
  max-width: 500px;
  margin-top: 50px;
  border-radius: 20%;
  border: solid 1px black;
  display: grid;
  grid-template-rows: 100px 120px 50px 50px 50px 50px;
  grid-template-columns: 1fr;
  overflow: hidden;
}

.row1 {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  margin: 0;
}

.title {
  width: 50%;
  height: 30%;
  font-size: 30px;
  margin: 0;
  color: #ffffff;
}

.row2 {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(15,160,194, 0.6);
  margin: 0;
  margin-bottom: 5px;
}

.row2mid{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(15,160,194, 0.6);
  margin: 0;
  margin-bottom: 5px;
}

.row2end{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(15,160,194, 0.6);
  margin: 0;
  margin-bottom: 5px;
}

.title2 {
  width: 50%;
  height: 40%;
  font-size: 60px;
  padding-bottom: 20px;
  margin: 0;
  color: #ffffff;
}

.description1 {
  grid-row: 3;
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
}

.description2 {
  grid-row: 4;
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
}

.description3 {
  grid-row: 5;
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
  padding-left: 30px;
  padding-right: 30px;
}

.description4 {
  grid-row: 6;
  text-align: center;
  font-size: 18px;
  margin-top: 20px;
}

.iva h2{
  padding-bottom: 15px;
  padding-top: 20px;
  font-size: 30px;
  font-weight: 300;
}

</style>