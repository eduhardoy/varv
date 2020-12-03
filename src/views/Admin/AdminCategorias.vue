<template>
  <div class="admin-categorias">
    <div class="admin-title">
      <div class="title-box">
        <h1>{{title}}</h1>
      </div>
      <button class="add-button">
      <h2>+</h2>
      </button>
    </div>
    <div class="admin-body">
      <ul class="admin-list">
        <li v-for="item in items" v-bind:key="item.id" class="list-item">
          <div class="datos-list">
            <h4>Nombre: {{ item.name }}</h4>
            <h4>Descripción: {{ item.description }}</h4>
          </div>
          <button class="change-button">
            <img src="../../assets/config.png" alt="">
          </button>
          <button class="delete-button">
            <img src="../../assets/delete.png" alt="">
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import datos from "../../../JSON EJEMPLOS/categorias.json";

export default {
  data: () => {
    return {
      title: "CATEGORÍAS",
    };
  },
  computed: {
    items() {
      return datos.map((item) => {
        return item;
      })
    }
  }
};
</script>

<style lang="scss">
.admin-categorias {
  position: relative;
  background-color: white;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Lato", Helvetica, Arial, sans-serif;

  .admin-title {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .title-box {
    height: 100px;
    width: 22%;
    color: black;
    background-color: transparent;
    border-bottom: solid 2px black;
    display: flex;
    align-items: center;
    justify-content: center;
    h1 {
      font-family: "Lato", Helvetica, Arial, sans-serif;
      font-size: 45px;
      font-weight: 300;
    }
    }
    .add-button{
      z-index: 999;
      border-radius: 100%;
      top: 25px;
      right: 100px;
      width: 70px;
      height: 70px;
      position: fixed;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 1;
      background-color: rgb(14, 14, 14);
      box-shadow: 0px 0px 9px -2px #000000;
      color: rgb(255, 255, 255);
      h2{
        font-family: 'Rubik', sans-serif;
        margin: 0;
        padding-bottom: 5px;
        font-size: 70px;
        font-weight: 500;
      }
    }
    }

  .admin-body {
    background-color: white;
    width: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .admin-list{
      width: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 0;
      margin: 0;
      margin-top: 30px;
      .list-item {
      padding: 0;
      margin: 0;
      margin-top: 30px;
      width: 80%;
      height: 100px;
      background: #ededed;
      border-radius: 25px;
      box-shadow: 0px 0px 9px -2px #000000;
      display: flex;
      justify-content: center;
      align-items: center;
      .datos-list{
        width: 60%;
        height: 70%;
        margin-left: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        background: #ededed;
        h4{
          font-family: "Lato", Helvetica, Arial, sans-serif;
          font-size: 28px;
          font-weight: 300;
          margin: 0;
          margin-top: 5px;
          margin-bottom: 10px;
        }
      }
      .change-button{
        width: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
          width: 50px;
          background: #ededed;
        }
      }
      .delete-button{
        width: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
          width: 50px;
          background: #ededed;
        }
      }
      }
    }
  }
}
</style>