<template>
  <div class="admin-clientes">
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
        <li v-for="item in clients" v-bind:key="item.id" class="list-item">
          <div class="order-number">
            {{ item.order }}
          </div>
          <div class="datos-list">
            <h4>Nombre: {{ item.name }}</h4>
            <h4>URL: {{ item.description }}</h4>
          </div>
          <button class="change-button" v-on:click="openChangeModal(item)">
            <img src="../../assets/config.png" alt="" />
          </button>
          <button class="delete-button" @click="openDeleteModal(item)">
            <img src="../../assets/delete.png" alt="" />
          </button>
        </li>
      </ul>
    </div>
  </div>
  <ModalAdd ref="add">
    <template v-slot:body>
      <div class="modal-container">
        <input
        class="modal-selector"
        placeholder="Order"
        v-model="newClient.order"
      />
      <input
        class="modal-selector"
        placeholder="Nombre"
        v-model="newClient.name"
      />
      <input
        class="modal-selector"
        placeholder="Descripción"
        v-model="newClient.description"
      />
      <input
        class="modal-selector"
        placeholder="Nombre Imagen"
        v-model="newClient.image.name"
      />
      <input
        class="modal-selector"
        placeholder="URL"
        v-model="newClient.image.url"
      />
      </div>
      
    </template>
    <template v-slot:footer>
      <button class="cancel_button" @click="closeAddModal()">CANCELAR</button>
      <button class="add_button" @click="confirmAddModal()">AGREGAR</button>
    </template>
  </ModalAdd>
  <ModalChange ref="change">
    <template v-slot:body>
      <div class="modal-container">
        <input
        class="modal-selector"
        placeholder="Order"
        v-model="updateClient.order"
      />
      <input
        class="modal-selector"
        placeholder="Nombre"
        v-model="updateClient.name"
      />
      <input
        class="modal-selector"
        placeholder="Descripción"
        v-model="updateClient.description"
      />
      <input
        class="modal-selector"
        placeholder="Nombre Imagen"
        v-model="updateClient.image.name"
      /><input
        class="modal-selector"
        placeholder="URL"
        v-model="updateClient.image.url"
      />
      </div>
      
    </template>
    <template v-slot:footer>
      <button class="cancel_button" @click="$refs.change.closeModal()">
        CANCELAR
      </button>
      <button class="change_button" @click="confirmChangeModal()">
        MODIFICAR
      </button>
    </template>
  </ModalChange>
  <ModalDelete ref="delete">
    <template v-slot:body>
      <p>Esta seguro que desea eliminar?</p>
    </template>
    <template v-slot:footer>
      <button class="cancel_button" @click="$refs.delete.closeModal()">
        CANCELAR
      </button>
      <button class="delete_button" @click="confirmDeleteModal()">
        ELIMINAR
      </button>
    </template>
  </ModalDelete>
</template>

<script>
import ModalDelete from "../../components/ModalDelete";
import ModalAdd from "../../components/ModalAdd";
import ModalChange from "../../components/ModalChange";
import datos from "../../../JSON EJEMPLOS/clients.json";

export default {
  data: () => {
    return {
      newClient: {
        image: {},
      },
      title: "CLIENTES",
    };
  },
  components: {
    ModalDelete,
    ModalAdd,
    ModalChange,
  },
  methods: {
    openChangeModal(clientData) {
      this.$store.dispatch("setUpdateClient", clientData);
      return this.$refs.change.openModal();
    },
    confirmChangeModal() {
      this.$store.dispatch("updateClient");
      return this.$refs.change.closeModal();
    },
    openDeleteModal(clientData) {
      this.$store.dispatch("setUpdateClient", clientData);
      return this.$refs.delete.openModal();
    },
    confirmDeleteModal() {
      this.$store.dispatch("deleteClient");
      return this.$refs.delete.closeModal();
    },
    closeAddModal() {
      this.newClient = {};
      return this.$refs.add.closeModal();
    },
    confirmAddModal() {
      this.$store.dispatch("addClient", this.newClient);
      this.newClient = {};
      return this.$refs.add.closeModal();
    },
  },
  computed: {
    items() {
      return datos.map(item => {
        return item;
      });
    },
    clients() {
      return this.$store.getters.allClients;
    },
    updateClient() {
      return this.$store.getters.updateClient;
    },
  },
  mounted() {
    this.$store.dispatch("getClients");
  },
};
</script>

<style lang="scss">
/* TODO Ordenar modal-selector donde corresponde */
.admin-clientes {
  position: relative;
  background-color: white;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
      margin-bottom: 40px;
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
        .order-number{
          font-size: 28px;
        }
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
</style>
