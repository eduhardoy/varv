<template>
  <div class="prices" id="prices">
    <div class="list">
      <div class="pricecase">
      <div class="row1">
        <h2 class="title">BÁSICO</h2>
      </div>
      <div class="row2">
        <h4 class="title2">$100</h4>
      </div>
      <div class="row3">
        <h3>5 imagenes 360°</h3>
        <h3>2 puntos de interacción</h3>
      </div>
    </div>
    <div class="pricecase">
      <div class="row1">
        <h2 class="title">ESTÁNDAR</h2>
      </div>
      <div class="row2">
        <h4 class="title2">$200</h4>
      </div>
      <div class="row3">
        <h3>Tour virtual de hasta 12 escenas</h3>
        <h3>5 puntos de interacción</h3>
        <h3>Mapa de ubicación (Si aplica)</h3>
        <h3>Sonido (Opcional)</h3>
      </div>
    </div>
    <div class="pricecase">
      <div class="row1">
        <h2 class="title">ESPECIAL</h2>
      </div>
      <div class="row2">
        <h4 class="title">+$200</h4>
      </div>
      <div class="row3">
        <h3>Vídeos 360°</h3>
        <h3>Tours interactivos personalizados</h3>
        <h3>Fotos y vídeos con dron</h3>
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
  padding-top: 70px;
}

.list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.pricecase {
  height: 500px;
  width: 400px;
  margin: 20px;
  box-sizing: border-box;
  min-width: 300px;
  border-radius: 10%;
  box-shadow: 0px 0px 14px 0px #7A7A7A;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.row1 {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  height: 20%;
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
  height: 20%;
}

.title2 {
  width: 50%;
  height: 40%;
  font-size: 60px;
  line-height:60px;
  padding-bottom: 20px;
  margin: 0;
  color: #ffffff;
}

.row3 {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin: 0;
  height: 50%;
  margin: 20px;
}
.row3 h3{
  padding: 10px;
}

.iva h2{
  font-size: 30px;
  font-weight: 300;
}

</style>