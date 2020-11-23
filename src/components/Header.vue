<template>
  <header class="header">
    <div class="logo">
      <router-link to="/">
        <img alt="Vue logo" src="../assets/VARVLOGO.png" >
      </router-link>
    </div>
    <div class="menu">
      <ul class="nav">
        <li><router-link to="about">NOSOTROS</router-link></li>
        <li><router-link to="tours">PROYECTOS</router-link></li>
        <li><router-link to="contact">CONTACTO</router-link></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String,
  },
};
</script>

<style>
.header {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  background-color: rgba(0, 0, 0, 0.0);
  background-color: white;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
    width: 20%;
}
.logo img {
  width: auto;
  height: 80px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.menu {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 80%;
}

.nav {
  display: flex;
  flex-direction: row;
  padding-right: 70px;
  margin: 0;
}

ul {
  list-style-type: none;
}
li {
  padding-left: 30px;
}
a {
  text-decoration: none;
  color: black;
  font-family: "Brandon Text", sans-serif;
  font-size: 22px;
  font-weight: 400;
}
</style>