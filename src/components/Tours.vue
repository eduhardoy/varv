<template>
<div class="tours">
  <div class="filter-container">
    <ul class="filter-list" v-for="item2 in items2" v-bind:key="item2.id">
      <li class="filter-item">{{ item2.name }}</li>
    </ul>
  </div>
  <div class="tours-portadas">
    <div class="portada-container">
      <img class="portada" src="../assets/logo.png" alt="">
      <h4 class="portada-title">Title</h4>
    </div>
    <div class="portada-container">
      <img class="portada" src="../assets/logo.png" alt="">
      <h4 class="portada-title">Title</h4>
    </div>
    <div class="portada-container">
      <img class="portada" src="../assets/logo.png" alt="">
      <h4 class="portada-title">Title</h4>
    </div>
  </div>
</div>
</template>

<script>
import datos2 from "../../JSON EJEMPLOS/categorias.json";

export default {
  name: "Tours",
  computed: {
    items2() {
      return datos2.map((item2) => {
        return item2;
      });
    },
  },
};
</script>

<style lang="scss">
.tours {
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
  .filter-container{
    widows: 100%;
  }
  .tours-portada{
  width: 100%;
  display: flex;
  flex-direction: column;
  .portada-container{
  width: 33%;
  margin: 0;
}
}
}


</style>