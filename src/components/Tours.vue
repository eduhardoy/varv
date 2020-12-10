<template>
<div class="tours">
  <div class="filter-container">
    <ul class="filter-list" v-for="item2 in items2" v-bind:key="item2.id">
      <li class="filter-item">{{ item2.name }}</li>
    </ul>
  </div>
  <div class="tours-container">
    <div class="portada-container">
      <img class="portada" src="../assets/catedral.png" alt="">
      <h4 class="portada-title">Title</h4>
    </div>
    <div class="portada-container">
      <img class="portada" src="../assets/catedral.png" alt="">
      <h4 class="portada-title">Title</h4>
    </div>
    <div class="portada-container">
      <img class="portada" src="../assets/catedral.png" alt="">
      <h4 class="portada-title">Title</h4>
    </div>
    <div class="portada-container">
      <img class="portada" src="../assets/catedral.png" alt="">
      <h4 class="portada-title">Title</h4>
    </div>
    <div class="portada-container">
      <img class="portada" src="../assets/catedral.png" alt="">
      <h4 class="portada-title">Title</h4>
    </div>
    <div class="portada-container">
      <img class="portada" src="../assets/catedral.png" alt="">
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
@font-face {
  font-family: 'Brandon Thin';
  src:  url('../assets/Fonts/Brandon_light.otf') format('woff');
  font-weight: normal;
  font-style: normal;
}

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
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .filter-list{
      list-style: none;
      .filter-item{
        padding: 1px 10px 1px 10px;
        font-size: 30px;
        font-family: "Brandon Thin", sans-serif;
        font-weight: 400;
        border-top: 1px solid transparent;
        border-bottom: 1px solid transparent;
        &:hover {
        border-bottom: 1px solid black;
        }
      }
    }
  }
  .tours-container{
  width: 100%;
  display: inline-flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  .portada-container{
  box-sizing: border-box;
  width: calc(100% / 3);
  padding: 20px;
  display: flex;
  flex-direction: column;
  .portada{
    width: 100%;
  }
  .portada-title{
    font-size: 25px;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    margin: 0;
    margin-top: 20px;
  }
}
}
}


</style>