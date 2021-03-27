<template>
  <div class="admin-tours">
    <div class="admin-title">
      <div class="title-box">
        <h1>{{ title }}</h1>
      </div>
      <button class="add-button" @click="$refs.add.openModal()">
        <h2>+</h2>
      </button>
    </div>
    <div class="admin-body">
      <ul class="admin-list">
        <li v-for="item in items" v-bind:key="item.id" class="list-item">
          <h1>{{ item.id }}</h1>
          <div class="datos-list">
            <h4>Nombre: {{ item.name }}</h4>
            <h4>Descripcion: {{ item.description }}</h4>
          </div>
          <button class="change-button" @click="$refs.change.openModal()">
            <img src="../../assets/config.png" alt="" />
          </button>
          <button class="delete-button" @click="$refs.delete.openModal()">
            <img src="../../assets/delete.png" alt="" />
          </button>
        </li>
      </ul>
    </div>
    <ModalAdd ref="add">
      <template v-slot:body>
        <div class="modal-container">
          <input class="modal-selector" placeholder="Nombre" />
          <input class="modal-selector" placeholder="Descripción" />
          <input class="modal-selector" placeholder="Nombre imagen" />
          <input class="modal-selector" placeholder="URL" />
        </div>
      </template>
    </ModalAdd>
    <ModalChange ref="change">
      <template v-slot:body>
        <div class="modal-container">
          <input class="modal-selector" placeholder="Nombre" />
          <input class="modal-selector" placeholder="Descripción" />
          <input class="modal-selector" placeholder="Nombre imagen" />
          <input class="modal-selector" placeholder="URL" />
        </div>
      </template>
    </ModalChange>
    <ModalDelete ref="delete">
      <template v-slot:body>
        <p>Esta seguro que desea eliminar?</p>
      </template>
    </ModalDelete>
  </div>
</template>

<script>
import ModalDelete from "../../components/Modals/ModalDelete";
import ModalAdd from "../../components/Modals/ModalAdd";
import ModalChange from "../../components/Modals/ModalChange";

export default {
  props: ["tours"],
  data: () => {
    return {
      title: "TOURS",
    };
  },
  components: {
    ModalDelete,
    ModalAdd,
    ModalChange,
  },
  computed: {
    items() {
      console.log(this.tours);
      return this.tours.map(item => {
        console.log(item.id);
        return item;
      });
    },
  },
};
</script>

<style lang="scss">
.admin-tours {
  position: relative;
  background-color: white;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Lato", Helvetica, Arial, sans-serif;
  .modal-container {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    .modal-selector {
      text-align: center;
      width: 30%;
      font-family: "Lato", Helvetica, Arial, sans-serif;
      margin-top: 20px;
      padding: 20px;
      margin-left: 20px;
      border: 2px solid black;
      border-radius: 25px;
      font-size: 25px;
      background-color: #ededed;
      outline: none;
    }
  }
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
    .add-button {
      z-index: 997;
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
      &:hover {
        background-color: rgba(18, 221, 52, 0.8);
        color: white;
      }
      h2 {
        font-family: "Rubik", sans-serif;
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
    .admin-list {
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
        .datos-list {
          width: 60%;
          height: 70%;
          margin-left: 50px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          background: #ededed;
          h4 {
            font-family: "Lato", Helvetica, Arial, sans-serif;
            font-size: 28px;
            font-weight: 300;
            margin: 0;
            margin-top: 5px;
            margin-bottom: 10px;
          }
        }
        .change-button {
          width: 10%;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 50px;
            background: #ededed;
          }
          &:hover {
            img {
              width: 80px;
            }
          }
        }
        .delete-button {
          width: 10%;
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 50px;
            background: #ededed;
          }
          &:hover {
            img {
              width: 80px;
            }
          }
        }
      }
    }
  }
}
</style>
