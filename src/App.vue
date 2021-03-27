<template>
  <!-- ROUTER -->
  <!-- LOADING COMPONENT -->
  <Loader v-if="$store.getters.isLoading" />
  <router-view />
</template>

<script>
import Loader from "../src/components/Loader";
export default {
  name: "App",
  components: {
    Loader,
  },
};
</script>

<style>
body {
  margin: 0px;
}

#app {
  font-family: "Lato", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
