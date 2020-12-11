<template>
  <div class="admin-colecciones">
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
        <li v-for="item in colecciones" v-bind:key="item.id" class="list-item">
          <div class="datos-list" >
            <h4>Nombre: {{ item.name }}</h4>
            <h4>Descripción: {{ item.description }}</h4>
          </div>
          <!-- <button class="tour-button" v-on:click.prevent="goToTour(item.tours)">
            TOURS
          </button> -->
          <button
            class="change-button"
            v-on:click.prevent="openChangeModal(item)"
          >
            <img src="../../assets/config.png" alt="" />
          </button>
          <button class="delete-button" @click="openDeleteModal(item)">
            <img src="../../assets/delete.png" alt="" />
          </button>
        </li>
      </ul>
    </div>
    <ModalAdd ref="add">
      <template v-slot:body>
        <div class="modal-container">
          <input
            class="modal-selector"
            placeholder="Nombre"
            v-model="newCollection.name"
          />
          <input
            class="modal-selector"
            placeholder="Descripción"
            v-model="newCollection.description"
          />
          <input
            class="modal-selector"
            placeholder="Iframe"
            v-model="newCollection.iframe"
          />
          <input
            class="modal-selector"
            placeholder="Nombre imagen"
            v-model="newCollection.image.name"
          />
          <input
            class="modal-selector"
            placeholder="URL"
            v-model="newCollection.image.url"
          />
          <input
            class="modal-selector"
            placeholder="Categoria"
            v-model="newCollection.categories"
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
            placeholder="Nombre"
            v-model="updateCollection.name"
          />
          <input
            class="modal-selector"
            placeholder="Descripción"
            v-model="updateCollection.description"
          />
          <input
            class="modal-selector"
            placeholder="Nombre imagen"
            v-model="updateCollection.image.name"
          />
          <input
            class="modal-selector"
            placeholder="URL"
            v-model="updateCollection.image.url"
          />
          <select class="modal-selector" placeholder="Categoria" multiple>
            <option
              value=""
              v-for="item2 in categories"
              v-bind:key="item2.id"
              >{{ item2.name }}</option
            >
          </select>
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
        <p>*Se eliminaran todos los tours</p>
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
  </div>
</template>

<script>
import ModalDelete from "../../components/ModalDelete";
import ModalAdd from "../../components/ModalAdd";
import ModalChange from "../../components/ModalChange";

export default {
  data: () => ({
    title: "COLECCIONES",
    newCollection: {
      image: {},
    },
  }),
  methods: {
    goToTour(tours) {
      console.log(tours);
      this.$router.push({ name: "tours", params: { tours } });
    },
    openChangeModal(collectionData) {
      this.$store.dispatch("setUpdateCollection", collectionData);
      return this.$refs.change.openModal();
    },
    confirmChangeModal() {
      this.$store.dispatch("updateCollection");
      return this.$refs.change.closeModal();
    },
    openDeleteModal(collectionData) {
      this.$store.dispatch("setUpdateCollection", collectionData);
      return this.$refs.delete.openModal();
    },
    confirmDeleteModal() {
      this.$store.dispatch("deleteCollection");
      return this.$refs.delete.closeModal();
    },
    closeAddModal() {
      this.newCollection = { image: {} };
      return this.$refs.add.closeModal();
    },
    confirmAddModal() {
      this.$store.dispatch("addCollection", this.newCollection);
      this.newCollection = { image: {} };
      return this.$refs.add.closeModal();
    },
  },
  components: {
    ModalDelete,
    ModalAdd,
    ModalChange,
  },
  computed: {
    categories() {
      return this.$store.getters.allCategories;
    },
    colecciones() {
      return this.$store.getters.allCollections;
    },
    updateCollection() {
      return this.$store.getters.updateCollection;
    },
  },
  mounted() {
    this.$store.dispatch("getCollections");
    this.$store.dispatch("getCategories");
  },
};
</script>

<style lang="scss">
.admin-colecciones {
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
      padding-left: 30px;
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
      background-color: rgb(0, 0, 0);
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
        .tour-button {
          background-color: rgba(18, 221, 52, 0.8);
          width: 8%;
          height: 50%;
          border-radius: 15px;
          margin-right: 20px;
          color: white;
          font-family: "Lato", Helvetica, Arial, sans-serif;
          font-size: 15px;
          &:hover {
            border: 2px black solid;
            color: black;
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
