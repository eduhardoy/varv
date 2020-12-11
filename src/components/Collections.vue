<template>
  <div class="collections">
    <div class="filter-container">
      <ul class="filter-list" v-for="item in categories" v-bind:key="item.id">
        <li class="filter-item">{{ item.name }}</li>
      </ul>
    </div>
    <div
      class="collections-container"
      v-for="item in collections"
      v-bind:key="item.id"
    >
      <div class="portada-container" @click="goToTour(item)">
        <img class="portada" v-bind:src="item.image.url" alt="" />
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
      return this.$store.getters.allCollections;
    },
    categories() {
      return this.$store.getters.allCategories;
    },
  },
  methods: {
    goToTour(collection) {
      return this.$router.push({ name: "Tour", params: { collection } });
    },
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Brandon Thin";
  src: url("../assets/Fonts/Brandon_light.otf") format("woff");
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
  .filter-container {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .filter-list {
      list-style: none;
      .filter-item {
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
  .collections-container {
    width: 100%;
    display: inline-flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    .portada-container {
      box-sizing: border-box;
      width: calc(100% / 3);
      padding: 20px;
      display: flex;
      flex-direction: column;
      .portada-title {
        font-size: 25px;
        font-family: "Lato", sans-serif;
        font-weight: 400;
        margin: 0;
        margin-top: 20px;
      }
      .portada {
        width: 100%;
        display: inline-flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        height: 90%;
        object-fit: cover;
      }
    }
  }
}
</style>
