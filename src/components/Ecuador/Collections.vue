<template>
  <div class="collections" id="collections">
    <div class="filter-container">
      <ul class="filter-list" v-for="item in categories" v-bind:key="item.id">
        <li
          v-show="item.pais === 'ecu'"
          class="filter-item"
          @click="selectCategory(item.id)"
          :class="selectedCategory == item.id ? 'selected' : ''"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="collections-container">
      <div
        v-show="item.pais === 'ecu'"
        class="portada-container"
        v-for="item in collections"
        v-bind:key="item.id"
        @click="goToTour(item)"
      >
        <img class="portada" v-bind:src="item.image.url" alt="proyecto" />
        <h4 class="portada-title">{{ item.name }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Collections",
  computed: {
    collections() {
      let collections = this.$store.getters.allCollections;
      let selectedCollections = [];
      collections.forEach(element => {
        if (
          element.categories.filter(e => e.id == this.selectedCategory).length >
          0
        )
          selectedCollections.push(element);
      });
      return selectedCollections;
    },
    categories() {
      return this.$store.getters.allCategories;
    },
    selectedCategory() {
      return this.$store.getters.getSelectedCategory;
    },
  },
  methods: {
    goToTour(collection) {
      return this.$router.push({
        name: "TourEcu",
        params: { id: collection.id, name: collection.name },
      });
    },
    selectCategory(categoryId) {
      return this.$store.dispatch("setSelectedCategory", categoryId);
    },
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Brandon Thin";
  src: url("../../assets/Fonts/Brandon_light.otf") format("woff");
  font-weight: normal;
  font-style: normal;
}

.collections {
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
  @media (max-width: 1024px) {
    padding-top: 30px;
  }
  @media (max-width: 768px) {
    padding-top: 0px;
  }
  .filter-container {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .filter-list {
      list-style: none;
      margin: 0;
      padding: 20px;
      @media (max-width: 1024px) {
        padding: 10px;
      }
      .filter-item {
        padding: 1px 10px 1px 10px;
        font-size: 30px;
        font-family: "Brandon Thin", sans-serif;
        font-weight: 400;
        border-top: 1px solid transparent;
        border-bottom: 1px solid transparent;
        &:hover {
          border-bottom: 1px solid black;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          padding: 1px 5px 1px 5px;
          font-size: 25px;
        }
        @media (max-width: 425px) {
          font-size: 22px;
        }
      }
      .selected {
        border-bottom: 1px solid black !important;
      }
    }
  }
  .collections-container {
    width: 100%;
    display: inline-flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    .portada-container {
      box-sizing: border-box;
      width: calc(100% / 3);
      padding: 5px;
      display: flex;
      text-align: center;
      flex-direction: column;
      position: relative;
      & :hover {
        filter: none;
        cursor: pointer;
      }
      @media (max-width: 768px) {
        width: 50%;
      }
      @media (max-width: 425px) {
        width: 100%;
      }
    }
    .portada-title {
      width: calc(100% - 10px);
      font-size: 25px;
      font-family: "Lato", sans-serif;
      font-weight: 300;
      margin: 0;
      color: white;
      background-color: rgba(0, 0, 0, 0.7);
      text-transform: uppercase;
      position: absolute;
      bottom: 30px;
    }
    .portada {
      width: 100%;
      display: inline-flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      height: 40vh;
      object-fit: cover;
      filter: grayscale(80%);
    }
  }
}
</style>
