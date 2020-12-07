<template>
  <header class="header">
    <div class="logo">
      <router-link to="/">
        <img alt="Vue logo" src="../assets/VARVLOGO.png" >
      </router-link>
    </div>
    <div class="menu">
      <ul class="nav">
        <li class="menu-elements"><router-link to="about">Nosotros</router-link></li>
        <li class="menu-elements"><router-link to="tours">Proyectos</router-link></li>
        <li class="menu-elements"><router-link to="contact">Precios</router-link></li>
        <li class="menu-elements"><router-link to="contact">Contacto</router-link></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
@font-face {
  font-family: 'Brandon';
  src:  url('../assets/Fonts/Brandon_bld.otf') format('woff');
  font-weight: normal;
  font-style: normal;
}
.header {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  box-shadow: 0px 8px 9px -1px rgba(125, 120, 120, 0.6);
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
  width: 50%;
}

.nav {
  display: flex;
  flex-direction: row;
  justify-content: flex;
  align-items: center;
  padding-right: 70px;
  margin: 0;
  list-style-type: none;
}

.menu-elements {
  margin-left: 40px;
  height: 30px;
  padding-right: 10px;
  padding-left: 10px;
} 
.menu-elements:hover {
  border-bottom: 0.1em solid black;
}
.menu-elements a{
  text-decoration: none;
  color: black;
  font-family: "Brandon", sans-serif;
  font-size: 18px;
  text-align: center;
  text-transform: uppercase;
}
</style>